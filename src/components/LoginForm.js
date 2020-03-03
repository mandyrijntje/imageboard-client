import React from "react";

export default function LoginForm(props) {
  const handleChange = e => {
    props.onChange(e);
  };
  return (
    //you write onSubmit WITHIN the form component!!!!!!!!!!!!!!!!!!
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          id="text"
          aria-describedby="text"
          value={props.values.email}
          placeholder="email"
          onChange={handleChange}
          name="email"
        />
        <small id="title" className="form-text text-muted">
          Your email please.
        </small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          aria-describedby="password"
          value={props.values.password}
          placeholder="password"
          onChange={handleChange}
          name="password"
        />
        <small id="password" className="form-text text-muted">
          Your password please.
        </small>
      </div>
      <button className="btn btn-primary">Login</button>
    </form>
  );
}
