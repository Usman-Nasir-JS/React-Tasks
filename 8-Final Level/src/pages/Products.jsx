import { useEffect, useState } from "react";

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        fetch("https://fakestoreapi.com/products")
      
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            setProducts(data);
            setLoading(false);
        });
  
    }, []);

    return (
        <>
            <div>
                <h2 className="text-xl font-bold mb-3">Products</h2>

                <div className="grid grid-cols-2 gap-3">

                    {loading && <p className="text-4xl text-center ml-110">Loading...</p>}
                    
                    {products.map(item => (
 
                        <div key={item.id} className="border p-2">
                            
                            <img src={item.image} alt="Image" width="100px" />
                    
                            <h4>Title: {item.title}</h4>
                            <h2>Category: {item.category}</h2>
                            <p>Description: {item.description}</p>
                            <h6>Price: ${item.price}</h6>
                            
                        </div>
                    
                    ))}
      
                </div>
                
            </div>
        </>
    );
};

export default Products;
