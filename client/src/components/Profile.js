import React from "react";
import { connect } from "react-redux";
import AuthNavbar from "./AuthNavbar";
import { css } from "react-emotion";
import { HashLoader } from "react-spinners";
import HistoryBar from "./HistoryBar";
import { getProfileData, addHistory, removeHistory } from "../actions";

const override = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      loading: true
    };
  }
  async componentDidMount() {
    await this.props.getProfileData();
    if (this.props.history.action === "PUSH") {
      const url = this.props.match.url;
      await this.props.addHistory({ url: url, name: "Leagues" });
    } else {
      await this.props.removeHistory();
    }
    console.log(this.props);
    this.setState(() => {
      return {
        ...this.state,
        loading: false
      };
    });
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
          <div className="profile__buttons">
            <div className="profile__buttons--logout">
              <a href="/logout">Logout</a>
            </div>
            <div className="profile__buttons--delete">
              <button
                onClick={e => {
                  e.preventDefault();
                  this.setState({ modal: true });
                }}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <section className="profile">
        <AuthNavbar />
        <HistoryBar />
        <div className="loader">
          <div className="sweet-loading">
            <HashLoader
              className={override}
              sizeUnit={"px"}
              size={90}
              color={"#E62314"}
              loading={this.state.loading}
            />
          </div>
        </div>

        <div className="container">
          <div className="row">
            {this.props.profile && (
              <div className="profile__content">
                <div className="profile__photo">
                  {this.props.profile.provider === "google" && (
                    <img
                      src={this.props.profile.photo + "0"}
                      alt="Profile"
                      title="Profile photo"
                    />
                  )}
                  {this.props.profile.provider === "facebook" && (
                    <img
                      src={`http://graph.facebook.com/${
                        this.props.profile.facebookId
                      }/picture?type=large`}
                      alt="Profile"
                    />
                  )}
                </div>
                {this.renderContent()}
              </div>
            )}
          </div>
        </div>
        {this.state.modal && (
          <div className="modal">
            <div className="modal__box">
              <div className="container">
                <div className="row">
                  <h1 className="modal__heading">Are You Sure?</h1>
                  <p className="modal__warning">
                    Are you sure you want to delete your account? This action
                    cannot be undone. To continue press the below button, or to
                    cancel press the X mark above.
                  </p>
                  <a
                    href={`/profile/delete/${this.props.profile._id}`}
                    className="modal__button"
                  >
                    Confirm Delete Account?
                  </a>
                </div>
              </div>
              <div
                className="modal__X"
                onClick={() => this.setState({ modal: false })}
              >
                <i className="fa fa-times fa-3x" aria-hidden="true" />
              </div>
            </div>
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
  { getProfileData, addHistory, removeHistory }
)(Profile);
