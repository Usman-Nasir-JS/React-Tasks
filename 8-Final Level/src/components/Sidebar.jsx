import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className="w-48 bg-gray-900 min-h-screen text-white p-4">
                
                <nav className="flex flex-col gap-4">
                    
                    <Link to="/">Home</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/products">Products</Link>
                
                </nav>
            
            </div>
        </>
    );
};

export default Sidebar;
