import React, { Component } from 'react';
import PageHeader from './common/PageHeader';
import Questions from './Questions';



class Page extends Component {




    render() {

        const { pages, onClonePage, onDeletePage } = this.props;

        (function getPageKey() {
            console.log(pages);
        })()

        return (
            <div>
                <div className="mb-3">

                    {pages.map((page, i) => <div key={page.key} className="card" style={{ border: "2px dashed #eeeff5" }}>
                        <PageHeader
                            page={page}
                            i={i}
                            onClonePage={onClonePage}
                            onDeletePage={onDeletePage}
                        />
                        <Questions id={`page${page.key}`} />
                    </div>)}
                </div>
            </div>
        );
    }
}

export default Page;