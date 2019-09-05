import React, { Component } from 'react';

class PageHeader extends Component {

    render() {

        function getCopy() {
            return page.label ? page.label : ""
        }

        const { page, i, onClonePage, onDeletePage } = this.props

        return (
            <div className="card-body pb-0 pt-0">
                <div className="card-widgets">
                    <a data-toggle="collapse"
                        href={`#page${page.key}`}
                        role="button"
                        aria-expanded="false"
                        aria-controls={`page${page.key}`}
                    >
                        <i className="mdi mdi-minus p-0 mx-2"></i>
                    </a>
                    <span onClick={() => onClonePage(page.key)}>
                        <i className="mdi mdi-content-copy btn p-0 mx-1"></i>
                    </span>
                    <span onClick={() => onDeletePage(page.key)}>
                        <i className="mdi mdi-close btn p-0 mx-2"></i>
                    </span>
                </div>

                <div className="card-title">
                    <h5 className="text-dark mt-0 mb-0"> {`Page ${i + 1} ${getCopy()}`}</h5>
                    <span className="text-muted" style={{ fontSize: "11px" }}>{page.key.toString().substring(0, 6)}</span>
                </div>

            </div>);
    }
}

export default PageHeader;