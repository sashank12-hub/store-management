import { Button } from '@material-ui/core'
import React from 'react'
import './Form.css'
function Form({handleChange,handleAdd,handleCancel,handleSave,tableobj,formstate}) {

    return (
        <div className="teams_form">
        <form>
        <label htmlFor="firstname">Firstname</label>
            <input type="text" name="firstname" onChange={(e)=>{handleChange(e)}} value={tableobj.firstname}/>
            <label htmlFor="lastname">Lastname</label>
            <input type="text" name="lastname" onChange={(e)=>{handleChange(e)}} value={tableobj.lastname}/>
            <label htmlFor="experience">Experience</label>
            <input type="number" name="experience" onChange={(e)=>{handleChange(e)}} value={tableobj.experience} min="0"/>
            <label for="gender">Gender</label>
            <select name="gender" onChange={(e)=>{handleChange(e)}} value={tableobj.gender}>
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
            </select>
                <label htmlFor="dob">D.O.B</label>
            <input name="dob" type="date" onChange={(e)=>{handleChange(e)}} value={tableobj.dob}/>

    </form>
        
        {formstate && <div style={{width:"50%", margin:"20px 45%"}}>
            <Button style={{width:"100px",backgroundColor:"green", color:"whitesmoke"}} onClick={handleAdd}>ADD</Button>
        </div>
        }
        {!formstate && <div style={{width:"50%", margin:"20px 45%"}}>
        <Button style={{width:"100px",backgroundColor:"blue",marginRight:"30px",color:"whitesmoke"}} onClick={handleSave}>SAVE</Button>
        <Button style={{width:"100px",backgroundColor:"red",color:"whitesmoke"}} onClick={handleCancel}>CANCEL</Button>
    </div>}
        

            
        </div>
    )
}

export default Form
