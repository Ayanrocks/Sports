import React from "react";
import AuthNavbar from "./AuthNavbar";
import { getVideos } from "../actions";
import { connect } from "react-redux";
import _ from "lodash";

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.getVideo = this.getVideo.bind(this);
    this.selectOption = this.selectOption.bind(this);

    this.state = {
      active: null,
      playing: null
    };
  }
  async componentDidMount() {
    await this.props.getVideos("football liga");
    console.log(this.props);
  }

  async selectOption(name) {
    const value = name;
    console.log(value);
    this.setState(() => ({
      ...this.state,
      active: value
    }));
    await this.props.getVideos(value);
  }

  getVideo() {
    if (this.props.videos) {
      return _.map(this.props.videos.items, val => {
        return (
          <div
            className="videos__results--item"
            key={val.etag}
            onClick={e => {
              this.setState({ playing: val.id.videoId });
            }}
          >
            <div
              onClick={() => {
                this.setState({ playing: val.id.videoId });
              }}
            />
            <iframe
              width="460"
              height="315"
              src={`https://www.youtube.com/embed/${val.id.videoId}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              key={val.etag}
              className={
                this.state.playing === val.id.videoId
                  ? "margin--sm now-playing"
                  : "margin--sm"
              }
              onClick={val => {
                console.log(val.id);
                this.setState({ playing: val.id.videoId });
              }}
            />
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <AuthNavbar />
        <div className="container">
          <div className="row">
            <div className="videos">
              <div className="video__trending">
                <div className="card">
                  <div className="card__content flex--start">
                    <div
                      className={
                        this.state.active === "Série A"
                          ? "card--round active-option"
                          : "card--round"
                      }
                      onClick={() => this.selectOption("Série A")}
                    >
                      <h2 className="card__heading">Série A</h2>
                    </div>
                    <div
                      className={
                        this.state.active === "Premier League"
                          ? "card--round active-option"
                          : "card--round"
                      }
                      onClick={() => this.selectOption("Premier League")}
                    >
                      <h2 className="card__heading">Premier League</h2>
                    </div>
                    <div
                      className={
                        this.state.active === "European Championship"
                          ? "card--round active-option"
                          : "card--round"
                      }
                      onClick={() => this.selectOption("European Championship")}
                    >
                      <h2 className="card__heading">European Championship</h2>
                    </div>
                    <div
                      className={
                        this.state.active === "Championship elc"
                          ? "card--round active-option"
                          : "card--round"
                      }
                      onClick={() => this.selectOption("Championship elc")}
                    >
                      <h2 className="card__heading">Championship</h2>
                    </div>
                    <div
                      className={
                        this.state.active === "UEFA Champions League"
                          ? "card--round active-option"
                          : "card--round"
                      }
                      onClick={() => this.selectOption("UEFA Champions League")}
                    >
                      <h2 className="card__heading">UEFA Champions League</h2>
                    </div>
                    <div
                      className={
                        this.state.active === "Eredivisie"
                          ? "card--round active-option"
                          : "card--round"
                      }
                      onClick={() => this.selectOption("Eredivisie")}
                    >
                      <h2 className="card__heading">Eredivisie</h2>
                    </div>
                    <div
                      className={
                        this.state.active === "Ligue 1"
                          ? "card--round active-option"
                          : "card--round"
                      }
                      onClick={() => this.selectOption("Ligue 1")}
                    >
                      <h2 className="card__heading">Ligue 1</h2>
                    </div>
                    <div
                      className={
                        this.state.active === "Bundesliga"
                          ? "card--round active-option"
                          : "card--round"
                      }
                      onClick={() => this.selectOption("Bundesliga")}
                    >
                      <h2 className="card__heading">Bundesliga</h2>
                    </div>
                    <div
                      className={
                        this.state.active === "Primeira Liga"
                          ? "card--round active-option"
                          : "card--round"
                      }
                      onClick={() => this.selectOption("Primeira Liga")}
                    >
                      <h2 className="card__heading">Primeira Liga</h2>
                    </div>
                    <div
                      className={
                        this.state.active === "Primera Division"
                          ? "card--round active-option"
                          : "card--round"
                      }
                      onClick={() => this.selectOption("Primera Division")}
                    >
                      <h2 className="card__heading">Primera Division</h2>
                    </div>
                    <div
                      className={
                        this.state.active === "FIFA World Cup"
                          ? "card--round active-option"
                          : "card--round"
                      }
                      onClick={() => this.selectOption("FIFA World Cup")}
                    >
                      <h2 className="card__heading">FIFA World Cup</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="videos__results flex--start">
                {this.getVideo()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ videos }) {
  return videos;
}

export default connect(
  mapStateToProps,
  { getVideos }
)(Videos);
