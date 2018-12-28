import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List} from 'antd';
import store from './store'
import {getInputChange,getAddList,getdelLIst} from './store/actionCreators'
class AntdTodolist extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.handleGet = this.handleGet.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        store.subscribe(this.handleGet)
    }
    render () {
        return (
            <div style={{marginTop:10,marginLeft:10}}>
                <div>
                    <Input
                        placeholder="todo list"
                        style={{width:260,marginRight:10}}
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                    <Button
                        type="primary"
                        onClick={this.handleBtnClick}
                    >提交</Button>
                </div>
                <List
                   style={{marginTop:10}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={this.delClick.bind(this, index)}>{item}</List.Item>)}

                >
                </List>
            </div>
        )
    }
    handleChange(e){
        const action =getInputChange(e.target.value)
        store.dispatch(action)
    }
    handleGet () {
        this.setState(store.getState())
    }
    handleBtnClick () {
        const action = getAddList()
        store.dispatch(action)
    }
    delClick (index) {
        const action = getdelLIst(index)
        store.dispatch(action)
    }
}
export default AntdTodolist;