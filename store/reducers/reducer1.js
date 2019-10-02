import {ACT1, actF1} from '../actions/action1'
const initialState = {
    c: 0
}
const reducer1 = (state = initialState, action) => {
    switch(action.type){
        case ACT1:
            const newState = {...state}
            newState.c += action.payload
            return {...newState}
    }
    return state
}
export default reducer1