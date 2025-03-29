import React from 'react'
import { useParams } from 'react-router-dom';

const users = [
    { id: 1, name: "Nguyễn Văn A", age: 25, email: "a@example.com" },
    { id: 2, name: "Trần Thị B", age: 30, email: "b@example.com" },
    { id: 3, name: "Lê Văn C", age: 28, email: "c@example.com" }
];

const UserDetail = () => {
    const {id} = useParams();
    const user = users.find((u) => u.id === parseInt(id))
    if(!user) return <h2>Người dùng không tồn tại!!!</h2>
    return (
        <div>
            <h1>{user.name}</h1>
            <p>Tuổi: {user.age}</p>
            <p>Email: {user.email}</p>
            
        </div>
    )
}
export default UserDetail;