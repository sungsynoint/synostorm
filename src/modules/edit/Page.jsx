import React, { Component } from 'react';
import PageHeader from './common/PageHeader';
import Questions from './Questions';



class Page extends Component {
    state = {}

    render() {

        return (
            <div className="mb-3">
                <div className="card" style={{ border: "2px dashed #eeeff5" }}>
                    <PageHeader />
                    <Questions />
                </div>
            </div>
        );
    }
}

export default Page;