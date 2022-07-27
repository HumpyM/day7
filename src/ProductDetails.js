import React from "react";
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

function ProductDetails() {
    return(
        <div>
            <h1 className="card-title">{ele.title}</h1>
            <p className="card-text">Description: {ele.description}</p>
            <p className="card-text">Price: {ele.price} /-</p>
            <p className="card-text">Discount: {ele.discountPercentage}%</p>
            <p className="card-text">Rating:⭐{ele.rating}</p>

            
        </div>
    )
}
