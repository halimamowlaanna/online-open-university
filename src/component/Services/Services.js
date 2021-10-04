import React, { useEffect, useState } from 'react';
import Dept from '../Dept/Dept';
import './Services.css'

const Services = () => {
    const [depts, setDept]= useState([])
    useEffect(()=>{
        fetch('./service.JSON')
        .then(res => res.json())
        .then(data => setDept(data))
    },[])
    return (
        <div>
            <h2 className="text-center pt-5">All Departments</h2>
            <div className="card-container container">
            {   
                depts.map(dept=><Dept
                 dept={dept}
                 key ={dept.key}
                 >
                </Dept>)
            }
            </div>
        </div>
    );
};

export default Services;