import React ,{useEffect,useState}from 'react'
import{ Redirect} from 'react-router-dom'
import Navbar from '../Navbar/navbar'
import Form from '../simple elements/customer_form'
import Table from './table'
let editIndex=0;
function Customer() {
const [cost, setcost] = useState([])
  const obj={
    customer:'',
    phone:'',
    quantity:'',
    medicine:'',
    cost:'0',
}  
const [formstate, setformstate] = useState(true)
    const [show, setshow] = useState(true)
    const header=['customer','phone','quantity','medicine','cost']
useEffect(() => {
 
 // console.log(auth)
}, [window.localStorage.getItem('user')])
const [tableObject,setTableObject]=useState(obj);
const [tableData,setTableData]=useState([])
const [dataLocal,setDataLocal]=useState([]);
const handleChange=(e)=>{
  if(e.target.name==='medicine'){
      setTableObject({...tableObject,'medicine':e.target.value});
  }
  else
setTableObject({...tableObject,[e.target.name]:e.target.value});
//console.log(e.target.name," ",e.target.value)
// setTableObject({...tableObject,id:tableData.length})
}
const savLocalStorage=()=>{
localStorage.setItem('customer',JSON.stringify(tableData))
}
useEffect(()=>{
//savLocalStorage();
getLocaStorage();
},[])
useEffect(()=>{
savLocalStorage();
},[tableData])
const getLocaStorage=()=>{
if(localStorage.getItem('customer')===null)
{
  localStorage.setItem('customer',JSON.stringify([]));
}
else
{
    let data=localStorage.getItem('customer',JSON.stringify('customer'));
    //console.log("datata",data);
    data=JSON.parse(data);
     setTableData(data);
}
}
const handlecost=(user)=>{
 // console.log("user====",user);
  var t=  (JSON.parse( window.localStorage.getItem('Medicine')));
   t=t.filter(item=>item.medicine===user.medicine)
  parseInt(parseInt(t[0].price))
 // console.log(parseInt((parseInt(t[0].price)-((t[0].discount)/100*parseInt(t[0].price)))*user.quantity))
    return (parseInt((parseInt(t[0].price)-((t[0].discount)/100*parseInt(t[0].price)))*user.quantity))
}
const handleAdd=(e)=>{
e.preventDefault();
let arr=[...tableData];
const x=handlecost(tableObject)
//console.log(x)
tableObject.cost=x.toString();
arr.push(tableObject);
setTableData(arr);
//console.log(arr)
setTableObject(obj)
//console.log("tableData",tableData);
//console.log("tableObject",tableObject);
}
const handleDelete=(index)=>{
const updated=[...tableData];
updated.splice(index,1)
setTableData(updated)
console.log(index);
// const update=[...tableData];
//  const data=update.filter((data)=>data.id!==index);
//  console.log(data);
//  setTableData(data);
}
const handleEdit=(index)=>{
  setformstate(false)
  setTableObject(tableData[index])
    //setEditButton(true);
    //const update=[...tableData];
    editIndex=index;
   //handleSave(index);
  }
  const handleSave=()=>{
  console.log('called')
  const updated=[...tableData]
  updated.splice(editIndex,1)
  const x=handlecost(tableObject)
//console.log(x)
tableObject.cost=x.toString();
  updated.splice(editIndex,0,tableObject)
  setTableData(updated)
  setTableObject(obj)
  setformstate(true)
  console.log(tableObject)
  }
  const handleCancel=()=>{
    setTableObject(obj)
    setformstate(true)
  }
  return (
    <div className="customer">
{!show && <Redirect to="/store-management/"/>}
{show &&
<>
<Navbar/>
<Form handleAdd={handleAdd} handleCancel={handleCancel} handleSave={handleSave} handleChange={handleChange} tableobj={tableObject} formstate={formstate}/>
<Table  header={header} array={tableData} handleEdit={handleEdit} handleDelete={handleDelete} cost={cost} />
</>
}
 </div>
)
}
export default Customer;