import React, { useEffect } from "react";
import {createPortal} from 'react-dom'
import Button from "./Button";

const Modal = ({
    children,
    open = false,
    onClose,
    title
})=>{
    const [isOpen, setIsOpen] = React.useState(open)
    useEffect (()=>{
        setIsOpen(open)
    }, [open])
    useEffect(()=>{
        if(isOpen)window.addEventListener('click', handCloseClick)
        return ()=>window.removeEventListener('click', handCloseClick)
    })
    const handCloseClick = (e)=>{
        e.stopPropagation()
        setIsOpen(false)
        if(onClose){
            onClose()
        }
    }
    return isOpen ? 
        createPortal(
            <div className="modal" >
                <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
                    <div className="modal-header">
                        <h1>
                            {title}
                        </h1>
                        <div className = "close -icon" onClick = {(e)=>handCloseClick(e)}>
                            <i className="fa fa-remove"/>
                        </div>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <Button onClick={(e)=>handCloseClick(e)}>
                            Close
                        </Button>
                    </div>
                </div>
            </div>
            ,
            document.getElementById('root')
    )
    : null
}
export default Modal