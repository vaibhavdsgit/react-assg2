import {useQuery} from 'react-query';
import { useState } from 'react';

import axios from 'axios'


export const Assg2 = () =>{

    const [searchTerm, setSearchTerm] = useState('');

    const {isLoading, data, refetch} = useQuery('user-data', ()=>{
        return axios.get('https://api.github.com/users')
    },
    {
        enabled:false,
    })

    return(
        <>
            <h3>Hello</h3>
            
            <input type="text" placeholder='Search' onChange={(event)=>{
                setSearchTerm(event.target.value)
            }}></input>

            <button onClick={refetch}>Fetch User Data</button>

            <table>
                <tr>
                    <th>Login Name</th>
                    <th>Node Id</th>
                    <th>HTML URL</th>
                    <th>Followers URL</th>
                    <th>Repo URL</th>
                </tr>
                {data?.data.filter((val)=>{
                    return val.login.includes(searchTerm)
                }).map((user)=>{
                    return (
                    <tr>
                        <td>{user.login}</td>
                        <td>{user.node_id}</td>
                        <td>{user.html_url}</td>
                        <td>{user.followers_url}</td>
                        <td>{user.repos_url}</td>
                    </tr>
                    )
            })}
            </table>
            
 
        </>
    )
    
}