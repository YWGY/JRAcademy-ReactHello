import {combineReducer} from 'redux';
import counter from './counterReducer';
import welcome from './welcomeReducer';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const rootReducer = combineReducer({
    counter: counter,
    welcome: welcome,
});
export default rootReducer;