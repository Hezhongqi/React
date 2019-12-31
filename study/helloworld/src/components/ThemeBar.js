import React from 'react'
import  ThemeContext from '../ThemeContext'
//
const ThemeBar = () =>{
    return (
        <ThemeContext.Consumer>
            {
                theme =>{
                    return(
                        <div
                            className="alert mt-5"
                            style={{backgroundColor:theme.bgColor, color:theme.color}}>
                            样式区域
                            <button className={theme.classnames}/>

                        </div>
                    )
                }


                /*theme =>{
                    console.log(theme)
                }*/
            }
        </ThemeContext.Consumer>
    )
};
export default ThemeBar
