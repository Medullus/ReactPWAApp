import React from 'react'
import { Link,withRouter } from 'react-router-dom'

const NavBar = () => (
  <div>
   
    <div> <h3>React Web App</h3>
    <Link  className="k-button k-primary" to="/">Home</Link> 
    <Link  className="k-button k-primary" to="/grids">Grid</Link> 
    <Link  className="k-button k-primary" to="/dropdowns">Dropdowns</Link>
    <Link  className="k-button k-primary" to="/forms">Forms</Link>
    </div>
  </div>
)

export default  withRouter(NavBar)
