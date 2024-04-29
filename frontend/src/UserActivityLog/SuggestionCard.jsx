import React from "react";
import { Link } from "react-router-dom";
//import healthSymbolsImage from "./health-symbols.jpg"
import healthSymbolsImageGrayscale from "./health-symbols-grayscale.jpg"

export default function SuggestionCard({ suggestion }) {
    return (
        <Link to={suggestion.link} target="_blank">
        <div className="flex border-2 border-black hover:bg-gray-100 p-1 my-7">
            <img src={healthSymbolsImageGrayscale} style={{ width: "4rem", height: "4rem"}} alt="health symbols"  className="mt-3"></img>
            <div className="pl-1">
                <h3 className="text-xl">{suggestion.title}</h3>
                <p className="text-sm">{suggestion.tip}</p>
            </div>
        </div>
        </Link>
    )
}