function TailwindCard() {

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                
                <div className="bg-white p-6 rounded-xl shadow-md w-[300px] text-center">
                    
                    <h2 className="text-xl font-bold">User Card</h2>
                    <p className="mt-2">Name: M.Usman Nasir</p>
                    <p>Email: usmanbinnasir@gmail.com</p>
                    <h3>Using: Tailwind CSS</h3>

                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Contact</button>
      
                </div>
    
            </div>
        </>
    );

}

export default TailwindCard;
