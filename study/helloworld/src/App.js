import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//统一在这里引入组件
import NameCard from './components/NameCard'
import Welcome from './welcome'
import LikesButton from './components/LikesButton'
import Time from './components/Time'
import CommentBox from './components/CommentBox'

//引入context
import ThemeContext from './ThemeContext'
import ThemeBar from './components/ThemeBar'

const tags = ['1','2'];
const themes = {
    light: {
        classnames: 'btn btn-primary',
        bgColor: '#eeeeee',
        color: '#000'
    },
    dark: {
        classnames: "btn btn-light",
        bgColor: "#222222",
        color: "#fff"
    }
};

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            theme:'light'
        }
    }
    changeTheme(theme) {
        this.setState({
            theme,
        });
    }
    render() {
        return(
            //消费者-生产者
            <ThemeContext.Provider value={themes[this.state.theme]}>
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
                        <a href="#theme-switcher" className="btn btn-light" onClick={()=>{this.changeTheme('light')}}>
                            浅色主题
                        </a>
                        <a href="#theme-switcher" className="btn btn-secondary" onClick={()=>{this.changeTheme('dark')}}>
                            深色主题
                        </a>
                    </header>
                    <ThemeBar/>
                </div>
            </ThemeContext.Provider>
        )
    }
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
          <Welcome />
          <NameCard name="test" number={1233442323} isHuman tags={tags}/>

          <LikesButton />

          <Time/>
          <CommentBox/>
        </div>
      );
    }*/

export default App;
