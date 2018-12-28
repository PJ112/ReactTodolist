import { CHANGE_INPUT_VALUE, CHANGE_LIST, DEL_LIST_INDEX} from './actionTypes'
const defaultState = {
    inputValue: '',
    list:[]
}
export default (state = defaultState ,action) =>{
    if (action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === CHANGE_LIST){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue  = ""
        return newState
    }
    if (action.type === DEL_LIST_INDEX){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index)
        return newState
    }
    return state;
}