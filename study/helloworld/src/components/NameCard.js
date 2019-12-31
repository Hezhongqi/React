import React from 'react'
//函数写法
const NameCard = (props) =>{
    const  {name , number,isHuman,tags} = props;
    //name = 'abcd' ====》报错:name is read-only
    //纯函数 严格的纯函数
    return (
        <div className="alert alert-dark">
            <h4 className="alert-heading">{name}</h4>
            <ul>
                <li>电话：{number}</li>
                <li>{isHuman?'人类':'外行人'}</li>
                <hr/>
                <p>
                    { tags.map((tag,index)=>(
                        //高效 key
                        <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
                    ))}
                </p>
            </ul>
        </div>
    )
};

/*class NameCard extends React.Component{
    render() {
        //es6析构方法
        const  {name , number,isHuman,tags} = this.props;
        return (
            <div className="alert alert-dark">
                <h4 className="alert-heading">{name}</h4>
                <ul>
                    <li>电话：{number}</li>
                    <li>{isHuman?'人类':'外行人'}</li>
                    <hr/>
                    <p>
                        { tags.map((tag,index)=>(
                            //高效 key
                            <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
                        ))}
                    </p>
                </ul>
            </div>
        )
    }

}*/
export default NameCard
