import React from 'react';

const PageHeader = ({ pages }) => {

    const pageNum = () => {
        if(pages === undefined) {
            return 1
        } else {
            return pages.length
        }
    }

    return (
        <div className="card-body pb-0">
            <div className="button-list float-right">
                <button className="btn btn-secondary btn-sm" disabled>Copy</button>
                <button className="btn btn-secondary btn-sm" disabled>Delete</button>
            </div>
            <textarea className="h4 w-50 text-dark" style={{ resize: "none", border: "0px", height: "27px" }} defaultValue={`Page ${pageNum()}`} />
        </div>
    )
}


export default PageHeader;