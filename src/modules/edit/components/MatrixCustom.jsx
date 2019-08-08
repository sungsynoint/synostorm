import React from 'react';

const MatixCustom = () => {

    const onSelect = (e) => {
        e.preventDefault()
    }

    // const FancyButton = (() => (

    //     <React.Fragment>
    //         {this.state.row.map(r => <button className="FancyButton">
    //             {r.label}
    //         </button>)}
    //     </React.Fragment>

    // ));


    const onQuickAdd = (value) => {
        const row = this.state.row;

        console.log(value, row)
    }


    return (<div className="row">
        <div className="col-7 pr-3">
            <div>
                {/* <FancyButton /> */}
            </div>
            <form onClick={onSelect}>
                <div className="form-row pb-1">
                    <div className="col-1">
                        <input type="text" name="number" className="form-control p-1"></input>
                    </div>
                    <div className="col-9">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Enter row label" />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="button-list row">
                            <button className="btn btn-light border">
                                <i className="mdi mdi-table-row-plus-after"></i>
                            </button>
                            <button className="btn btn-light border">
                                <i className="mdi mdi-table-row-remove"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div className="col-5">
            <div className="row">
                <div className="col-12 pl-1">
                    <div className="form-group mb-3">
                        <textarea className="form-control" onChange={(e) => onQuickAdd(e.target.value)} rows="3" placeholder="Quick add..." />
                    </div>
                </div>
            </div>
        </div>

    </div>);
}


export default MatixCustom;