import React from "react";
import moment from 'moment';
import "../styles/EmployeeCard.css";


function EmployeeCard({ name, image, phone, email, dob }) {
    return (
        <>

            <div key={name} className="card">
                <div className="img-container">
                    <img alt={name} src={image} />
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <h5>{name}</h5>
                        </li>
                        <li>
                            <strong>Phone:</strong> {phone}
                        </li>
                        <li>
                            <strong>Email:</strong> {email}
                        </li>
                        <li>
                            <strong>DOB:</strong> {moment(dob).format('MM/DD/YYYY')}
                        </li>
                    </ul>
                </div>

            </div>

        </>
    )
}


export default EmployeeCard;