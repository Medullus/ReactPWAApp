import React from 'react';
import { GridColumn, Grid, GridToolbar } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import { CommandCell } from './commandcell.jsx';
import { connect } from 'react-redux'
class GridWithState extends React.Component {
    constructor(props) {
        super(props);
        const data = JSON.parse(JSON.stringify(this.props.data));

        const dataState = props.pageable ? { skip: 0, take: this.props.pageSize } : { skip: 0 };
        this.state = {
            dataState: dataState,
            result: process(data, dataState),
            allData: data
        };
    }

    render() {
        return (
            <Grid
                editField="_command"
                expandField="_expanded"
                {...this.props}
                {...this.state.dataState}
                {...this.state.result}

                onItemChange={this.itemChange}
                onExpandChange={this.expandChange}
                onDataStateChange={this.onDataStateChange}
            >
                <GridToolbar>
                    <button
                        title="+ Product"
                        className="k-button k-primary"
                        onClick={this.addNew}
                    >Add new
                </button>
                </GridToolbar>

                {this.props.children}

                <GridColumn
                    groupable={false}
                    sortable={false}
                    filterable={false}
                    resizable={false}
                    field="_command"
                    title=" "
                    width="180px"
                    cell={CommandCell}
                />
            </Grid>
        );
    }

    addNew = () => {
        const data = this.state.allData;
        data.unshift({ "_command": true });
        console.log(data)
    
        this.setState({
            dataState: { ...this.state.dataState, skip: 0 },
            result: process(data, { ...this.state.dataState, skip: 0 })
        });
    };

    expandChange = (event) => {

        event.dataItem[event.target.props.expandField] = event.value;
        this.forceUpdate();
    };

    itemChange = (event) => {
        console.log(event)
        console.log(this.state.allData)
        const data = this.state.allData;
        if (event.field === "_command" && event.value === 'delete') {
            data.splice(data.findIndex(d => d === event.dataItem), 1);
        } else {
            event.dataItem[event.field] = event.value;
        }
        this.setState({
            result: process(data, this.state.dataState)
        });
    };

    onDataStateChange = (e) => {
        console.log(e)
        this.setState({
            dataState: e.data,
            result: process(this.state.allData, e.data)
        });
    };
}
function mapDispatchToProps(dispatch) {
    return {
     
    }
  }
  export default connect(mapDispatchToProps)(GridWithState)