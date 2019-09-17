import React, { Component } from 'react';
import uuid from "uuid/v4"
import TextArea from './common/TextArea';


class FreeText extends Component {
    state = {
        textAreas: [<TextArea key={uuid()} />],
    }


    onAddTextArea = () => {
        const textAreas = [...this.state.textAreas];
        const textArea = <TextArea key={uuid()} textarea={this.state.textAreas} />
        textAreas.push(textArea)
        this.setState({ textAreas })
    }

    render() {
        return (
            <React.Fragment>
                <TextArea textarea={this.state.textAreas} />
                <p className="text-center text-dark font-weight-bold" onClick={this.onAddTextArea}>Add text area</p>
            </React.Fragment>
        );
    }
}

export default FreeText;