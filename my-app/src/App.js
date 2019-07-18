import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>欢迎来到菜鸟教程</h2>
                    <Clock></Clock>
                    <HelloMessage></HelloMessage>
                </div>
                <p className="App-intro">
                    你可以在 <code>src/App.js</code> 文件中修改。
                </p>
            </div>
        );
    }

}

var title = "cuzz";
class MyTitle extends Component{
    render() {
        return (
            <h1>Hello, {this.props.title}</h1>
        );
    }
}

// 作限制
// MyTitle.propTypes = {
//     title: PropTypes.string
// };

class HelloMessage extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

HelloMessage.defaultProps = {
    name: 'Runoob'
};

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }


    // 在第一次渲染后调用
    componentDidMount() {
        this.timeId = setInterval(
            () => this.tick(),
            1000
        );
    }


    // 在组件从 DOM 中移除之前立刻被调用
    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    tick() {
        this.setState({
            date : new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


export default App;
