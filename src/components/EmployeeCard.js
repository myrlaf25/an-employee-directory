import React from "react";
import "../styles/EmployeeCard.css";


function EmployeeCard({ name, image, phone, email, dob }) {
    return (
        <>
        
            <div key={name}>
            <div className="card-body">
            <img src={image} alt={name} />
                        <p className="card-text">Name: {name}</p>
                        <p className="card-text">Phone: {phone}:</p>
                        <p className="card-text">Email: {email}</p>
                        <p className="card-text">DOB: {dob}</p>
                    </div>
            </div>
          
            </>
     )}


export default EmployeeCard;