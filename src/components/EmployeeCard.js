import React from "react";
import "./index.css"

function EmployeeCard(props) {
    return (
      <>
        <div className="card-group"/>
        {props.results.map((result)=>(     
            <div className="card"/>
                <img key={result.id} className="card-img-top" src={result.images.original.url} alt={result.title}/>
                ))}
                    <div className="card-body">
                        <p className="card-text">{result.name}</p>
                        <p className="card-text">{result.phone}:</p>
                        <p className="card-text">{result.email}</p>
                        <p className="card-text">{result.dob}</p>
                    </div>
          </>
    );
}

export default EmployeeCard;