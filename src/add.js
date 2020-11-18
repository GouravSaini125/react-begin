import React from 'react'

class Add extends React.Component {

    state = {

        text: ""

    }

    handleChange = (e) => {

        this.setState({
            text: e.target.value
        })

    }

    handleSubmit = (e) => {

        e.preventDefault()
        if (this.state.text !== "") {
            this.props.addTodo(this.state)
            this.setState({
                text: ""
            })
        }

    }

    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter a TODO" value={this.state.text} onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Add</button>
                </form>
            </div>

        )
    }

}
export default Add