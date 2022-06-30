import {useQuery} from 'react-query';
import { useState } from 'react';

import axios from 'axios'


export const Assg2 = () =>{

    const [searchTerm, setSearchTerm] = useState('');
    const [searchRecord, setSearchRecord] = useState();

    const {isLoading, data} = useQuery('user-data', ()=>{
        return axios.get('https://api.github.com/users')
    })

    // const clickHandler=(event)=>{
    //     console.log("clicked");
    //     // console.log({data});
        
    //         // setSearchRecord(data?.data.filter((val)=>{
    //         //     return val.login.includes(searchTerm)
    //         // }))

    //         // setSearchRecord(data?.data.filter((val)=>{
    //         //     return val.login.includes(searchTerm)
    //         // }))

    //         // setSearchRecord(data?.data)
    //         // console.log(searchRecord)
    //         // setSearchRecord([data.data])
    //         console.log([data.data])
    //         setSearchRecord([data.data])
    // }
    
    
    
    return(
        <>
            <h3>Hello</h3>
            
            <input type="text" placeholder='Search' onChange={(event)=>{
                setSearchTerm(event.target.value)
            }}></input>

            <p>{data?.data.filter((val)=>{
                return val.login.includes(searchTerm)
            }).map((user)=>{
                return <div key={user.login}>Login: {user.login}, URL: {user.url}</div>
            })}</p>

            
            
            {/* <button onClick={clickHandler}>Click</button>
            {/* {searchRecord.map((user)=>{
                return <div>{user.login}</div>
            })} */} 
        </>
    )
    
}