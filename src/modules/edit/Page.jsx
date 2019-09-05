import React, { Component } from 'react';
import Dragula from "react-dragula"
import uuid from "uuid/v4"
import PageHeader from './common/PageHeader';
import Question from './Question';
import AddQuestion from './components/common/AddQuestion';

class Page extends Component {
    state = {
        questions: [<Question key={uuid()} id={uuid()} />]
    }

    dragulaDecorator = (PageDrag) => {
        if (PageDrag) {
            let options = {};
            Dragula([PageDrag], options);
        }
    };


    render() {
        const onAddQuestion = () => {
            const questions = [...this.state.questions]
            const question = <Question key={uuid()} id={uuid()} questionState={this.state.questions} />
            questions.push(question)
            this.setState({ questions })
        }

        const { pages, onClonePage, onDeletePage, } = this.props;

        console.log(this.state.questions)

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
                                <PageHeader
                                    page={page}
                                    i={i}
                                    onClonePage={onClonePage}
                                    onDeletePage={onDeletePage}
                                />
                                <div id={this.props.id} className="collapse show">
                                    <div className="card-body px-5 pt-0">
                                        {this.state.questions}
                                    </div>
                                    <div className="mt-1">

                                    </div>
                                </div>
                                <AddQuestion onAddQuestion={onAddQuestion} />
                            </div>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;