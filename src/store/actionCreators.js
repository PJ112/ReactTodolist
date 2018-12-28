import { CHANGE_INPUT_VALUE, CHANGE_LIST, DEL_LIST_INDEX} from './actionTypes';
export const getInputChange = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
})
export const getAddList = () => ({
    type:CHANGE_LIST
})
export const getdelLIst = (index) => ({
    type:DEL_LIST_INDEX,
    index
})