import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { getDetails } from "../services/api";

function ProductPage(props){
    const {id} = useParams();
    console.log(id);

    return(
        <div className="w-full flex justify-center">
            <div className="border-2 border-blue-400 w-3/4 p-6 m-6">
                <Link to='/'>Back to Prodcuts</Link>
            </div>
        </div>
    );
}

export default ProductPage;