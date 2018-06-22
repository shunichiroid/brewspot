import React from "react";
import {Link} from "react-router-dom";

export default function Navbar({routes}) {
    return <nav>
        {
            routes.map(({pathName, uri}, i) => {
                return <Link key={i} to={uri}>{pathName}</Link>
            })
        }
    </nav>

}