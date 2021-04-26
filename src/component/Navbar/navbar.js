import React,{useEffect,useState} from 'react'
import { Button } from "@material-ui/core";
import {Link,useHistory,useLocation} from 'react-router-dom'
import './navbar.css'
function Navbar(props) {
const [current, setcurrent] = useState('')
    let history=useHistory();
    let location=useLocation()
    let  isActive = {
        '/store-management/medicine': false,
        '/store-management/team': false,
        '/store-management/customer': false
    };
    useEffect(() => {
      let auth= window.localStorage.getItem('user');
      setcurrent(auth)
      console.log(auth)
    }, [current])
    useEffect(() => {
        let pageName= location.pathname 
        console.log(pageName)
        isActive[pageName]=true;
        console.log(isActive)
    }, [location.pathname])
    //const pageName=window.location.href.split('/')[3];
    // 
    
    return ( 
        <div className="navbar">
        <div className="navbar_left">
        <img  alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmA3I1AdwctwtzmQxgfTXUEL8BYnUPQFPuNw&usqp=CAU"/>
        </div>
        {window.localStorage.getItem('user')=='admin'?
        <div className="navbar_middle">
        
        <div>
        <Link className={location.pathname=="/store-management/medicine" ? "MenuItemActive" :"MenuItem"} to='/store-management/medicine' >medicines</Link>
       
       </div>
        <div> <Link className={location.pathname=="/store-management/team"? "MenuItemActive" : "MenuItem"} to='/store-management/team' >Team</Link></div>
        <div>  <Link className={location.pathname=="/store-management/customer" ? "MenuItemActive" : "MenuItem"} to='/store-management/customer' >customers</Link></div>
         </div>: <div className="navbar_middle">
        
        <div>  <Link className={location.pathname=="/store-management/customer" ? "MenuItemActive" : "MenuItem"} to='/store-management/customer' >customers</Link></div>
          </div>}
       
        <div className="navbar_right">
        <Button color="primary" variant="contained" onClick={()=>
            {window.localStorage.setItem('user',null)
                history.push("/store-management/")
            }
           }>
          Logout
        </Button>
        
      
        </div>
            
            
        </div>
    )
}

export default Navbar
