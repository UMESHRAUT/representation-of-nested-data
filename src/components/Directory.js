import data from './data/data'
import Dir_lvl_1 from './data/dir-level1'



import React, { Component } from 'react'

export default class Directory extends Component {
      constructor(){
        super()
        this.state={
            data:[
                {
                  id:1,
                  name:"Local Disk (:C)",
                  clicked:"false",
                  files:[
                    {
                      id:1,
                      name:"Program files",
                      clicked:"false",
                      files:[
                        "Windows NT",
                        "Windows mail",
                        "Windows photoVewer"
                      ]
                    },
                          {
                      id:1,
                      name:"user",
                      clicked:"false",
                      files:[
                        "Nishant",
                        "Sidhart",
                      ]
                    },
                          {
                      id:3,
                      name:"Windows",
                      clicked:"false",
                      files:[
                        "Boot",
                        "File Manager",
                      ]
                    }
                  ]
                },
                {
                    id:2,
                    name:"Local Disk (:D)",
                    clicked:"false",
                    files:[
                      {
                        id:1,
                        name:"Personals",
                        clicked:"false",
                        files:[
                          "myPhoto.png",
                          "Resume.pdf"
                        ]
                      },
                            {
                        id:2,
                        name:"Projects",
                        clicked:"false",
                        files:[
                          "calculator Applcation",
                          "Notes application",
                        ]
                      },
                            {
                        id:3,
                        name:"office",
                        clicked:"false",
                        files:[
                          "Reports.Dox",
                        ]
                      }
                    ]
                  },{
                    id:3,
                    name:"Local Disk (:E)",
                    clicked:"false",
                    files:[
                      {
                        id:1,
                        name:"Pictures",
                        clicked:"false",
                        files:[
                          "cat.png",
                        ]
                      },
                            {
                        id:2,
                        name:"Documents",
                        clicked:"false",
                        files:[
                          "progressReport.dox",
                          "DesingDoc.pdf",
                        ]
                      },
                            {
                        id:3,
                        name:"Study material",
                        clicked:"false",  
                        files:[
                          "HTML.html",
                          "Css.pdf",
                          "JS.pdf"
                        ]
                      }
                    ]
                  },
              ],
            }
        }
        click=(e)=>{
          this.setState(
            [...e.clicked=e.clicked=="true"?"false":"true"]
          )
         }
    render() {
        return (
            <div>
                <div div className="main">
            <span className="text">File directory</span>
         {data.map((item,index)=>{
             return< div className={item.clicked}>
             
             <a id={index} onClick={()=>this.click(data[item.id-1])} className="lvl_1" ><i className="fas fa-chevron-right"></i>  {item.name}</a>
             {console.log("reaching "+item.clicked)}
             
             <Dir_lvl_1 key={index} files={item.files} click={item.clicked} setState={this.click} location={data[index]}/>
            </div >
         })}   
        </div>
            </div>
        )
    }
}
































// import React, { useState } from 'react';
// import data from './data/data';

// export default function Directory() {

//     function toggle(e){
        
//         e.classList=="show"?e.classList="hide":e.classList="show";
        
//     }

// return(
//     <div className="main" >
//         <span className="text">File Directory</span>
//         <ul>
//             <li id="lvl"><a onClick={()=>{toggle(document.getElementById("lvl-1"))}}><i className="fas fa-chevron-right"></i>Local Disk(:C)</a>
//             <ul id="lvl-1">
//                 <li><a onClick={()=>{toggle(document.getElementById("lvl-1.1"))}}><i className="fas fa-chevron-right"></i>program files</a>
//                     <ul id="lvl-1.1">
//                         <li><a >window NT</a></li>
//                         <li><a>window mail</a></li>
//                         <li><a>window photooviewer</a></li>
//                     </ul>
//                 </li>
//                 <li><a onClick={()=>{toggle(document.getElementById("lvl-1.1.2"))}}><i className="fas fa-chevron-right"></i>user</a>
//                     <ul id="lvl-1.1.2">
//                         <li ><a>nishant</a></li>
//                         <li ><a>sidhart</a></li>
//                     </ul>
//                 </li>
//                 <li><a onClick={()=>{toggle(document.getElementById("lvl-1.1.3"))}}><i className="fas fa-chevron-right"></i>windows</a>
//                     <ul id="lvl-1.1.3">
//                         <li ><a>Boot</a></li>
//                         <li ><a>file manager</a></li>
//                     </ul>
//                 </li>
//             </ul>
//             </li>
//             <li ><a onClick={()=>{toggle(document.getElementById("lvl-2"))}}><i className="fas fa-chevron-right"></i>Local Disk(:D)</a>
//             <ul id="lvl-2">
//                 <li><a onClick={()=>{toggle(document.getElementById("lvl-2.1"))}}><i className="fas fa-chevron-right"></i>Personals</a>
//                     <ul id="lvl-2.1">
//                         <li ><a>MyPhoto.png</a></li>
//                         <li ><a>resume.pdf</a></li>
//                     </ul>
//                 </li>
//                 <li><a onClick={()=>{toggle(document.getElementById("lvl-2.2"))}}><i className="fas fa-chevron-right"></i>projects</a>
//                     <ul id="lvl-2.2">
//                         <li ><a>calculator application</a></li>
//                         <li ><a>notes application</a></li>
                      
//                     </ul>
//                 </li>
//                 <li><a onClick={()=>{toggle(document.getElementById("lvl-2.3"))}}><i className="fas fa-chevron-right"></i>office</a>
//                     <ul id="lvl-2.3">
//                         <li ><a>Reports.Doc</a></li>

//                     </ul>
//                 </li>
//             </ul>
//             </li>
//             <li><a onClick={()=>{toggle(document.getElementById("lvl-3"))}}><i className="fas fa-chevron-right"></i>Local Disk(:E)</a>
//             <ul id="lvl-3">
//                 <li><a onClick={()=>{toggle(document.getElementById("lvl-3.1"))}}><i className="fas fa-chevron-right"></i>pictures</a>
//                     <ul id="lvl-3.1">
//                         <li ><a>cat.png</a></li>
//                     </ul>
//                 </li>
//                 <li><a onClick={()=>{toggle(document.getElementById("lvl-3.2"))}}><i className="fas fa-chevron-right"></i>documents</a>
//                     <ul id="lvl-3.2">
//                         <li ><a>progressReport.Doc</a></li>
//                         <li ><a>Design.pdf</a></li>
//                     </ul>
//                 </li>
//                 <li><a onClick={()=>{toggle(document.getElementById("lvl-3.3"))}}><i className="fas fa-chevron-right"></i>study material</a>
//                     <ul id="lvl-3.3">
//                         <li ><a>Html.html</a></li>
//                         <li ><a>Css.pdf</a></li>
//                         <li ><a>JS.pdf</a></li>
//                     </ul>
//                 </li>
//             </ul>
//             </li>
//         </ul>
//     </div>
// )
// }