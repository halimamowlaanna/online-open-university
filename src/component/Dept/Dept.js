import React from 'react';
import './Dept.css'

const Dept = (props) => {
    const {deptName,totalCost,totalCredit,image} = props.dept;
    
    return (
        <div className="dept my-5">
            <img src={image} alt="" />
            <h3 className="pt-3">{deptName}</h3>
            <p>credit offers{totalCredit}</p>
            <h3 className="text-danger">${totalCost}</h3>

        </div>
    );
};

export default Dept;