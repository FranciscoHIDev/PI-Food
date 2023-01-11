import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { orderByName } from '../../redux/actions/actions';

function FilterOrder() {
const dispatch = useDispatch()
const [order,setOrder] = useState("")
  

  function handleOrderName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));    
    setOrder(`Sorted${e.target.value}`);
  }

  return (
   <>
   <select onChange={(e) => handleOrderName(e)}>
        <option disabled selected value=" ">
          ----Orden----
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select> 
   
   </>
  )
}

export default FilterOrder