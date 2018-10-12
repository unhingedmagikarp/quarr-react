import React, { Component } from "react";

class AdminLogin extends Component {
  render() {
    return (
      <section className="clean-block clean-form dark">
        <div className="container">
          <div className="block-heading" style={{ marginTop: "80px" }}>
            <h2 className="text-info">Log in</h2>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="form-control item" name="email" type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control item"
                name="password"
                type="password"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block">Log in</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default AdminLogin;
