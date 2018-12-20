import React from 'react';
import { Grid, GridColumn, GridCell, GridToolbar } from '@progress/kendo-react-grid';
import DropDownCell from './dropdowncell'
import { sampleProducts } from '../../../store/data/products.jsx';


export default class CustomGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: sampleProducts.slice(0)
        };

        this.enterInsert = this.enterInsert.bind(this);
        this.itemChange = this.itemChange.bind(this);

        const enterEdit = this.enterEdit.bind(this);
        const save = this.save.bind(this);
        const cancel = this.cancel.bind(this);
        const remove = this.remove.bind(this);

        class MyCommandCell extends GridCell {
            render() {
                return !this.props.dataItem.inEdit ?
                    (
                        <td>
                            <button
                                className="k-primary k-button k-grid-edit-command"
                                onClick={() => enterEdit(this.props.dataItem)}
                            > Edit
                                </button>
                            <button
                                className="k-button k-grid-remove-command"
                                onClick={() => 
                                  //  confirm('Confirm deleting: ' + this.props.dataItem.ProductName) &&
                                    remove(this.props.dataItem)}
                            > Remove
                                </button>
                        </td>
                    ) : (
                        <td>
                            <button
                                className="k-button k-grid-save-command"
                                onClick={() => save(this.props.dataItem)}
                            > {this.props.dataItem.ProductID ? 'Update' : 'Add'}
                            </button>
                            <button
                                className="k-button k-grid-cancel-command"
                                onClick={() => cancel(this.props.dataItem)}
                            >{this.props.dataItem.ProductID ? 'Cancel' : 'Discard'}
                            </button>
                        </td>
                    );
            }
        }

        this.CommandCell = MyCommandCell;
    }

    enterInsert() {
        const dataItem = { inEdit: true, Discontinued: false };
        const newproducts = this.state.data.slice();
        newproducts.unshift(dataItem);
        this.update(newproducts, dataItem);
        this.setState({
            data: newproducts
        });
    }

    enterEdit(dataItem) {
        this.update(this.state.data, dataItem).inEdit = true;
        this.setState({
            data: this.state.data.slice()
        });
    }

    save(dataItem) {
        dataItem.inEdit = undefined;
        dataItem.ProductID = this.update(sampleProducts, dataItem).ProductID;
        this.setState({
            data: this.state.data.slice()
        });
    }

    cancel(dataItem) {
        if (dataItem.ProductID) {
            let originalItem = sampleProducts.find(p => p.ProductID === dataItem.ProductID);
            this.update(this.state.data, originalItem);
        } else {
            this.update(this.state.data, dataItem, !dataItem.ProductID);
        }
        this.setState({
            data: this.state.data.slice()
        });
    }

    remove(dataItem) {
        dataItem.inEdit = undefined;
        this.update(this.state.data, dataItem, true);
        this.update(sampleProducts, dataItem, true);
        this.setState({
            data: this.state.data.slice()
        });
    }

    itemChange(event) {
        const value = event.value;
        const name = event.field;
        if (!name) {
            return;
        }
        const updatedData = this.state.data.slice();
        const item = this.update(updatedData, event.dataItem);
        item[name] = value;
        this.setState({
            data: updatedData
        });
    }

    update(data, item, remove) {
        let updated;
        let index = data.findIndex(p => p === item || item.ProductID && p.ProductID === item.ProductID);
        if (index >= 0) {
            updated = Object.assign({}, item);
            data[index] = updated;
        } else {
            let id = 1;
            data.forEach(p => { id = Math.max(p.ProductID + 1, id); });
            updated = Object.assign({}, item, { ProductID: id });
            data.unshift(updated);
            index = 0;
        }

        if (remove) {
            return data.splice(index, 1)[0];
        }

        return data[index];
    }

    render() {
        return (
            <div>
                <Grid
                    data={this.state.data}
                    onItemChange={this.itemChange}
                    editField="inEdit"
                >
                    <GridToolbar>
                        <button
                            title="Add new"
                            className="k-button k-primary"
                            onClick={this.enterInsert}
                        >Add new
                        </button>

                        {this.state.data.filter(p => p.inEdit).length > 0 && (
                            <button
                                title="Cancel current changes"
                                className="k-button"
                                onClick={() => this.setState({ data: sampleProducts.slice() })}
                            >Cancel current changes
                            </button>
                        )}
                    </GridToolbar>
                    <GridColumn field="ProductID" title="Id" width="50px" editable={false} />
                    <GridColumn field="ProductName" title="Product Name" />
                    <GridColumn field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" />
                    <GridColumn field="UnitsInStock" title="Units" editor="numeric" />
                    <GridColumn field="Discontinued" cell={DropDownCell} />
                    <GridColumn cell={this.CommandCell} />
                </Grid>
            </div>
        );
    }
}

