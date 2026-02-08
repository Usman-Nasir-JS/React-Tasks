import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

    const { logout } = useContext(AuthContext);

    return (
        <>
            <div className="h-14 bg-white shadow flex justify-between items-center px-5">
                <h2 className="font-bold">⊛ React Dashboard</h2>

                <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">
                    Logout
                </button>
            </div>
        </>
    );
};

export default Navbar;
