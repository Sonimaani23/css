import React from "react";
import { Link } from "react-router-dom/dist"
const LocationInfo=()=>{



    return(

        <>
        <div>
          Email
            <br />
            <input type="email"></input>
          </div>

          <div>
          Address
            <br />
            <input type="text"></input>
          </div>

          <div>
          Pincode
            <br />
            <input type="text"></input>
          </div>

          <div>
          <Link to="/generalinfo"> <button>Previous</button></Link>
            <button>Add property</button>
         
          </div>
        
        </>
    )
}
export default LocationInfo