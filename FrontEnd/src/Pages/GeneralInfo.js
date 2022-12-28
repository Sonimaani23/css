import React from "react";
import { Link } from "react-router-dom/dist"
import './../styles/general.css'
const GeneralInfo=()=>{



    return(

        <>
        <div className="container">
          <div>
            Name
            <br />
            <select className="box-structure">
              <option>Owner</option>
             
            </select>
          </div>

          <div>
            Sale Type
            <br />
            <select className="box-structure">
              <option>Select</option>
              <option>Standard Sale</option>
              <option>Bank Owned</option>
             
            </select>
          </div>
          
          <div>
          Mobile
            <br />
            <input type="number" className="box-structure"></input>
          </div>
          <div>
            Posted By
            <br />
            <select className="box-structure">
              <option>Select option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            PPD Package
            <br />
            <select className="box-structure">
              <option>Select option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            Featured Package
            <br />
            <select className="box-structure">
              <option>Select option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>


          <div>
          <Link to="/propertydetail"> <button className="previouse">Previous</button></Link>
          
          <Link to="/locationinfo">
            
            <button className="save">Save & Continue</button>
          </Link>
          </div>
          </div>
        </>
    )
}
export default GeneralInfo