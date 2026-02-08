function ProductCard({ title, price, image, inStock }) {

  return (
    
        <div className="border rounded-xl shadow-md p-4 w-60 hover:shadow-xl transition">

            <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg"/>

            <h3 className="text-lg font-semibold mt-3">{title}</h3>

            <p className="text-gray-600">Rs: {price}</p>

            <p className={`font-medium ${
                inStock ? "text-green-600" : "text-red-600"}`}>
                {inStock ? "In Stock" : "Out of Stock"}
            </p>

            <button disabled={!inStock} className={`mt-3 w-full py-2 rounded-lg text-white font-medium
                ${
                    inStock
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
            >
                Buy Now
            </button>

        </div>
        
    );
}

export default ProductCard;
