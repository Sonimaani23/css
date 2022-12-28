import React from "react";
import { Link } from "react-router-dom/dist"
import './../styles/propertydetail.css'
const PropertyDetail=()=>{



    return (
      <>
        <div id="container">
          
            <div>
              Length
              <br></br>
              <input type="number" className="box-structure"></input>
            </div>


            <div>
              Breadth
              <br></br>
              <input type="number" className="box-structure"></input>
            </div>


            <div>
              Total Area<br></br>
              <input type="number" className="box-structure"></input>
            </div>


            <div>
            No of BHK:
            <br />
            <select className="box-structure">
              <option>Select option</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
             </div>


          <div>
            Attached:
            <br />
            <select className="box-structure">
              <option>Select option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>


          <div>
            Furnished:
            <br />
            <select className="box-structure">
              <option>Select option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            No of Folder:
            <br />
            <select className="box-structure">
              <option>Select option</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
             </div>
             <div>
            Car parking:
            <br />
            <select className="box-structure">
              <option>Select option</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
             </div>
             <div>
            Lift
            <br />
            <select className="box-structure">
              <option>Select option</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
             </div>
             <div>
            Facing
            <br />
            <select className="box-structure">
              <option>Select option</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
             </div>
             <div>
            Electricity
            <br />
            <select className="box-structure">
              <option>Select option</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
             </div>
             <div>
            Western Toilet
            <br />
            <select className="box-structure">
              <option>Select option</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
             </div>
<Link to="/basicinfo"> <button className="previouse">Previous</button></Link>
          
          <Link to="/generalinfo">
            
            <button className="save">Save & Continue</button>
          </Link>
        </div>
      </>
    );
}
export default PropertyDetail