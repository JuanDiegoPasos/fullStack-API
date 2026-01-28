import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosConfig";
import Modal from "../../components/Modal";
import UpdateUserForm  from "../../features/users/UpdateUserForm";
import DeleteUserButton  from "../../features/users/DeleteUserButton";
import Button from "../../components/Button";
import { TiDeleteOutline } from "react-icons/ti";
import { FaPenToSquare } from "react-icons/fa6";

function TableUsers() {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalType, setModalType] = useState("");
    const navigate = useNavigate();

    const fetchUsers = useCallback(async () => {
    try {
        const res = await api.get("/users");
        setUsers(res.data);
    } catch (error) {
        if (error.response?.status === 403) {
        alert("Token inválido o expirado. Inicia sesión de nuevo.");
        localStorage.removeItem("token");
        navigate("../");
        }
    }
    }, [navigate]);

    useEffect(() => {
    fetchUsers();
    }, [fetchUsers]);

    return(
        <>
            <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg w-full h-[80vh] overflow-y-auto p-8 m-5">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-pink-200 text-gray-700">
                            <th className="px-4 py-2 text-lg">Usuario</th>
                            <th className="px-4 py-2 text-lg">email</th>
                            <th className="px-4 py-2 text-lg w-[150px]">Actualizar/Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u) => (
                        <tr key={u.id} className="border-b-1 border-gray-300 bg-gray-100 hover:bg-gray-200 transition">
                            <td className="px-4 py-2 text-lg">{u.username}</td>
                            <td className="px-4 py-2 text-lg">{u.email}</td>
                            <td className="px-4 py-2 w-[150px]">
                                <Button className="!rounded-xl !px-3 !py-3" variant="lilac" onClick={() => {
                                setSelectedUser(u);
                                setModalType("update");
                                setModalOpen(true);
                            }}><FaPenToSquare className="size-6"/></Button>
                            <Button variant="logout" className="!px-2 !py-2" onClick={() => {
                                setSelectedUser(u.id);
                                setModalType("delete");
                                setModalOpen(true);
                            }}>
                                <TiDeleteOutline className="size-6"/></Button>
                            </td>

                            
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                <Modal 
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    title={modalType === "update" ? "Actualizar usuario" : "Eliminar Usuario"}
                    >

                    {modalType === "update" && (
                        <>
                            <UpdateUserForm
                                user={selectedUser}
                                onClose={()=>{setModalOpen(false)}} 
                                refreshUsers={()=>{fetchUsers()}}
                            />
                        </>
                    )}
                    {modalType === "delete" &&(
                        <div>
                            <p className="!text-black !p-6 text-center">¿Seguro que quieres eliminar este registro?</p>
                            <DeleteUserButton
                            id={selectedUser}
                            onClose={()=>{setModalOpen(false)}}
                            refreshUser={()=>{fetchUsers()}}
                            />
                        </div>
                    )}

                </Modal>
        </>
    );
}

export default TableUsers;
