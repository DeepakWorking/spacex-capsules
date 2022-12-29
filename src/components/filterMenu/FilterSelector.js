import React, {useState, useEffect} from "react"

const FIlterSelector = ({
    data,
    onChange,
    placeholder = 'Select...',
    label,
    value
})=>{
    const [show, setShow] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    useEffect(()=>{
        setSelectedItem(value)
    },[value])
    useEffect(()=>{
        const outsideClick = ()=> setShow(false)
        window.addEventListener('click', outsideClick)
        return ()=>window.removeEventListener('click', outsideClick)
    })
    const toggelShow = (e)=>{
        e.stopPropagation()
        setShow((state)=>!state)
    }
    const getDisplay = ()=>{
        if(selectedItem && selectedItem.label){
            return selectedItem.label
        }
        return placeholder
    }
    const handleItemClick = (e, item)=>{
        e.stopPropagation()
        setSelectedItem(item)
        setShow(false) 
        if(onChange){
            onChange(item.value)
        }
    }
    const handleClearClick = (e)=>{
        e.stopPropagation()
        setSelectedItem(null)
        setShow(false)
        if(onChange){
            onChange('')
        }
    }
    return (
        <div className="select-wrapper">
            <div className="select-label">{label}</div>
            <div className="select-input" onClick = {(e)=>toggelShow(e)}>
                <div className="selected-value">{getDisplay()}</div>
                <div className="select_icon">
                    {
                        show ?
                        <i className="fa fa-chevron-down"></i>
                        : <i className="fa fa-chevron-up"></i>
                    }
                    {
                        selectedItem && selectedItem.label &&
                        <div className="clear-icon" onClick={ (e)=>handleClearClick(e)}>
                            <i className="fa fa-remove"/>
                        </div>
                    }
                </div>
                
            </div>
            {
                 show && <div className="select-menu">
                 {
                     data.map((ele)=>{
                         return (
                             <div key = {ele.label} className="select-item" onClick = {(e)=>{
                                handleItemClick(e, ele)
                             }}>
                                 {
                                     ele.label
                                 }   
                             </div>
                         )
                     })
                 }
             </div>   
            }
        </div>
    )
}
export default FIlterSelector