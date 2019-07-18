/**
 * 组件的生命周期
 */
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    // 组件挂载后自动调用
    componentDidMount() {

    }

    // 组件卸载前自动调用
    componentWillUnmount() {

    }

    // 组件卸载前自动调用
    componentDidUpdate() {

    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}