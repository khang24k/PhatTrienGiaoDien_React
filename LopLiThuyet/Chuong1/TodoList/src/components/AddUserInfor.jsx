import React, { useState } from "react";

const AddUserInfor = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1),
            name: name,
            age: age
        })

    }
    return (
        <>
            <form action="" onSubmit={(event) => handleOnSubmit(event)}>
                Your name:
                <input type="text" value={name} onChange={(event) => onChangeName(event)}/>
                <br />
                Your age:
                <input type="text" value={age} onChange={(event) => onChangeAge(event)}/>
                <br />
                <button style={{ color: "green" }}>Submit</button>
            </form>
        </>
    )
}
export default AddUserInfor;