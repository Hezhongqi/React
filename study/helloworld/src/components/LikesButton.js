import React from  'react'
class LikesButton extends  React.Component{
    //构造方法
    constructor(props) {
        //调用super
        super(props);
        //state
        this.state = {
            likes:0
        };
        //1.绑定addLikes方法
        //this.addLikes = this.addLikes.bind(this);
    }
    addLikes () {
        //alert(1234);
        this.setState({
            likes:++this.state.likes
        });
        //返回underfined
        console.log(this);
    }
    render() {
        return (
            <div className="likes-button-component" >
                <button type= "button"
                onClick={()=>{this.addLikes()}}
                        //onClick={this.addLikes}
                className="btn btn-outline-primary btn-lg">
                    点赞{this.state.likes}
                </button>
            </div>
        )
    }
}
export default LikesButton