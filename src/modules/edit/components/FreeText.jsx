import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

const FreeText = () => {
    return (<div className="p-3 my-4">
        <div className="text-area px-5">
            <CKEditor
                editor={InlineEditor}
                config={
                    {
                        placeholder: 'Text Field',
                        language: 'en',
                        heading: {
                            options: [
                                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                                { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3 my-0' },
                                { model: 'paragraph', view: 'p', title: 'Paragraph', class: 'ck-heading_paragraph' },
                            ]
                        },
                        image: {
                            toolbar: [
                                'imageStyle:full',
                                'imageStyle:side',
                                '|',
                                'imageTextAlternative'
                            ]
                        },
                    }
                }
                onInit={editor => {
                    console.log("Init state", editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                    console.log(event, editor);
                }}
                onFocus={(event, editor) => {
                    console.log(event, editor);
                }}
            />
        </div>
    </div>);
}

export default FreeText;