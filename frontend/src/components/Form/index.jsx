import { useState } from "react";
import Button from "../Button";

function Form({inputs=[], initialValues={}, onSubmit, submitText}) {
    const [formData,setFormData] = useState(initialValues);
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData((prev) =>({...prev, [name]: value}));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit(formData);
    }

    return(
        <form onSubmit={handleSubmit}>
            {inputs.map((input) => {
                return (
                <div className="p-3 m-3 text-center " key={input.name}>
                    <input className="w-full p-3 border rounded-full border-gray-200 focus:border-gray-400 focus:outline-none transition-colors "
                        type={input.type}
                        name={input.name}
                        value={formData[input.name] || ""}
                        onChange={handleChange}
                        placeholder={input.label || ""}
                        required={input.required}                        
                    />
                </div>
                );
            })}
            <Button variant="lilac" type="submit">
                {submitText}
            </Button>
        </form>
    );
}

export default Form