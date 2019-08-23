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
            const page = <Page pages={pages} onAddPage={onAddPage} key={uuid()} />
            pages.push(page)
            this.setState({ pages })
        }


        const onClonePage = (pagekey) => {
            const pages = [...this.state.pages]
            const getPage = pages.find(page => page.key === pagekey)
            const page = this.state.page;
            page.push(getPage)
            this.setState(page)
        }

        const { pages, page } = this.state
        return (
            <div>
                <Page pages={pages} page={page} onAddPage={onAddPage} onClonePage={onClonePage} />
                <AddPage onAddPage={onAddPage} />
            </div>

        )
    }
}

export default Pages;