import React from  'react'
class Time extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            time:new Date()
        }
    }
    //初始化后调用方法
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState({
                time:new Date()
            });
        },3000);
    }

    /**
     * @param prevProps
     * @param prevState
     * @param snapshot
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState)
    }
    componentWillMount() {
        clearInterval(this.timer);
    }

    render() {
        return(
            <div className="digital-clock-component jumbotron">
                <span>{this.state.time.toLocaleTimeString()}</span>
            </div>
        )
    }
}
export default Time