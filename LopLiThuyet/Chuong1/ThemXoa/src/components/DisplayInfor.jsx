import React, { useState } from "react";

const DisplayInfor = ({listUser, handleDeleteUser, handleDeleteAll}) => {
    
    return (
        <div>
            {listUser.map((user) => {
                return(
                    <div key={user.id}>
                        <div>My name is: {user.name}</div>
                        <div>My age: {user.age}</div>
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                        <hr />
                    </div>
                )
            })}
            <button onClick={() => handleDeleteAll()}>Delete all</button>
        </div>
    )
}
export default DisplayInfor;