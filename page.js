"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';
import { Html } from 'next/document';



export default function Counter(){
  const[count,setCOunt]=useState(0);

  const increment =()=>{
    setCOunt(count +1);

  }
  const decrement =()=>{
    setCOunt(count -1)
  }
  return(
    <div>
      <center>
      <h1>Counter</h1>
      <p>Current count:{count}</p>
      <button id='increment' onClick={increment}>INCREMENT</button>
      <button id='decrement' onClick={decrement}>DECREMENT</button>
      </center>
    </div>


  )
}