import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic/';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

const QuestionType = ({ questions, setTitle, renderQuestion }) => {

    return (
        <div className="row my-3">

            <div className="col-7">
                <form >
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupPrepend">
                                <i className="mdi mdi-format-title"></i>
                            </span>
                        </div>

                        <CKEditor
                            editor={BalloonEditor}
                            data="<h5>Edit Title</h5>"
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
                    </div>


                </form>
            </div>
            <div className="col-5 pl-1">
                <select onChange={e => renderQuestion(e.target.value)} className="form-control" style={{ border: "2px dashed #eeeff5" }} >
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


export default QuestionType;