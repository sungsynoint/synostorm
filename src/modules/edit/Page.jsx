import React, { Component } from 'react';
import Dragula from "react-dragula"
import uuid from "uuid/v4"
// import PageHeader from './common/PageHeader';
// import Question from './Question';
import Questions from './Questions';
// import AddQuestion from './components/common/AddQuestion';

class Page extends Component {
    state = {
        questions: [<Questions key={uuid()} id={uuid()} />]
    }

    dragulaDecorator = (PageDrag) => {
        if (PageDrag) {
            let options = {};
            Dragula([PageDrag], options);
        }
    };



    render() {

        const { pages, onClonePage, onDeletePage, pageClone } = this.props;

        return (
            <div>
                <div className="mb-3">
                    <div ref={this.dragulaDecorator}>
                        {pages.map((page, i) =>
                            <div
                                key={page.key}
                                className="card"
                                style={{ border: "2px dashed #eeeff5" }}
                            >

                                <i className="mdi mdi-drag-horizontal text-center" style={{ cursor: "move" }}></i>
                                {this.state.questions.map(question =>
                                    <Questions
                                        page={page}
                                        i={i}
                                        key={page + 1}
                                        question={question}
                                        onClonePage={onClonePage}
                                        pageClone={pageClone}
                                        onDeletePage={onDeletePage} />
                                )}


                            </div>)}

                    </div>
                </div>
            </div>
        );
    }
}

export default Page;