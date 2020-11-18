import React from 'react'

const Show = ({ todoList, rmTodo }) => {

    return (
        <div>
            {todoList.map(todo => {
                return (
                    <div key={todo.id}>
                        {todo.text}
                        <button onClick={() => { rmTodo(todo.id) }}>Remove</button>
                    </div>
                )
            })}
        </div>
    )

}
export default Show