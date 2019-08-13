import React, { Component } from 'react';
import Page from "./Page"

class Pages extends Component {

    componentWillMount() {
        this.setState({ pages: [<Page />] })
    }

    render() {
        const onAddPage = () => {
            const pages = [...this.state.pages]
            const page = getPage()
            pages.push(page)
            this.setState({ pages })
            console.log("it work")
        }

        const getPage = () => {
            const page = <Page pages={this.state.pages} onAddPage={onAddPage} />
            return page;
        }

        return (
            <div>
                <Page onAddPage={onAddPage} pages={this.state.pages} />
                {this.state.pages.map(page => page)}
            </div>

        )
    }
}

export default Pages;