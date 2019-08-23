import React, { Component } from 'react';
import PageHeader from './common/PageHeader';
import Questions from './Questions';



class Page extends Component {

    render() {

        const { pages, onClonePage, page } = this.props;

        return (
            <div>
                <div className="mb-3">
                    {pages.map((page, i) => {
                        return (
                            <div key={page.key} className="card" style={{ border: "2px dashed #eeeff5" }}>
                                <PageHeader page={page} i={i} onClonePage={onClonePage} />
                                <Questions />
                            </div>
                        )
                    })}
                </div>
                <div className="mb-3">
                    {page.map((pageClone, i) => {
                        return (
                            <div key={pageClone.key} className="card" style={{ border: "2px dashed #eeeff5" }}>
                                <PageHeader page={pageClone} i={page} onClonePage={onClonePage} />
                                <Questions />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Page;