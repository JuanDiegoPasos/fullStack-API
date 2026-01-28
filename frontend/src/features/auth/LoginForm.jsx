import api from "../../api/axiosConfig";
import Form from "../../components/Form"
import {useNavigate} from "react-router-dom";

function LoginForm () {
    const navigate = useNavigate();
    const inputs = [
        {name:"email", type:"email",label:"Email",required:true},
        {name:"password", type:"password",label:"Password",required:true}];

    const handleSubmit = async ({email,password}) => {
        try{
            const res = await api.post("/users/login", {email,password });
            const token = res.data.token;
            const username = res.data.username;
            if (!token) {
                throw new Error("token invalido, vuelve a intentarlo");
            }
            localStorage.setItem("username", username)
            localStorage.setItem("token", token);
            navigate("/dashboard");       
        }
        catch(error){
            alert(`Login fallido: ${error.response.data.message}`);
        }
    }
    return(
        <Form
        inputs={inputs}
        onSubmit={handleSubmit}
        submitText={"Login"}
        />
    );
}
    export default LoginForm;