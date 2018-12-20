import React from 'react';
import { Input } from '@progress/kendo-react-inputs';
import { DropDownList} from '@progress/kendo-react-dropdowns';
import '../grid.css'
const gender = [
    { text: 'Male', id: 1 },
    { text: 'Female', id: 2 },
    { text: 'Other', id: 3 },

];
export default class Registration extends React.Component {
    state = {
        data: gender.slice(),
        
    };
    defaultItem = { text: 'Select Gender' };
    render() {
        return (
            <div>
<div className="col-xs-12 col-12 col-xs-24 col-md-8 col-lg-8 col-xl-6 col-lg-6 example-col">
                    <h3>Registration</h3>
                    <Input label="First name" required/>
                    <Input label="Last name"/>
                    <Input label="Email" type="email" required/>
                    <Input label="Password" type="password" required/>
                    <Input label="Comfirm Password" type="password" required/>
                    <DropDownList
                data={this.state.data}
                textField="text"
                defaultItem={this.defaultItem}
            />
                    </div>
                    <div className="marginTop10">
                    <button
                        className="k-button k-primary"
                       
                    > Register
                    </button>
                </div>
                </div>
        );}
}
