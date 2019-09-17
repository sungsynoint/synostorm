import React from 'react';


const TextArea = (props) => {
    return (
        <div>
            {props.textarea.map(area => {

                return (
                    <div className="p-3 my-2" key={area.key}>
                        <div className="text-area px-5">
                            <div className="col-12 d-flex justify-content-center">
                                <input type="text" className="form-control w-50 text-center" placeholder="Answer text" disabled />
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default TextArea;