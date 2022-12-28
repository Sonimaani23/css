import React from "react"
import { Link } from "react-router-dom/dist"
import "./../styles/Basicinfo.css";
const BasicInfo=()=>{



    return(
        <>
        

        <div id="container">
      <div>

      
          PROPERTY TYPE:
       <br/>
            <select className="property-type">
                <option>Select option</option>
                <option>Plot</option>
                <option>House</option>
                <option>Flat</option>
            </select>
            </div>

            <div >
                Price
                <br></br>
                <input type="number" className="Price"></input>
            </div>
            <div>
                Property Age
                <br></br>
                <input type="number" className="Prop-age"></input>
            </div>
            <div>
                Property Description
                <br></br>
                <input type="text" className="Prop-desc"></input>
            </div>

            <div>
            Negotable:
       <br/>
            <select className="negotable">
                <option>Select option</option>
                <option>Yes</option>
                <option>No</option>
             
            </select>
            
            </div>
            <div>
            Property Approved
            <br>
            </br>
            <select className="negotable">
                <option>Select option</option>
                <option>Yes</option>
                <option>No</option>
             
            </select>
            </div>

            <div>
            Ownership
        
            <br>
            </br>
            <select className="negotable">
                <option>Select option</option>
                <option>Yes</option>
                <option>No</option>
             
            </select>
            </div>
            <div>
            Bank Loan
        
            <br>
            </br>
            <select className="negotable">
                <option>Select option</option>
                <option>Yes</option>
                <option>No</option>
             
            </select>
            </div>


          <button className="cancel">Cancel</button>
        <Link to='/propertydetail' > <button className="saves">Save & Continue</button></Link>
        
        </div>


</>


    )
}
export default BasicInfo