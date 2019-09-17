import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

const QuestionOption = ({ questions, getOption }) => {
    return (
        <div className="row">
            <div className="col-7">
                <div className="page_title">
                    <CKEditor
                        editor={InlineEditor}
                        config={
                            {
                                placeholder: 'Question title',
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
            </div>
            <div className="col-5">
                <select onChange={e => getOption(e.target.value)} className="form-control" style={{ border: "2px dashed #eeeff5" }} >
                    <option>Question Type:</option>
                    {questions.map(question => {

                        return (
                            <optgroup label={question.type} key={question.type}>
                                {question.question.map(option => {
                                    return <option value={option.label} key={option.label}>{option.label}</option>
                                })}
                            </optgroup>
                        )
                    })}
                </select>
            </div>

        </div>
    )


}

export default QuestionOption;