import React, { Component } from 'react';
import uuid from "uuid/v4"
import RowInput from './common/RowInput';
import AddRow from './common/AddRow';
import TextArea from './common/TextArea';
import NavItems from './common/NavItems';


class MatixCustom extends Component {
    state = {

        input: [<RowInput key={uuid()} />]
    }



    render() {

        const onQuickAdd = (value) => {
            console.log(value)
        }


        const onAddRow = () => {
            const input = [...this.state.input];
            const row = <RowInput key={uuid()} />
            input.push(row)
            this.setState({ input })
        }

        const onDeleteRow = (row) => {
            const input = this.state.input.filter(i => i.key !== row.key)
            this.setState({ input })
        }


        return (
            <div className="row pb-5">
                <div className="col-12">
                    <NavItems />
                    <div className="tab-content">
                        <div className="tab-pane active" id="row">
                            <div className="row">
                                <div className="col-7 pr-0">
                                    <RowInput input={this.state.input} onDeleteRow={onDeleteRow} />
                                    <AddRow onAddRow={onAddRow} />
                                </div>
                                <TextArea onQuickAdd={onQuickAdd} />
                            </div>

                        </div>
                        <div className="tab-pane show" id="column">
                            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                            <p className="mb-0">Leggings occaecat dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default MatixCustom;








