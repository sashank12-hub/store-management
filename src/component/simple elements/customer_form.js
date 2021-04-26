import { Button} from '@material-ui/core'
import { LaptopWindowsOutlined } from '@material-ui/icons'
import React ,{useEffect,useState}from 'react'
import './Form.css'
function Form({handleChange,handleAdd,handleCancel,handleSave,tableobj,formstate}) {
    return (
        <div className="teams_form">
        <form>
        <label htmlFor="customer">Customer</label>
            <input type="text" name="customer" value={tableobj.customer} onChange={(e)=>{handleChange(e)}}/>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="123-45-678" value={tableobj.phone} onChange={(e)=>{handleChange(e)}} required/>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" value={tableobj.quantity} min="0" onChange={(e)=>{handleChange(e)}}/>
            <label htmlFor="medicine">Medicine</label>
            <select name="medicine" onChange={(e)=>{handleChange(e)}}>
                <option>Select</option>
            {JSON.parse(window.localStorage.getItem("Medicine"))?.map(item=>(
                <option value={item.medicine}>{item.medicine}</option>
            ))}
            </select>
        </form>
    {formstate && <div style={{width:"50%", margin:"20px 45%"}}>
    <Button style={{width:"100px",backgroundColor:"green", color:"whitesmoke"}}onClick={handleAdd}>ADD</Button>
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