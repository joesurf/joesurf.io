import React, { useState, useEffect } from 'react'
import { fetchdata } from './FetchData';
import ReflectionsList from './ReflectionsList';
import { Divider } from '@mui/material';


function Reflections() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchdata()
          .then(res => setList(res))
    }, [])

  return (
    <div>
        <h2><span style={{ color: "grey" }}>RULES FOR </span>LIFE</h2>
        <Divider />
        <div style={{ marginBottom: "20px" }}>
          <ol>
            <li style={{ marginBottom: "10px" }}>Learn and master a profitable skill: <span style={{ color: "grey" }}>data tools, digital content/product creation, digital marketing</span></li>
            <li style={{ marginBottom: "10px" }}>Get in the best shape of your life: <span style={{ color: "grey" }}>75 Hard</span></li>
            <li style={{ marginBottom: "10px" }}>Build something slowly: <span style={{ color: "grey" }}>Mr Equation</span></li>
          </ol>
        </div>
        <Divider />
        <ReflectionsList list={list} />
    </div>
  )
}

export default Reflections