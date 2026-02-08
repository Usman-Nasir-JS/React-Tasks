import { useState } from "react";

function SignupForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState(null);

    const handleSubmit = (e) => {

        e.preventDefault();

        setUserData({ name, email, password });

        // clear form
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <h2 className="text-3xl text-center my-10">Signup Form</h2>

            <form onSubmit={handleSubmit} className="text-center">

                <label htmlFor="name">Name: </label>
                <input type="text" className="border p-1 pl-1.5 ml-6 my-1.5" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)}/>

                <br />
                <label htmlFor="email">Email: </label>
                <input type="email" className="border p-1 pl-1.5 ml-[29px] my-1.5" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" className="border p-1 pl-1.5 my-1.5" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                
                <br />
                <button disabled={!name || !email || !password} className="border p-1.5 mt-5 m-2.5 cursor-pointer">Submit</button>
      
            </form>

            {userData && (
                <div className="text-center ">
                    <h3 className="text-2xl">Your Data</h3>
                    <ul>
                        <li>• Name: {userData.name}</li>
                        <li>• Email: {userData.email}</li>
                        <li>• Password: {userData.password}</li>
                    </ul>
                </div>
            )}

        </>
    );
}

export default SignupForm;
