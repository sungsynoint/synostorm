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
            const page = <Page pages={this.state.pages} onAddPage={onAddPage} key={uuid()} />
            pages.push(page)
            this.setState({ pages })

        }

        console.log(this.state.pages)

        return (
            <div>
                <Page onAddPage={onAddPage} />
                {this.state.pages}
            </div>

        )
    }
}

export default Pages;