import React from 'react';
import {withRouter} from 'react-router-dom'
import { DropDownList,MultiSelect,AutoComplete,ComboBox  } from '@progress/kendo-react-dropdowns';
import { filterBy } from '@progress/kendo-data-query';
import countries from '../../../store/data/sample-product'
import '../grid.css'
const sports = [
    { text: 'Basketball', id: 1 },
    { text: 'Football', id: 2 },
    { text: 'Tennis', id: 3 },
    { text: 'Volleyball', id: 4 }
];
const delay = 500;

 class DropdownComponent extends React.Component {
    state = {
        data: sports.slice(),
        loading: false,
        multidata:countries.slice(),
        combodata:sports.slice(),
    };

    filterChange = (event) => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.setState({
                data: this.filterData(event.filter),
                loading: false,
                value: [] 
            });
        }, delay);

        this.setState({
            loading: true
        });
    }
    onChange = (event) => {
        this.setState({
            value: [ ...event.target.value ]
        });
    }
    filterMultiData= (event) => {
        this.setState({
            multidata: filterBy(countries.slice(), event.filter)
        });
    }
    filterComboData= (event) => {
        this.setState({
            combodata: filterBy(sports.slice(), event.filter)
        });
    }
    defaultItem = { text: 'Select sport ...' };
    render() {
        return (
            <div>
            <div className="marginTop10">
            <h3>DropDownList</h3>
            <DropDownList
                data={this.state.data}
                textField="text"
                filterable={true}
                onFilterChange={this.filterChange}
                loading={this.state.loading}
                defaultItem={this.defaultItem}
            />
             </div>
            <div className="marginTop10">
            <h3>MultiSelect</h3>
            <MultiSelect
                data={this.state.multidata}
                filterable={true}
                onFilterChange={this.filterMultiData}
            />
            </div>
            <div className="marginTop10">
            <h3>Auto Correct</h3>
                <p>Type the name of a European country:</p>
                <AutoComplete data={countries} placeholder="e.g. Denmark" />
            </div>
            <div className="marginTop10">
            <h3>ComboBox Example With Filter</h3>
            <ComboBox
                data={this.state.combodata}
                textField="text"
                filterable={true}
                onFilterChange={this.filterComboData}
                loading={this.state.loading}
            />
            </div>
            
            </div>
           
        );
    }
}

export default withRouter(DropdownComponent)
