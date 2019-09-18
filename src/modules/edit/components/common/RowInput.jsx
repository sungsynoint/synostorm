import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

class RowInput extends Component {

    render() {
        const { row, onDeleteRow, deleteIcon, } = this.props;
        return (
            <div>
                {row.map((r, i) => {
                    return (
                        <div key={r.key}>
                            <div className="form-row pb-1">
                                <div className="col-1">
                                    <input type="text" name="number" className="form-control p-1" defaultValue={i + 1}></input>
                                </div>
                                <div className="col-9 row_input">
                                    <CKEditor
                                        editor={InlineEditor}
                                        data={r.props.value}
                                        config={
                                            {
                                                placeholder: `${r.props.label}`,
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
                                            console.log(editor, "here editor");
                                            console.log(editor.ui);

                                        }}
                                        onChange={(event, editor) => {
                                            console.log(event, editor);
                                        }}
                                        onBlur={(event, editor) => {
                                            console.log(event, editor);

                                        }}
                                        onFocus={(event, editor) => {
                                            console.log(event, editor);
                                        }}
                                        disabled={r.props.disabled ? r.props.disabled : false}
                                    />


                                </div>
                                <div className="col-2">
                                    <div className="button-list row">
                                        <button className="btn btn-light border" onClick={() => onDeleteRow(r)}>
                                            <i className={`mdi ${deleteIcon}`}></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )

                })}
            </div>

        );
    }
}

export default RowInput;