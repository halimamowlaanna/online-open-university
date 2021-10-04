import React, { useEffect, useState } from 'react';
import Dept from '../Dept/Dept';
import './Home.css'

const Home = () => {
    const [depts, setDept]= useState([])
    useEffect(()=>{
        fetch('./home.JSON')
        .then(res => res.json())
        .then(data => setDept(data))
    },[])
    return (
        <div>
            <div className="banner">
            <h3><span className="banner-txt">Online Open University</span></h3>
            </div>
            <h2 className="text-center my-3 ">Popular Courses</h2>
            <hr />
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

export default Home;