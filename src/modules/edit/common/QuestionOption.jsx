import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

const QuestionOption = ({ questions, getOption }) => {
    return (
        <div className="row">
            <div className="col-6">
                <CKEditor
                    editor={InlineEditor}
                    data="<p>Question title</p>"
                    className="w-100"
                    config={
                        {
                            toolbar: ['Heading', 'Link', 'bold', 'italic', 'imageUpload'],
                            removePlugins: ['bulletedList', 'numberedList', 'blockQuote'],
                            image: {
                                toolbar: [
                                    'imageStyle:full',
                                    'imageStyle:side',
                                    '|',
                                    'imageTextAlternative'
                                ]
                            }
                        }
                    }
                    onInit={editor => {
                        // You can store the "editor" and use when it is ne eded.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
            <div className="col-6">
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