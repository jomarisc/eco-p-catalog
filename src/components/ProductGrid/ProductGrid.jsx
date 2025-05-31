import React from "react";

function ProductGrid(props) {
    return(
        <div className="m-10">
            <div className="flex justify-between">
                <h2>Our Products</h2>
                <select className="border-1 border-white p-2 rounded-md">
                    <option value="all" className="">All Categories</option>
                    <option value="option1">Category 1</option>
                    <option value="option2">Category 2</option>
                    <option value="option3">Category 3</option>
                </select>
            </div>
            <div className="border-2 border-red-500 p-10">
                {/* pop */}
            </div>
        </div>
    );
}

export default ProductGrid;