import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faTimes,faCheck } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    
    console.log(props)
 const {Image, Name, Age, Role, Team, auction} = props.product;
 const [hired, sethired] = useState(false);
    return (
        <div className="all-players product rounded p-3  col-lg-9">
            <div className="imgSize align-self-center">
                <img src={Image} alt=""/>

            </div>
            <div>
                <h4 className="product-name">Name:{Name}</h4>
                <h6>Age: {Age}</h6>
                <h6>Role: {Role}</h6>
                <h6>Team: {Team}</h6>
                <h5>Auction Price: {auction}</h5>
                <div ClassName="d-flex buttonPlace">
                    <div>
                        <button onClick={() => {props.handleAddProduct(props.product);sethired(true);}}className={hired ? "button-disabled":"btn-success"}>
                            {hired ? <strong><FontAwesomeIcon icon={faCheck}/>Hired </strong>:<strong><FontAwesomeIcon icon={faPlus} />
                            Hire Now</strong>}</button>
                           
                    </div>
                </div>
            </div>     

            
            
        
        </div>
    );
};

export default Product;