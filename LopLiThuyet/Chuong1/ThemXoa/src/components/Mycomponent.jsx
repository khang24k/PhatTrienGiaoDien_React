import React, { useState } from 'react'
import AddUserInfor from './AddUserInfor'
import DisplayInfor from './DisplayInfor'


const Mycomponent = () => {
    const [listUser, setListUser] = useState(
        [
            {id: 1, name: "Dung", age: 20},
            {id: 2, name: "Hoang", age: 19},
            {id: 3, name: "Khang", age: 18},
        ]
    )

    const [showList, setShowList] = useState(true)

    const handleAddNewUser = (userObject) => {
        setListUser([userObject, ...listUser])
    }

    const handleDeleteUser = (userID) => {
        setListUser(listUser.filter(item => item.id !== userID))
    }
    
    const handleDeleteAll = () => {
        setListUser([])
    }
    return (
        <>
        <AddUserInfor handleAddNewUser = {handleAddNewUser}/> <hr />
        <button onClick={() => setShowList(!showList)}>{showList ? "Ẩn danh sách" : "Hiển thị danh sách"}</button> <hr />
        {showList && <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} handleDeleteAll={handleDeleteAll}/>}
        </>
    )
}
export default Mycomponent;