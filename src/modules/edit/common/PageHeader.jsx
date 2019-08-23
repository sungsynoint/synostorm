import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic/';


const PageHeader = ({ page, i, onClonePage, onDeletePage }) => {
    return (
        <div className="card-body pb-0">

            <CKEditor
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


            <div className="button-list float-right">
                <button className="btn btn-secondary btn-sm" onClick={() => onClonePage(page.key)}>Clone</button>
                <button className="btn btn-secondary btn-sm" onClick={() => onDeletePage(page.key)}>Delete</button>
            </div>
            <textarea className="h4 w-50 text-dark" style={{ resize: "none", border: "0px", height: "27px" }} defaultValue={`Page ${i + 1}`} />
        </div>
    )
}


export default PageHeader;