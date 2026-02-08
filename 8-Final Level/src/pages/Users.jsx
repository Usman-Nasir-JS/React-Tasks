import { useEffect, useState } from "react";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        
        fetch("https://jsonplaceholder.typicode.com/users")
    
        .then(res => res.json())
        .then(data => setUsers(data));
    
    }, []);

    return (
        <>
            <div>
                <h2 className="text-xl font-bold mb-3">Users</h2>

                {users.map(user => (
                    <p key={user.id}>
                        <br />
                        Name: {user.name} <br />
                        Email: {user.email}
                    </p>
                ))}
            </div>
        </>
    );
};

export default Users;
