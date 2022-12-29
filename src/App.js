import React, { useEffect, useReducer, useMemo } from 'react'
import '../asset/style.css'
import 'font-awesome/css/font-awesome.min.css'
import Banner from './components/banner'
import FilterMenu from './components/filterMenu'
import CapsuleGrid, { CapsuleModal } from './components/grid'
import reducer, { initialAppState } from './reducer/appReducer'
import AppContext from './context/appContext'
import Pagination from './components/pagination'
import { filterData, sortDataByDate } from './utils'

const ITEMS_PER_PAGE = 6

const App = ()=>{
    const [{
        data,
        filterByStatus,
        filterByDate,
        filterByType,
        activePage,
        activeGridIndex,
        activeGridData
    }, dispatch] = useReducer(reducer, initialAppState)
    const filteredData = sortDataByDate(filterData({...{
        data,
        filterByStatus,
        filterByType
    }}), filterByDate) 
    const totalPage = Math.ceil(filteredData.length / ITEMS_PER_PAGE)
    const startingIndex = activePage - 1
    const finalIndex = activePage + ITEMS_PER_PAGE - 1 
    
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/capsules')
        .then((res)=>res.json())
        .then((res)=>{
            dispatch({
                type : 'data',
                payload : res
            })
        })
    }, [])
    
    return (
        <div className='appContainer'>
            <Banner/>
            <AppContext.Provider
                value={dispatch}
            >
                <FilterMenu
                    data = {data}
                    filterByDate = {filterByDate}
                    filterByStatus = {filterByStatus}
                    filterByType = {filterByType}
                />
                <CapsuleGrid
                    gridData = {filteredData.slice(startingIndex, finalIndex)}
                />
                <Pagination 
                   totalPage = {totalPage}
                   activePage = {activePage}
                />
                <CapsuleModal
                    capsuleData={activeGridData}
                    isOpen = {activeGridIndex > -1}
                />
            </AppContext.Provider>
        </div>
    )
}
export default App