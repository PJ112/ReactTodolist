import React, { Component} from 'react';
import './todolist.css'

class Todolist extends Component {
    constructor (props) {
       super(props);
       this.state = {
           inputValue: '',
           list: []
       }
    }
    render() {
        return (
            <div className="Todolist">
                <div className="header">
                    <h1 className="hader-h1">TodoList</h1>
                    <input
                        type="text"
                        className="header-input"
                        value={this.state.inputValue}
                        onChange={this.handleChange.bind(this)}
                    />
                    <button  className="header-button" onClick={this.handleClick.bind(this)}>添加</button>
                </div>
                <div className="content">
                    <div className="going">
                        <h1 className="going-h1">进行中</h1>
                        <ul>
                            {
                                this.state.list.map( (item ,index) => {
                                    return (
                                       <div>
                                           <li
                                               className="going-li"
                                               key="index"
                                               onClick={this.delClick.bind(this, index)}
                                           >
                                               {item}
                                           </li>
                                       </div>
                                    )
                                })
                            }
                        </ul>
                     </div>
                {/*<div class="going">*/}
                    {/*<h1 class="going-h1">已完成</h1>*/}
                    {/*<ul>*/}
                        {/*<li v-for="(item,key) in list" v-if="item.checked"  class="haddone-li" >*/}
                        {/*<input type="checkbox" v-model="item.checked"  class="checkbox"/>*/}
                        {/*<p class="p"></p>*/}
                        {/*<button class="haddone-button">移除</button></li>*/}
                    {/*</ul>*/}
                {/*</div>*/}
              </div>
            </div>
        );
    }
    handleChange (e) {
       this.setState ({
           inputValue: e.target.value
       })
    }
    handleClick () {
        this.setState ({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    delClick (index) {
        // const list = [...this.state.list]
        // list.splice(index, 1)
        this.state.list.splice(index, 1)
        this.setState ({
            list: this.state.list
        })
    }
}

export default Todolist;
