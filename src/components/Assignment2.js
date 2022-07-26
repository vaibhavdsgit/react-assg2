// API fetching using react-forms
import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'

import UserDisplay from './UserDisplay';


const Assignment2 = () => {

    const {register, handleSubmit} = useForm();     
    const [userData, setUserData] = useState([]);   //store filtered data
    
    const clickHandler=(data)=>{
        axios.get(`https://api.github.com/users/${data.userName}`)  
        .then((data)=>{
            setUserData([data.data])    //setting the data to state
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  return (
    <form onSubmit={handleSubmit(clickHandler)}>
        <label>
            <input type='text' placeholder='Search' {...register('userName')} />
        </label>
        <button type='submit'>Find User</button>
        
        <UserDisplay userData={userData}/>  
    </form>
  )
}

export default Assignment2