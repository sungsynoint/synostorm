import React, { Component } from 'react';
import Dragula from "react-dragula"
import PageHeader from './common/PageHeader';
import Questions from './Questions';


class Page extends Component {
    state = {}

    dragulaDecorator = (PageDrag) => {
        if (PageDrag) {
            let options = {};
            Dragula([PageDrag], options);
        }
    };

    render() {
        const { pages, onClonePage, onDeletePage, } = this.props;
        return (
            <div>
                <div className="mb-3">
                    <div ref={this.dragulaDecorator}>
                        {pages.map((page, i) =>
                            <div
                                key={page.key}
                                className="card"
                                style={{ border: "2px dashed #eeeff5" }}
                            >
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
            </div>
        );
    }
}

export default Page;