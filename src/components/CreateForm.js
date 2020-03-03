import React from "react";

export default function CreateForm(props) {
  const handleChange = e => {
    props.onChange(e);
  };
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="title"
          value={props.values.title}
          placeholder="title"
          onChange={handleChange}
          name="title"
        />
        <small id="title" className="form-text text-muted">
          Your image title should be any name, preferably that of your image.
        </small>
      </div>
      <div className="form-group">
        <label>Image URL</label>
        <input
          type="text"
          className="form-control"
          id="url"
          aria-describedby="url"
          value={props.values.url}
          placeholder="url"
          onChange={handleChange}
          name="url"
        />
        <small id="url" className="form-text text-muted">
          Your image URL should be any url, preferably the url of your image.
        </small>
      </div>
      <button className="btn btn-primary">Display</button>
    </form>
  );
}
