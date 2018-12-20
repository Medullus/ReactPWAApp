import React from 'react'
import{withRouter} from 'react-router-dom'
import { connect } from "react-redux";
class Home extends React.Component {
  render() {
    return (<div className="row">
    <h1> React web App with Kendo UI</h1>
   </div>)
  }
}

export default  withRouter(connect(null,null)(Home))
