import React, { Component } from 'react';
import uuid from "uuid/v4"
import Page from "./Page"
import AddPage from "./common/AddPage"


class Pages extends Component {

    componentWillMount() {
        this.setState({ pages: [<Page key={uuid()} />] })
    }

    render() {

        const onAddPage = () => {
            const pages = [...this.state.pages]
            const page = <Page pages={pages} onAddPage={onAddPage} key={uuid()} />
            pages.push(page)
            this.setState({ pages })
        }

        return (
            <div>
                {this.state.pages}
                <AddPage onAddPage={onAddPage} />
            </div>

        )
    }
}

export default Pages;