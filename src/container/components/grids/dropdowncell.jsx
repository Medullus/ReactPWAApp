import React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';

export default class DropDownCell extends React.Component {
    localizedData = [
        { text: 'yes', value: true },
        { text: 'no', value: false },
        { text: '(empty)', value: null }
    ];

    handleChange = (e) => {
        this.props.onChange({
            dataItem: this.props.dataItem,
            field: this.props.field,
            syntheticEvent: e.syntheticEvent,
            value: e.target.value.value
        });
    }

    render() {
        const dataValue = this.props.dataItem[this.props.field];

        if (!this.props.dataItem.inEdit) {
            return (
                <td>
                    {(dataValue === null) ? '' : this.props.dataItem[this.props.field].toString()}
                </td>
            );
        }

        return (
            <td>
                <DropDownList
                    style={{ width: "100px" }}
                    onChange={this.handleChange}
                    value={this.localizedData.find(c => c.value === dataValue)}
                    data={this.localizedData}
                    textField="text"
                />
            </td>
        );
    }
}