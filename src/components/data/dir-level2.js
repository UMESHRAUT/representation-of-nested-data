import React, { Component } from 'react'

export default function Dir_lvl_2(props){
    console.log(props.click);

    if(props.click=="true"){
    return (
        <div>
        {
        props.files.map((item,index)=>{
            
            return <>
               <a className="lvl_3" id={index}>{item}</a>

            </>
        })}
        </div>
    )}
    else{
    return <></>
    }
}