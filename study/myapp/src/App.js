import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Link } from 'react-router-dom'
import Set from  './models/set/Set'
import Help from  './models/help/Help'
class App extends React.Component{
    render() {
        return <div>{this.props.children}</div>;
    }
    /*render() {
        return (
            <BrowserRouter>
                {/!* 注意 Link 组件一定要位于 BrowserRouter 组件中 *!/}
                <ul>
                    <li><Link to="/help">Help</Link></li>
                    <li><Link to="/set">Set</Link></li>
                </ul>
                {/!*基本用法*!/}
                <Route path ="/help" component={Help}/>
                <Route path ="/set" component={Set}/>
            </BrowserRouter>
        )
    }*/
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
