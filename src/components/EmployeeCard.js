import React from "react";
import "../styles/EmployeeCard.css";


function EmployeeCard({ name, image, phone, email, dob }) {
    return (
        <>

            <div key={name} className="card-group">
                <div className="card">
                    <div className="card-body">
                        <img className="card-img-top" src={image} alt={name} />
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Phone: {phone}</p>
                        <p className="card-text">Email: {email}</p>
                        <p className="card-text">DOB: {dob}</p>
                    </div>
                    
                </div>
            </div>


        </>
    )
}


export default EmployeeCard;