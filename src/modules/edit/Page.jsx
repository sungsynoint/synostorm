import React, { Component } from 'react';
import PageHeader from './common/PageHeader';
import Questions from './Questions';



class Page extends Component {

    render() {

        function pageCard(page, index, key) {
            return (
                <div key={key} className="card" style={{ border: "2px dashed #eeeff5" }}>
                    <PageHeader page={page} i={index} onClonePage={onClonePage} onDeletePage={onDeletePage} />
                    <Questions />
                </div>
            )
        }

        const { pages, onClonePage, page, onDeletePage } = this.props;

        return (
            <div>
                <div className="mb-3">
                    {pages.map((page, i) => pageCard(page, i, page.key))}
                    {page.map((pageClone) => pageCard(pageClone, pageClone, pageClone.key))}
                </div>
            </div>
        );
    }
}

export default Page;