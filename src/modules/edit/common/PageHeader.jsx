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

            <div className="float-left">
                <h4 className="text-muted mb-0 mt-0">
                    {`Page ${i + 1} ${getCopy()}`}
                </h4>
                <span className="text-muted" style={{ fontSize: "11px" }}>{page.key.toString().substring(0, 6)}</span>
            </div>


            <div class="card-widgets">
                <a data-toggle="collapse" href={`#${page.key}`} role="button" aria-expanded="false" aria-controls={page.key}><i class="mdi mdi-minus"></i></a>
                <a role="button" onClick={() => onClonePage(page.key)}><i class="mdi mdi-content-copy mx-2"></i></a>
                <a role="button" onClick={() => onDeletePage(page.key)}><i class="mdi mdi-close"></i></a>
            </div>

        </div>
    )
}


export default PageHeader;