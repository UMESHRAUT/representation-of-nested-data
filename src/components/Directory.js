import data from './data/data'
import Dir_lvl_1 from './data/dir-level1'

import React, { Component } from 'react'

export default class Directory extends Component {

        click=(e)=>{
          this.setState(
            [...e.clicked=e?.clicked=="true"?"false":"true"]
          )
         }
    render() {
        return (
            <div className="main">
              <span className="text">File directory</span>
                <div div className="dir">
            
         {data.map((item,index)=>{
            return <div className={item.clicked}>
            <a className="lvl_1" id={index} onClick={()=>this.click(item)}> <i className="fas fa-chevron-right"></i> {item.name}</a>

             <Dir_lvl_1 key={index} files={item.files} click={item.clicked} setState={this.click} location={data[index]}/>
            </div >
         })}   
        </div>
            </div>
        )
    }
}

