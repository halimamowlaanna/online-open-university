import React, { useEffect, useState } from 'react';
import Dept from '../Dept/Dept';
import './Home.css'
import {Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
const Home = () => {
    const [depts, setDept]= useState([])
    const history = useHistory()
    const handleClick = () => {
        history.push('/services')
    }
    useEffect(()=>{
        fetch('./home.JSON')
        .then(res => res.json())
        .then(data => setDept(data))
    },[])
    return (
        <div>
            <div className="banner">
            <h3><span className="banner-txt">The Open University</span></h3>
            {/* <p className="sub-banner-txt">Where the dream begins</p> */}
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
            <div className="see-more-container pt-5">
            <Button onClick={handleClick} className="see-more-btn" variant="warning">See More</Button>
            </div>
        </div>
        
    );
};

export default Home;