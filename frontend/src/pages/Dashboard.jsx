import TableUsers from "../features/users/TableUsers";
import GradientBackground from '../components/GradientBackground';
import Button from '../components/Button'
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <>
        <div>
            <GradientBackground>
                <div className="p-15 w-full">
                    <div className="m-4 !justify-between flex">
                        <div className="flex gap-3">
                            <h1 >{"Bienvenido"}</h1>
                            <h3 className="!m-1">{localStorage.getItem('username')}</h3>
                        </div>   
                        <Button variant="pink" className="text-right" onClick={handleLogout}>Cerrar Sesión</Button>
                    </div> 
                        <TableUsers/>
                </div>
            </GradientBackground>
        </div>
        </>
    );
}


export default Dashboard;