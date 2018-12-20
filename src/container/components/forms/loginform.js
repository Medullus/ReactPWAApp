import React from 'react';
import { Input } from '@progress/kendo-react-inputs';
import '../grid.css'
export default class Login extends React.Component {
    render() {
        return (
            <div >
<div >
<h3>Login</h3>
                    <Input label="Email" type="email" required/>
                    <Input label="Password" type="password" required/>
                    </div>
                    <div className="marginTop10">
                    <button
                        className="k-button k-primary"
                         > Login 
                    </button>
                </div>
                </div>
        );}
}
