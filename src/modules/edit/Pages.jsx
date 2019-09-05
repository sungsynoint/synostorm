import React, { Component } from 'react';
import uuid from "uuid/v4"
import Page from "./Page"
import AddPage from "./common/AddPage"


class Pages extends Component {
    state = {
        page: []
    }

    componentWillMount() {
        this.setState({ pages: [<Page key={uuid()} />] })
    }


    render() {

        const onAddPage = () => {
            const pages = [...this.state.pages]
            const page =
                <Page
                    pages={pages}
                    onAddPage={onAddPage}
                    onClonePage={onClonePage}
                    onDeletePage={onDeletePage}
                    key={uuid()} />
            pages.push(page)
            this.setState({ pages })
        }


        const onClonePage = (pagekey) => {
            const pages = this.state.pages;
            const page = pages.find(page => page.key === pagekey)
            pages.push(page)
            this.setState({ pages })
        }


        const onDeletePage = (pagekey) => {
            const pages = this.state.pages.filter(page => page.key !== pagekey)
            this.setState({ pages })
        }

        const { pages } = this.state

        return (
            <div>
                <Page
                    pages={pages}
                    onAddPage={onAddPage}
                    onClonePage={onClonePage}
                    onDeletePage={onDeletePage}
                />

                <AddPage onAddPage={onAddPage} />
            </div>

        )
    }
}

export default Pages;