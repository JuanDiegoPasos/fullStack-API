import {useState} from 'react';
import LoginForm from "../features/auth/LoginForm"
import RegisterForm from "../features/auth/RegisterForm"
import GradientBackground from '../components/GradientBackground';

function LandingPage (){
    const [Type, setType] = useState("login");
    
    return(
        <GradientBackground>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-30 p-5">
                <div className="text-center">
                    <div className="flex justify-center items-center gap-2">
                        <h3>Bienvenido a </h3>
                        <h1>Mi App</h1>
                    </div>
                    <p className="text-lg md:text-xl text-white">
                        Administra tus usuarios, actualiza perfiles y controla el acceso desde un solo lugar.
                    </p>

                    <div className="w-full h-100 overflow-hidden my-3 rounded-lg">
                        <img 
                            src="../../public/loginImage.jpg" 
                            alt="Logo" 
                            className="w-full h-full object-cover"
                            />
                    </div>
                </div>
                <div className="bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-lg w-full max-w-xl mx-2">
                    {Type === "login" && 
                    (
                        <div className="text-center m-6">
                        <h2>Iniciar Sesión</h2>
                        <LoginForm/>
                            <a className="" onClick={()=>{setType("register")}}>Crear una cuenta</a>
                        </div> 
                    )}
                    {Type === "register" &&
                    (
                        <div className='text-center m-6'>
                            <h2>Registrarse</h2>
                            <RegisterForm/>
                            <a
                            onClick={() => setType("login")}
                            className="text-[#FE3F8B] px-2 py-1 no-underline hover:text-[#CC5FC1] hover:underline transition"
                            >Iniciar Sesión</a>
                        </div>
                    )}
                </div>
            </div>
        </GradientBackground>
    );

}

export default LandingPage;