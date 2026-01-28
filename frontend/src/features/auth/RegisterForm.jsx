import api from "../../api/axiosConfig";
import Form from "../../components/Form"

function RegisterForm () {
    const inputs = [
        {name:"username", type:"text",label:"Username",required:true},
        {name:"email", type:"email",label:"Email",required:true},
        {name:"password", type:"password",label:"Password",required:true},
        ];

    const handleSubmit = async ({username,email,password}) => {
        try{
            await api.post("/users/register", {username,email,password });
            alert("Usuario registrado con éxito!");
        }
        catch(error){
            alert(`Registro fallído: ${error.response.data.message}`);
        }
    }
    return(
        <Form
        inputs={inputs}
        onSubmit={handleSubmit}
        submitText={"Register"}
        />
    );
}
    export default RegisterForm;