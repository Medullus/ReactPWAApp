import React from 'react'
import Login from './loginform'
import Registration from './registerform'
export default class FormMenu extends React.Component {
constructor(props)
{
  super(props)
  this.state={
    formType:""
  }
}
render(){
  return(
    <div>
   
    <div> <h3>React Web App Form</h3>
                    <button
                        className="k-button k-primary"
                       onClick={()=>{this.setState({formType:"Login"})}}
                    > Login
                    </button>
                    <button
                        className="k-button k-primary"
                        onClick={()=>{this.setState({formType:"Register"})}}
                    > Registration
                    </button>
    </div>
    {this.state.formType==="Login"?<div><Login></Login></div>:null}
    {this.state.formType==="Register"?<div><Registration></Registration></div>:null}
  </div>
  )
}
  
}
