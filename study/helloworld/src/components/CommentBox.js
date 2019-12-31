import React from 'react'
class CommentBox extends React.Component{
    constructor(props) {
        super(props);
        /*this.state = {
            value:""
        }*/
    }
    //输入内容，需要调用方法，赋值于state
   /* handleChange(event) {
        this.setState({
            //取到dom元素
            value:event.target.value
        })
    }*/
    //提交方法
    submit(event) {
        //alert(this.state.value);
        alert(this.textInput.value);
        //form：默认的行为，跳转之类的。禁止默认的行为
        event.preventDefault();
    };
    render() {
        return(
            <form className="p-5" onSubmit={(event)=>{this.submit(event)}}>
                <div className="form-group">
                    <label>留言内容</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="输入内容"
                        ref={(textInput)=>{this.textInput = textInput}}
                      /*  value={this.state.value}
                        onChange={(event)=>{this.handleChange(event)}}*/
                    />
                </div>
                <button type="submit" className="btn btn-primary">留言</button>
            </form>
        )
    }
}
export  default  CommentBox