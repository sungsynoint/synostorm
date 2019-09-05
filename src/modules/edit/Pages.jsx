import React, { Component } from 'react';
import uuid from "uuid/v4"
import Page from "./Page"
import AddPage from "./common/AddPage"


class Pages extends Component {
    state = {
        pageClone: []
    }

    componentWillMount() {
        this.setState({ pages: [<Page key={uuid()} />] })
    }


    onAddPage = () => {
        const pages = this.state.pages;
        const page =
            <Page
                pages={pages}
                onAddPage={this.onAddPage}
                onClonePage={this.onClonePage}
                onDeletePage={this.onDeletePage}
                pageClone={this.state.pageClone}
                key={uuid()} />
        pages.push(page)
        this.setState({ pages })
    }

    onClonePage = (pagekey, array) => {
        const pages = this.state.pages;
        const page = pages.find(page => page.key === pagekey)
        pages.push(page)
        this.setState({ pages })

        const pageClone = this.state.pageClone
        pageClone.push(array)
        this.setState({ pageClone })

    }


    onDeletePage = (pagekey) => {
        const pages = this.state.pages.filter(page => page.key !== pagekey)
        this.setState({ pages })
    }


    render() {

        return (
            <div>
                <Page
                    pages={this.state.pages}
                    onAddPage={this.onAddPage}
                    onClonePage={this.onClonePage}
                    onDeletePage={this.onDeletePage}
                    pageClone={this.state.pageClone}
                />

                <AddPage onAddPage={this.onAddPage} />
            </div>

        )
    }
}

export default Pages;