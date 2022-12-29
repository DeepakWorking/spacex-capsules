export const initialAppState = {
    data : [],
    filterByStatus : '',
    filterByType : '',
    filterByDate : '',
    activePage : 1,
    activeGridData : {},
    activeGridIndex : -1
}

const reducer = (state, action)=>{  
    if (Object.keys(initialAppState).indexOf(action.type) > -1 ) {
        return {
            ...state,
            [action.type] : action.payload
        }
    }else if(action.type === 'clearFilter'){
        return {
            ...state,
            filterByStatus : '',
            filterByType : '',
            filterByDate : '',
        }
    }else if(action.type === 'selectgrid'){
        const selectedGridIndex = state.data.findIndex ((grid)=>grid.capsule_serial === action.payload)
        if(selectedGridIndex > -1){
            return {
                ...state,
                activeGridData : state.data[selectedGridIndex],
                activeGridIndex : selectedGridIndex
            }
        }
    }else{
        return state
    }
}

export default reducer