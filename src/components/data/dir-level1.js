import React from 'react'
export default function Dir_lvl_1(props){
    function handleClick(e){
        return props.setState(props?.location?.files[e])
    }
    if(props.click=="true"){
    return (
        <div>
        {
        props?.files.map((item,index)=>{
            
            return <div className={item.clicked}>
            {item?.files?
                    <a className="lvl_2" id={index} onClick={()=>handleClick(item.id-1)}> <i className="fas fa-chevron-right"></i> {item.name}</a>
                    :
                   <a className="lvl_3" id={index}>{item}</a>
            }
             <Dir_lvl_1 key={index} files={item.files} click={item?.clicked} setState={handleClick}/>
            </div>
        })}
        </div>
    )}
    else{
    return <></>
    }

}
