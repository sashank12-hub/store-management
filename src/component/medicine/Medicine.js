import React ,{useEffect,useState}from 'react'
import{ Redirect} from 'react-router-dom'
import Navbar from '../Navbar/navbar'
import Form from '../simple elements/medicine_form'
import Table from '../simple elements/Table'
let editIndex=0;
function Medicine() {
    const [show, setshow] = useState(true)
    const [formstate, setformstate] = useState(true)
    const header=['Name','Manufacturer','Price','Stock','Discount']
    


const obj={
    
    medicine:'',
    manufacturer:'',
    price:'',
    
    stock:'',
    discount:'',
}




const [tableObject,setTableObject]=useState(obj);
const [tableData,setTableData]=useState([])
const [dataLocal,setDataLocal]=useState([]);

const handleChange=(e)=>{
    setTableObject({...tableObject,[e.target.name]:e.target.value});
   // setTableObject({...tableObject,id:tableData.length})
}
const savLocalStorage=()=>{
    localStorage.setItem('Medicine',JSON.stringify(tableData))
}
useEffect(()=>{
//savLocalStorage();
    getLocaStorage();
},[])
useEffect(()=>{
    savLocalStorage();
},[tableData])
const getLocaStorage=()=>{
    if(localStorage.getItem('Medicine')===null)
    {
        localStorage.setItem('Medicine',JSON.stringify([]));

    }
    else
    {
        let data=localStorage.getItem('Medicine',JSON.stringify('Medicine'));
        console.log("datata",data);
        data=JSON.parse(data);
         setTableData(data);
}
}
const handleAdd=(e)=>{
    e.preventDefault();
    let arr=[...tableData];
  
    arr.push(tableObject);

    setTableData(arr);
    console.log(arr)
    setTableObject(obj)
console.log("tableData",tableData);
console.log("tableObject",tableObject);
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
    updated.splice(editIndex,0,tableObject)
    setTableData(updated)
    setTableObject(obj)
   setformstate(true)

}
const handleCancel=()=>{
    setTableObject(obj)

    setformstate(true)

}
















useEffect(() => {
  const auth= window.localStorage.getItem('user');
  auth==='admin'? setshow(true): setshow(false)
  console.log(auth)
}, [window.localStorage.getItem('user')])
    return (
        <div className="medicine">
{!show && <Redirect to="/store-management"/>}
{show &&
    <>
    <Navbar/>
    <Form handleAdd={handleAdd} handleCancel={handleCancel} handleSave={handleSave} handleChange={handleChange} tableobj={tableObject} formstate={formstate}/>
     <Table  header={header} array={tableData} handleEdit={handleEdit} handleDelete={handleDelete} />
    
    </>
     





}
       
     
     
     
     
     </div>


    
        
    )
}

export default Medicine
