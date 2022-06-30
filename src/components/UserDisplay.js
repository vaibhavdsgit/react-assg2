import React from 'react'

const UserDisplay = ({ userData }) => {

    return (

        <div className='App'>
            <table>
                <tr>
                    <th>Login Name</th>
                    <th>Node ID</th>
                    <th>Url</th>
                    <th>Followers Url</th>
                    <th>Repo URL</th>
                </tr>
                {userData.map((user) => {
                    return (
                        <tr>
                            <td>{user.login}</td>
                            <td>{user.node_id}</td>
                            <td>{user.url}</td>
                            <td>{user.followers_url}</td>
                            <td>{user.repos_url}</td>
                        </tr>
                    )
                })}
            </table>

        </div>
    )
}

export default UserDisplay