import React from "react";
import { useParams } from "react-router-dom";

export default function Project(){
    const params = useParams()
    
    return(
        <h2>{params.id}</h2>
    )
}