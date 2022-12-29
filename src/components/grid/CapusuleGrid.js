import React, { useContext } from "react";
import AppContext from "../../context/appContext";

import  GridItem from "./GridItem";

const CapsuleGrid = ({
    gridData
})=>{
    const {} = useContext(AppContext)
    return (
        <div className="gridWrapper">
            {
                gridData.map((item)=>{
                    return (
                        <GridItem
                            data = {item}
                        />
                    )
                })
            }    
        </div>
    )
}
export default CapsuleGrid

