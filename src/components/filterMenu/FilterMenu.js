import React, { useContext } from "react"
import AppContext from "../../context/appContext"
import Button from "../../shared/Button"
import { convertCamelCase, createSelectMenuItem } from "../../utils"
import FIlterSelector from "./FilterSelector"
const FILTER_BY_STATUS_TEXT = 'Filter By Status'
const FILTER_BY_TYPE = 'Filter By Type'
const SORT_BY_LAUNCH_DATE = 'Sort By Launch Date'
const sortingItems = [
    {
        label : 'Newest',
        value : 'newest'
    },
    {
        label : 'Oldest',
        value : 'oldest'
    }
]
 const FilterMenu = ({
    data,
    filterByStatus,
    filterByType,
    filterByDate
 })=>{
    const dispatch = useContext(AppContext)
    const clearFilter = ()=>{
        dispatch({
            type : 'clearFilter'
        })
    }
    return (
        <div className="filterWrapper"
            style={{
                display : 'grid'
            }}
        >
            <FIlterSelector 
                label={FILTER_BY_STATUS_TEXT}
                data = {createSelectMenuItem(data, 'status')}
                onChange= {(val)=>{
                    dispatch({
                        type : 'filterByStatus',
                        payload : val
                    })
                }}
                value = {
                    {label : convertCamelCase(filterByStatus), value : filterByStatus }
                }
            />
             <FIlterSelector 
                label={FILTER_BY_TYPE}
                data = {createSelectMenuItem(data, 'type')}
                onChange= {(val)=>{
                    dispatch({
                        type : 'filterByType',
                        payload : val
                    })    
                }}
                value = {
                    {label : convertCamelCase(filterByType), value : filterByType }
                }
            />
           <FIlterSelector 
                label={SORT_BY_LAUNCH_DATE}
                data = {sortingItems}
                onChange= {(val)=>{
                    dispatch({
                        type : 'filterByDate',
                        payload : val
                    })
                }}
                value = {
                    {label : convertCamelCase(filterByDate), value : filterByDate }
                }
            />
            <Button onClick = {()=>clearFilter()}>
                <span className="clear-filter-label">Clear Filters</span>
                <i className="fa fa-remove"/>
            </Button>
        </div>
    )
}

export default FilterMenu