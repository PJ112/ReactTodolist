import React, { Component, Fragment } from 'react';
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            show: true,
            list: []
        }
        this.AddClick = this.AddClick.bind(this)
    }
    render () {
        return (
           <Fragment>
              <TransitionGroup>
                  {
                      this.state.list.map( (item, index) =>{
                          return (
                              <CSSTransition
                                  timeout={1000}
                                  classNames='fade'
                                  onEntered={(el) => {el.style.color='blue'}}
                                  appear={true}
                                  key={index}
                              >
                                  <div>{item}</div>
                              </CSSTransition>
                          )
                      })
                  }
              </TransitionGroup>
               <button onClick={this.AddClick}>toggle</button>
           </Fragment>
        )
    }
    AddClick () {
        this.setState( (prevState) => {
          return {
              list: [...prevState.list, 'item']
          }
        })
    }
}
export default App;