import React from "react";
import { Link } from "react-router-dom";
import { default as BasicMenu } from "./dropdown";
import SvgIconsSize from "./Homeicon";
export default function NAV(){
    return(
        <nav className="bg-slate-500  p-2 text-white">
            <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <div className="flex">
                    <p className="py-3">HOME</p>
                    <a href="/" className=""><SvgIconsSize/></a>
                </div>
                <ul className="flex">
                    <li className="mx-3 py-1"><Link to="/">-</Link></li>
                    <li className="mx-3 py-1"><Link to="/Home/Saved_Data">Log</Link></li>
                    <li className="text-white mx-3">
                        <BasicMenu/>
                    </li>
                    <li className=" mx-3 py-1"><Link to="/Home/REGISTER"><button>login</button></Link></li>
                    <li className="mx3 py-1"><a href="/info">info</a></li>
                </ul>
            </div>
            </div>
        </nav>
    )
}