import React, { useContext } from "react"
import { convertCamelCase } from "../../utils";
import Button from "../../shared/Button";
import AppContext from "../../context/appContext";

const GridItem = ({
    data
})=>{
    const {
        type,
        details,
        status,
        originalLuanch,
        missions,
        capsule_serial
    } = data
    const dispacth = useContext(AppContext)
    const handleReadMore = ()=>{
        dispacth({
            type : 'selectgrid',
            payload : capsule_serial
        })
    }
    return (
        <div className="gridItem">
             <div className="item-serial">
                <span>{capsule_serial}</span>
            </div>
            <div className="item-type">
                <label className="item-label">Type : </label>
                <span>{type}</span>
            </div>
            <div className="item-launch-date">
                <label className="item-label">Launch Date : </label>
                <span>{originalLuanch}</span>
            </div>
            <div className="item-status">
                <label className="item-label">Status : </label>
                <span>{convertCamelCase(status)}</span>
            </div>
            <div className="items-missions">
                <label className="item-label">No of missions : </label>
                <span>{missions.length}</span>
            </div>
            <div className="item-details">
                <span>{details}</span>
            </div>
            <div className={'item-button'}>
            <Button onClick={()=>handleReadMore()}>
                Know More
            </Button>
            </div>
        </div>
    )
}
export default GridItem