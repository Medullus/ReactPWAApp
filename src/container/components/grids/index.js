import React from 'react'
import Grid from './grid'
import CustomGrid from './customgrid'
import '../grid.css'
export default class GridMenu extends React.Component {
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
                         onClick={()=>{this.setState({formType:"Grid"})}}
                      > Grid
                      </button>
                      <button
                          className="k-button k-primary"
                          onClick={()=>{this.setState({formType:"CustomGrid"})}}
                      > Custom Grid
                      </button>
      </div>
      {this.state.formType==="Grid"?<div><Grid></Grid></div>:null}
      {this.state.formType==="CustomGrid"?<div className="marginTop10"><CustomGrid></CustomGrid></div>:null}
    </div>
    )
  }
    
  }
