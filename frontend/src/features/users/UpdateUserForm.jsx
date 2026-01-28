import Form from "../../components/Form";
import api from "../../api/axiosConfig";

function UpdateUserForm({user, onClose, refreshUsers}){
    if(!user) return null;
    const inputs =[
    {name: "username", label: "Username", type:"text", required: true},
    {name: "email", label: "Email", type:"email",required:true},
    {name: "password", label: "Password", type:"password",required:false},
    {name: "confirmPassword", label: "Confirm Password", type:"password",required:false}
    ];

    const handleUpdate = async (data) =>{
        try{
            const changes = {
                username: data.username,
                email: data.email
            };
        
            if(data.password && data.password.trim() !== ""){
                if(data.password == data.confirmPassword ){
                    changes.password = data.password;
                }
                else{throw new Error("Las contraseñas no coinciden")}
            }
            await api.patch(`/users/${user.id}`,changes);
            alert("Usuario actualizado con éxito");
            onClose();
            refreshUsers();
        } 
        catch (error){
            alert(`Error al actualizar usuario ${error.message}`);
        }
    }
    return(
        <Form 
            inputs={inputs}
            initialValues={{username:user.username, email: user.email}}
            onSubmit={handleUpdate}
            submitText="Actualizar"
            />
    );

}
export default UpdateUserForm;