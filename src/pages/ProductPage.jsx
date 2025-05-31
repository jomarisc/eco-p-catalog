import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { getDetails } from "../services/api";

function ProductPage(props){
    const [details, setDetails] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const fetchDetails = async (id) => {
            try {
                const data = await getDetails(id);
                console.log(data);
                setDetails(data);
            } catch (error) {
                console.log('No details...')
            }
        }

        fetchDetails(id);
    }, [id]);

    if (!details) {
        return (
            <div className="w-full flex justify-center mt-8 text-white">
                <p>Loading product details...</p>
            </div>
        );
    }

    return(
        <div className="w-full flex justify-center">

            <div className="bg-neutral-700 w-3/4 p-10 m-4 rounded-md">

                <Link to='/'>Back to Products</Link>

                <div className="mt-8 mb-4 flex flex-col sm:flex-row">
                    <img src={details.image} alt="dn merch" />
                    <div className="pl-6">
                        <h2>{details.name}</h2>
                        <p className="text-blue-400">${details.price.toFixed(2)}</p>
                        <p className="font-normal pt-6">{details.description}</p>
                        <button className="mt-8">Add to cart</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default ProductPage;