import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React, { Component } from 'react'
import Navbar from './Components/layout/Navbar'
import DashBorad from './Components/dashboard/dashborad'
import ProjectDetails from './Components/project/ProjectDetails'
import Signin from './Components/auth/Signin'
import SignUp from './Components/auth/SignUp'
import CreateProject from './Components/project/createproject'

 class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <div>
       <Navbar />
       <Switch>
       <Route  exact path='/' component={DashBorad}></Route>
       <Route   path='/project/:id' component= {ProjectDetails}></Route>
       <Route   path='/signin' component= {Signin}></Route>
       <Route   path='/signup' component= {SignUp}></Route>
       <Route   path='/createproject' component= {CreateProject}></Route>
       </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
export default App