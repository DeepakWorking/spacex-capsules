import React from "react"

const FilterInput = ({
    placeholder,
    onInputChange = ()=>{}
})=>{
    return (
        <div className="filter-item">
            <input 
                type="text" 
                className="filterInput"
                placeholder={placeholder}
                onChange = {(e)=>onInputChange(e)}
            />
        </div>
    )
}
export default FilterInput