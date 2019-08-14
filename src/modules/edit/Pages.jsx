import React, { Component } from 'react';
import uuid from "uuid/v4"
import Page from "./Page"

class Pages extends Component {

    componentWillMount() {
        this.setState({ pages: [] })
    }

    render() {
        const onAddPage = () => {
            const pages = [...this.state.pages]
            const page = <Page pages={this.state.pages} onAddPage={onAddPage} />
            pages.push(page)
            this.setState({ pages })
            console.log("it work")
        }


        return (
            <div>
                <Page onAddPage={onAddPage} />
                {this.state.pages.map(page => <div key={uuid()}>{page}</div>)}
            </div>

        )
    }
}

export default Pages;