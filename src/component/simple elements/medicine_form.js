import { Button } from '@material-ui/core'
import React from 'react'
import './Form.css'
function Form({handleChange,handleAdd,handleCancel,handleSave,tableobj,formstate}) {

console.log(formstate)


    return (
        <div className="teams_form">
        <form>
            <label htmlFor="medicine">Medicine</label>
            <input type="text" name="medicine" onChange={(e)=>{handleChange(e)}} value={tableobj.medicine}/>
            <label htmlFor="manufacturer">Manufacture</label>
            <input type="text" name="manufacturer" onChange={(e)=>{handleChange(e)}} value={tableobj.manufacturer}/>
            <label htmlFor="price">Price</label>
            <input type="number" name="price" onChange={(e)=>{handleChange(e)}} value={tableobj.price} min="0"/>
           <label for="discount">Discount%</label>
            <input type="number" name="discount" onChange={(e)=>{handleChange(e)}} value={tableobj.discount} min="0" max="100" />
            <label for="stock">Stock</label>
            <input type="number" name="stock" style={{width:"150px"}} onChange={(e)=>{handleChange(e)}} value={tableobj.stock} min="0" />
        </form>
        
    {formstate && <div style={{width:"50%", margin:"20px 45%"}}>
    <Button type= "submit"style={{width:"100px",backgroundColor:"green", color:"whitesmoke"}} onClick={handleAdd}>ADD</Button>
</div>
}
{!formstate && <div style={{width:"50%", margin:"20px 45%"}}>
<Button style={{width:"100px",backgroundColor:"blue",marginRight:"30px",color:"whitesmoke"}} onClick={handleSave}>SAVE</Button>
<Button style={{width:"100px",backgroundColor:"red",color:"whitesmoke",border:"none"}} onClick={handleCancel}>CANCEL</Button>
</div>}
        

            
        </div>
    )
}

export default Form
