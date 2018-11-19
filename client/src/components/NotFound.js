import React from "react";
import { Link } from "react-router-dom";
class NotFound extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card__container">
                <h2 className="card__heading">
                  Looks like you are Lost. Here is a link to get back on track
                  :)
                </h2>
                <Link
                  to="/"
                  className="text-center"
                  style={{ display: "block" }}
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
