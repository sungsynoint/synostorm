import React from "react";

const AddSuvey = ({ titleSubmit }) => {
  return (
    <main className="app-search">
      <section className="w-50 mt-3 form-group actions">
        <form
          className="actions__container"
          id="title_submit"
          onSubmit={titleSubmit}
        >
          <div className="input-group">
            <span className="mdi mdi-christianity"></span>
            <input
              name="title"
              className="input form-control"
              type="text"
              placeholder="Survey title"
            />
            <div className="input-group-append">
              <button className="btn btn-primary">Create</button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default AddSuvey;
