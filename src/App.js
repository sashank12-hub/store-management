import React from 'react'
import Navbar from './component/Navbar/navbar'
import Login from './component/Login/Login'
import Team from './component/Team/Team'
import Customer from './component/customer/Customer'
import Medicine from './component/medicine/Medicine'
import { Switch,BrowserRouter,Link,Route} from 'react-router-dom'
function App() {
  return (


    <div className="App">
      <BrowserRouter>
      
      

      <Switch>
      <Route exact path="/store-management/medicine" component={Medicine}/>
      <Route exact path="/store-management/customer" component ={Customer}/>
      <Route exact path="/store-management/team" component={Team}/>
      <Route exact path ="/store-management/" component={Login}/>
      <Route render={()=><h1>not found</h1>}/>
      
      
      </Switch>
      
      
      
      </BrowserRouter>
    </div>
  )
}

export default App
