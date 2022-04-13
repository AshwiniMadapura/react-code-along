import React from 'react'
import "./Button.scss";

const Button=(props)=>{
    // console.log(props);
    let buttonStyle="button";
    

    if(props.isSecondary===true){
        buttonStyle+=" secondary"
    }else{
        buttonStyle+=" primary"
    }



    return(
        <button className={buttonStyle}>{props.buttonText}</button>
    )
}

export default Button;