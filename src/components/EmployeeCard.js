import React from "react";
import "./index.css"

function EmployeeCard(props) {
    return (
      <>
        <div className="card-group"/>
            <div className="card"/>
                <img className="card-img-top" src={props.image} alt={props.name}/>
                    <div className="card-body">
                        <p className="card-text">{props.name}</p>
                        <p className="card-text">{props.phone}:</p>
                        <p className="card-text">{props.email}</p>
                        <p className="card-text">{props.dob}</p>
                    </div>
          </>
    );
}

export default EmployeeCard;