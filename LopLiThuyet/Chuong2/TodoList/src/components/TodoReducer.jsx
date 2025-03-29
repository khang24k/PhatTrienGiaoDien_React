import React from 'react'

const TodoReducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return [...state, action.payload]
    }
    return (
        <div>TodoReducer</div>
    )
}
export default TodoReducer;