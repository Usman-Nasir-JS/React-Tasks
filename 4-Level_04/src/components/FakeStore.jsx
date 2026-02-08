import { useEffect, useState } from "react";

function FakeStore() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
    
        .then(res => res.json())
      
        .then(result => {
            console.log(result)
            
            setData(result);
            setLoading(false);
        });

    }, []);

    return (
        <div> 
            <h1 className="text-3xl text-center underline py-5">▻ All Store Products!</h1>

            {loading && <p className="min-h-screen flex items-center justify-center text-4xl">Loading...</p>}

            {data.map(item => (
            
                <div key={item.id} className="border m-5 p-5">
                
                    <img src={item.image} alt="Image" width="100px" />
                    
                    <h4>Title: {item.title}</h4>
                    <h2>Category: {item.category}</h2>
                    <p>Description: {item.description}</p>
                    <h6>Price: ${item.price}</h6>
        
                </div>
            ))}
    
        </div>
    );
}

export default FakeStore;
