import React from "react";
import { connect } from "react-redux";
import AuthNavbar from "./AuthNavbar";

import { getProfileData } from "../actions";

class Profile extends React.Component {
  async componentDidMount() {
    await this.props.getProfileData();
    console.log(this.props);
  }

  renderContent() {
    if (this.props.profile) {
      return (
        <div className="profile__details">
          <div className="profile__details__name">
            {this.props.profile.name}
          </div>
          <div className="profile__details__item">
            {this.props.profile.email}
          </div>
          <div className="profile__details__item">
            {this.props.profile.gender}
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <section className="profile">
        <AuthNavbar />
        {this.props.profile && (
          <div className="profile__content">
            <div className="profile__photo">
              {this.props.profile.provider === "google" && (
                <img
                  src={this.props.profile.photo + "0"}
                  alt="Profile Photo"
                  title="Profile photo"
                />
              )}
              {this.props.profile.provider === "facebook" && (
                <img
                  src={`http://graph.facebook.com/${
                    this.props.profile.facebookId
                  }/picture?type=large`}
                  alt=""
                />
              )}
            </div>
            {this.renderContent()}
          </div>
        )}
      </section>
    );
  }
}

function mapStateToProps({ profile }) {
  return profile;
}

export default connect(
  mapStateToProps,
  { getProfileData }
)(Profile);
