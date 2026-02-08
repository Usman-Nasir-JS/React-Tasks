import { useState } from "react";

function TodoApp() {
  
    const [data, setData] = useState("");
    const [todos, setTodos] = useState([]);

    const addData = () => {

        if (data.trim() === "") return;

            setTodos([...todos, { id: Date.now(), text: data, status: "pending" }]);
            setData("");

        };

        const approveData = (id) => {

            setTodos(
                todos.map((todo) =>
                todo.id === id ? { ...todo, status: "completed" } : todo
            ));

        };

        const deleteData = (id) => {
    
        setTodos(todos.filter((todo) => todo.id !== id));
  
    };

    const totalDatas = todos.length;
    const completedDatas = todos.filter(t => t.status === "completed").length;

    return (
        <>
            <h2 className="text-3xl text-center mt-10 mb-5">Simple Todo App</h2>

            <div className="text-center mb-10">

                <input type="text" className="border p-1 mx-1.5 my-2.5" placeholder="Enter your data" value={data} onChange={(e) => setData(e.target.value)}/>
            
                <button onClick={addData} className="border p-1.5 mt-5 m-2.5 cursor-pointer">Add</button>
            
            </div>

            <ul>
                {todos.map((todo) => (

                    <li className="text-center" key={todo.id}>➣ {todo.text}

                        {todo.status === "pending" && (
                            <>
                                <button onClick={() => approveData(todo.id)} className="ml-1.5 cursor-pointer">Approved✅</button>
                                <button onClick={() => deleteData(todo.id)} className="ml-1 cursor-pointer">Not Approved❌</button>
                            </>
                        )}

                        {todo.status === "completed" && (
                            <span className="text-center" style={{ marginLeft: "10px", color: "green" }}>✔ Completed</span>
                        )}
          
                    </li>
            
                ))}
            </ul>

            <p className="text-center">Total Data: {totalDatas}</p>
            <p className="text-center">Completed Data: {completedDatas}</p>
        </>
    );
}

export default TodoApp;
