import React, { Component } from 'react'
import Dir_lvl_2 from './dir-level2'
export default function Dir_lvl_1(props){
    function handleClick(e){
        return props.setState(props.location.files[e])
    }
    if(props.click=="true"){
    return (
        <div>
        {
        // if(props.click){ 
        props.files.map((item,index)=>{
            
            return <div className={item.clicked}>
            <a className="lvl_2" id={index} onClick={()=>handleClick(item.id-1)}> <i className="fas fa-chevron-right"></i> {item.name}</a>
            {
            <Dir_lvl_2 files={item.files} click={item.clicked}/>
            }
            </div>
        })}
        </div>
    )}
    else{
    return <></>
    }

}
