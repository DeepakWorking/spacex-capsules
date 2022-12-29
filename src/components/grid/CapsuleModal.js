import React, { useContext } from "react";
import AppContext from "../../context/appContext";
import Modal from "../../shared/Modal";

//{"capsule_serial":"C101","capsule_id":"dragon1","status":"retired","original_launch":"2010-12-08T15:43:00.000Z","original_launch_unix":1291822980,"missions":[{"name":"COTS 1","flight":7}],"landings":1,"type":"Dragon 1.0","details":"Reentered after three weeks in orbit","reuse_count":0}
const CapsuleModal= ({
    isOpen,
    capsuleData
})=>{
    const dispacth = useContext(AppContext)
    const onClose = (e)=>{
        dispacth({
            type : 'activeGridIndex',
            payload : -1
        })
    }
    return (
        <Modal
            open = {isOpen}
            onClose = {onClose}
            title = {capsuleData.capsule_serial}
        > {(
            isOpen &&
            <>
            <div className="capsule-modal-wrapper">
                <div className="capsule-modal-item">Capsule Id</div>
                <div className="capsule-modal-item">{capsuleData.capsule_id}</div>
                <div className="capsule-modal-item">Capsule Status</div>
                <div className="capsule-modal-item">{capsuleData.status}</div>
                <div className="capsule-modal-item">Launch Date</div>
                <div className="capsule-modal-item">{capsuleData.original_launch}</div>
                <div className="capsule-modal-item">Launch Unix</div>
                <div className="capsule-modal-item">{capsuleData.original_launch_unix}</div>
                <div className="capsule-modal-item">Type</div>
                <div className="capsule-modal-item">{capsuleData.type}</div>
                <div className="capsule-modal-item">Landings</div>
                <div className="capsule-modal-item">{capsuleData.landings}</div>
                <div className="capsule-modal-item">Reuse Count</div>
                <div className="capsule-modal-item">{capsuleData.reuse_count}</div>
                <div className="capsule-modal-item">Missions <span>({capsuleData.missions.length})</span></div>
                <div className="capsule-modal-table">
                    <div className="capsule-modal-table-item">Name</div>
                    <div className="capsule-modal-table-item">Flight</div>
                    {
                        capsuleData.missions.map((mission)=>(
                            <>
                                <div className="capsule-modal-table-item">{mission.name}</div>
                                <div className="capsule-modal-table-item">{mission.flight}</div>      
                            </>
                        ))
                    }
                </div>
                <div className="capsule-modal-item">Details</div>
                <div className="capsule-modal-item">{capsuleData.details}</div>
            </div>
            </>
        )}
        </Modal>
    )
}

export default CapsuleModal