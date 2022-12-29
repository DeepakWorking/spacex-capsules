import React, { useContext } from "react";
import classNames from "classnames";
import AppContext from "../../context/appContext";
import Button from "../../shared/Button";

const Pagination = ({
    activePage,
    totalPage
})=>{
    const dispatch = useContext(AppContext)
    const nextPage = ()=>{
        dispatch({
            type : 'activePage',
            payload : activePage + 1
        })
    }
    const previousPage = ()=>{
        dispatch({
            type : 'activePage',
            payload : activePage - 1
        })
    }
    const paginate = (num)=>{
        dispatch({
            type : 'activePage',
            payload : num
        })
    }
    
    const createList = ()=>{
        let pagingNumbers = []
        for (let i = 1; i <= totalPage; i++){
            pagingNumbers.push(
                <li 
                onClick={()=>{paginate(i)}}
                className= {
                    classNames('page-numer', {
                        "active" : i === activePage
                    })
                }   
                key = {i}>
                {i}
            </li> 
            )
        }
        return pagingNumbers
    }    
    return (
        <footer className="pagination-wrapper">
            <Button
                onClick={()=>previousPage()}
                className= {'page-number' }  
                disabled = {activePage <= 1}
            >
               Prev
            </Button> 
            <ul className="pagination">
                {createList()}
            </ul>
            <Button 
                onClick={()=>nextPage()} 
                className= {'page-number' }  
                disabled = {totalPage === activePage}  
            >
               Next
            </Button>
        </footer>
    )
}
export default Pagination