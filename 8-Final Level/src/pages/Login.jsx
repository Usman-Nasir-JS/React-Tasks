import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    const { login } = useContext(AuthContext);

    return (
        <>
            <div className="h-screen flex justify-center items-center bg-gray-100">
                
                <div className="bg-white p-6 rounded shadow w-72 text-center">
        
                    <h2 className="text-xl font-bold mb-4">Dashboard Login</h2>

                    <button onClick={login} className="bg-blue-600 text-white px-4 py-2 rounded">
                    Fake Login
                    </button>
     
                 </div>
    
            </div>
        </>
    );
};

export default Login;
