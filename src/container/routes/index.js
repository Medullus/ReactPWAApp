import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'
import GridMenu from '../components/grids/index';
import DropdownComponent from '../components/dropdowns/dropdownlist' 
import Login from '../components/forms/loginform'
import FormMenu from '../components/forms/index'
const routes = (
  <div>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/grids" component={GridMenu} />
      <Route path="/dropdowns" component={DropdownComponent} />
      <Route path="/Home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/forms" component={FormMenu} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
