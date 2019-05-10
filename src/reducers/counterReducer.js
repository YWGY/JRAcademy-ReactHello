import {INCREMENT, DECREMENT} from '../actions/conterActions';
const defaultState = {
    count:0,
    diff:1,
};

const counter = (state=defaultState, action) => {
    switch(action.type){
        case INCREMENT:
        return Object.assign({}, state,{
            count: state.count + action.payload.diff,
        });// Object.assign方法用于对象的合并，将源对象（ source ）的所有可枚举属性，复制到目标对象（ target ）,Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
        case DECREMENT:
        return Object.assign({}, state,{
            count: state.count - action.payload.diff,
        });
        default:
        return state;
    }
}
export default counter; 