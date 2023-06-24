import React, { useState, useEffect } from 'react'
import { fetchdata } from './FetchData';
import ReflectionsList from './ReflectionsList';


function Reflections() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchdata()
          .then(res => setList(res))
    }, [])

  return (
    <div>
        <ReflectionsList list={list} />
    </div>
  )
}

export default Reflections