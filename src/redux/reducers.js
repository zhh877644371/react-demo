import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';

// export default function combineReducers(state = {}, action) {
//     return {
//         counter: counter(state.counter, action),
//         userInfo: userInfo(state.userInfo, action)
//     }
// }

/*使用redux提供的conbineReducers函数合并reducer，写法更简便*/
export default combineReducers({
    counter,
    userInfo
});