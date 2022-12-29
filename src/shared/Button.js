import React from "react";
import classNames from "classnames";

const Button = ({
    children,
    onClick,
    className,
    disabled
})=>{
    return (
        <button 
            className={classNames(className, 'button')}
            onClick ={(e)=>onClick(e)} 
            disabled = {disabled}
        >
            {children}
        </button>
    )
}

export default Button