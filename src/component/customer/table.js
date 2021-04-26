import { Button } from "@material-ui/core";
import { Opacity } from "@material-ui/icons";
import React from "react";
import  '../simple elements/Table.css'
const Table = ({header ,array,handleEdit,handleDelete }) => {


 
  return (
      <div className="tablee">
    <table >
      <thead>
      <tr>
        {header.map((item, index) => (
          <th>{item}</th>
        ))}
        <th colSpan="2">Action</th>
        </tr>
      </thead>
      <tbody>
         
           {
        array?.map((item, index) => (
           <tr>
             {Object.values(item).map((value) => (
               <td >{value}</td>
             ))}
             <td >
             <Button variant="contained" style={{backgroundColor:"blue",border:"0px",color:"whitesmoke" ,opacity:"0.8"}}
             onClick={(e)=>handleEdit(index)}>
            EDIT
           </Button> </td>
               <td>
               <Button variant="contained" style={{backgroundColor:"red",border:"0px",color:"whitesmoke" ,opacity:"0.8"}}
               onClick={(e)=>handleDelete(index)}>
                 DELETE
               </Button>
             </td>
           </tr>
          

         ))
     
}        
      </tbody>
    </table>
    </div>);
};
export default Table;
