import { useState } from 'react';

function StudentCard() {

    const [darkMode, setDarkMode] = useState(false);

    let usersObj = [
        { userName: "Abdullah", rollNo: "265817", batch: "16", favoriteLanguage: "English" },
        { userName: "Usman", rollNo: "265835", batch: "16", favoriteLanguage: "Arabic" },
        { userName: "Ali", rollNo: "234566", batch: "14", favoriteLanguage: "Urdu" },
        { userName: "Umer", rollNo: "234567", batch: "14", favoriteLanguage: "Urdu" },
        { userName: "Hasan", rollNo: "899980", batch: "20", favoriteLanguage: "Urdu" }
    ];

    return (

        <div className={darkMode ? "bg-gray-900 text-white pb-10" : "bg-white text-black pb-10"}>

            {/* HEADER */}
            <div className="flex justify-around items-center py-5 bg-blue-500 px-3 sm:px-0 gap-3 flex-wrap">
                
                <h1 className="text-4xl font-semibold">React Playground App</h1>

                <button onClick={() => setDarkMode(!darkMode)}
                    className="flex items-center gap-2 py-1 px-4 border rounded-full bg-white text-black mt-3 sm:mt-0">

                    <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
                    <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
                </button>

            </div>

            {/* CARDS */}
            <div className="flex flex-wrap justify-center mt-7 sm:mt-5">
                {usersObj.map((onlyObj, index) => (
                    <div key={index}
                        className={`m-2 p-3 border-2 rounded w-64 ${
                            darkMode ? "bg-gray-800 border-gray-600" : "bg-gray-100"
                        }`}
                    >
                        <h2>Name: {onlyObj.userName}</h2>
                        <p>Roll.No: {onlyObj.rollNo}</p>
                        <p>Batch: {onlyObj.batch}</p>
                        <p>Favorite Language: {onlyObj.favoriteLanguage}</p>
                    </div>
                ))}
            </div>

        </div>

    );
}

export default StudentCard;
