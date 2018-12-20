import React, { Component} from 'react';
import './Todo';
import Todo from "./Todo";
import './todolist.css';

class Todolist extends Component {
    constructor (props) {
       super(props);
       this.state = {
           inputValue: '',
           list: []
       }
       // console.log('constructor')
    }
    // componentWillMount () {
    //     console.log('componentWillMount')
    // }
    // componentDidMount () {
    //     console.log('componentDidMount')
    // }
    // shouldComponentUpdate () {
    //     console.log('shouldComponentUpdate');
    //     return true
    // }
    // componentWillUpdate () {
    //     console.log('componentWillUpdate')
    // }
    // componentDidUpdate (){
    //     console.log('componentDidUpdate')
    // }
    // componentWillUnmount () {
    //     console.log('parent componentWillUnmount')
    // }
    render() {
        // console.log('parent render')
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.delClick = this.delClick.bind(this)
        return (
            <div className="Todolist">
                <div className="header">
                    <h1 className="hader-h1">TodoList</h1>
                    <input
                        type="text"
                        className="header-input"
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                        ref={(input) => {this.input = input}}
                    />
                    <button  className="header-button" onClick={this.handleClick}>添加</button>
                </div>
                <div className="content">
                    <div className="going">
                        <h1 className="going-h1">进行中</h1>
                        <ul  ref={ (ul) => {this.ul = ul}}>
                            {
                                this.state.list.map( (item ,index) => {
                                    return (
                                        <div  key={index}>
                                            <Todo
                                                content={item}
                                                list={this.list}
                                                delClick={this.delClick}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </ul>
                     </div>
              </div>
            </div>
        );
    }
    handleChange () {
        const value = this.input.value
       this.setState ( () => ({
          inputValue: value
       }))
    }
    handleClick () {
        this.setState ( (prevState) => ({
           list: [...prevState.list, prevState.inputValue],
           inputValue: ''
        }), () => {
            console.log(this.ul.querySelectorAll('div').length)
        });
        // console.log(this.ul.querySelectorAll('div').length)
    }
    delClick (index) {
        this.setState ( (prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {list}
        })
    }
}

export default Todolist;
