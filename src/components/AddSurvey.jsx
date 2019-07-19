import React from "react";

const AddSuvey = ({ titleSubmit }) => {
  return (
    <main>
      <section className="w-50 mt-3 form-group actions">
        <form
          className="actions__container"
          id="title_submit"
          onSubmit={titleSubmit}
        >
          <input
            name="title"
            className="input form-control"
            type="text"
            placeholder="Survey title"
          />
          <button className="btn btn-primary btn-sm mt-1">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default AddSuvey;
