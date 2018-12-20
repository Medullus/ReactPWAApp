import React, { Component } from "react";
import "../grid.css";
import '@progress/kendo-theme-default/dist/all.css';
import  GridWithState from './gridstate.jsx';
import { GridColumn } from '@progress/kendo-react-grid';
import { connect } from 'react-redux'
import products from '../../../store/data/products.json';
class Grid extends Component {
    render() {
    return (
     <div style={{marginTop:10}}>

      <GridWithState
      data={products}
      style={{ height: '540px' }}
      sortable={true}
      pageSize={10}
      pageable={true}
      groupable={true}
      filterable={true}
      reorderable={true}
      resizable={true}
  >
      <GridColumn field="ProductName" title="Product Name" />
     
      <GridColumn field="UnitsInStock" title="Units" filter="numeric" editor="numeric" />
  </GridWithState>
  </div>
);
}
  }
  const mapStateToProps = state => ({
    products: state.Product.ProductData,
    
  })
  
  export default connect(mapStateToProps)(Grid)