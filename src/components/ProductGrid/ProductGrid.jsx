import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/api";

function ProductGrid(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                console.log(data);
                setProducts(data);
            } catch (error) {
                console.log('No data...')
            }
        }

        fetchProducts();
    }, []);

    return(
        <div className="m-10">

            <div className="flex justify-between flex-col sm:flex-row w-full">
                <h2>Our Products</h2>
                <select className="border-1 border-white p-2 rounded-md">
                    <option value="all" className="">All Categories</option>
                    <option value="option1">Apparel</option>
                    <option value="option2">Electronics</option>
                    <option value="option3">Accessories</option>
                </select>
                </div>
            <div className="flex p-10 gap-6 flex-col sm:flex-row">
                {products.map(product => (
                    <div className="bg-neutral-700 border-1 border-neutral-800 w-fit p-4 leading-6 rounded-lg hover:shadow-lg transition-shadow shadow-blue-400/20">
                        <img src={product.image} alt="digital nest merchandise" className="object-cover min-w-40"/>
                        <p className="text-xl mt-2">{product.name}</p>
                        <p className="text-lg text-blue-400">${product.price.toFixed(2)}</p>
                    </div>
                ))}
                </div>
        </div>
    );
}

export default ProductGrid;