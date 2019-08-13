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
            const page = getPage()
            pages.push(page)
            this.setState({ pages })
            console.log("it work")
        }

        console.log(this.state.pages)

        const getPage = () => {
            const page = <Page pages={this.state.pages} onAddPage={onAddPage} />
            return page;
        }

        return (
            <div>
                <Page onAddPage={onAddPage} pages={this.state.pages} />
                {this.state.pages.map(page => <div key={uuid()}> {page}</div>)}
            </div>

        )
    }
}

export default Pages;