import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './todolist.css';
class Todo extends Component{
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    // componentWillReceiveProps () {
    //     console.log('componentWillReceiveProps')
    // }
    // componentWillUnmount () {
    //     console.log('child componentWillUnmount')
    // }
    shouldComponentUpdate (nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }
    render () {
        console.log('child render')
        const { content } = this.props
       return (
           <li className="going-li" onClick={this.handleClick}>
               <p className="p">{content}</p>
           </li>
       )
    }
    handleClick () {
        const { delClick, index } =   this.props
        delClick(index)
    }
}
// Todo.propTypes = {
//     content: PropTypes.String,
//     delClick: PropTypes.func,
//     index: PropTypes.number
// }
export default Todo;