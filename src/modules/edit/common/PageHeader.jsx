import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic/';


const PageHeader = ({ page, i, onClonePage, onDeletePage }) => {


    function getCopy() {
        return page.label ? page.label : ""
    }

    return (
        <div className="card-body pb-0" >

            {/* <CKEditor
                editor={ClassicEditor}
                data={`<p>Edit Title</p>`}
                onInit={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
                onBlur={editor => {
                    console.log('Blur.', editor);
                }}
                onFocus={editor => {
                    console.log('Focus.', editor);
                }}
            />
 */}

            <div className="card-widgets">
                <a data-toggle="collapse"
                    href={`#page${page.key}`}
                    role="button"
                    aria-expanded="false"
                    aria-controls={`page${page.key}`}
                >
                    <i className="mdi mdi-minus p-0 mx-2"></i>
                </a>
                <a onClick={() => onClonePage(page.key)}>
                    <i className="mdi mdi-content-copy btn p-0 mx-1"></i>
                </a>
                <a onClick={() => onDeletePage(page.key)}>
                    <i className="mdi mdi-close btn p-0 mx-2"></i>
                </a>
            </div>

            <div className="card-title">
                <h5 className="text-dark mt-0 mb-0"> {`Page ${i + 1} ${getCopy()}`}</h5>
                <span className="text-muted" style={{ fontSize: "11px" }}>{page.key.toString().substring(0, 6)}</span>
            </div>

        </div>
    )
}


export default PageHeader;