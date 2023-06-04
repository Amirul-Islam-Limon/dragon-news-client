import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [category, setCategory]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/news-categories")
        .then(res=> res.json())
        .then(data=> setCategory(data));
    },[])
    return (
        <div>
            <h4>All Category : {category.length}</h4>
            {
                category.map(categoryItem=> <p key={categoryItem.id}>
                    <Link to={`/category/${categoryItem.id}`}>{categoryItem.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;