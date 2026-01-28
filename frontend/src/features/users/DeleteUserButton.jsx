import api from "../../api/axiosConfig";
import Button from "../../components/Button";
function DeleteUserButton({id,onClose, refreshUser}){

    const handleDelete = async () =>{
        try {
            await api.delete(`/users/${id}`);
            alert("Usuario eliminado con éxito");
            onClose();
            refreshUser();
        } catch (error) {
            alert(`Error al eliminar usuario ${error.message}`);
        }
    }

    return(
        <div className="text-center">
        <Button variant="logout" onClick={handleDelete}> Eliminar </Button>
        </div>
    )
}
export default DeleteUserButton;