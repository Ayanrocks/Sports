import React from "react";
import AuthNavbar from "./AuthNavbar";
import { getVideos } from "../actions";
import { connect } from "react-redux";
import _ from "lodash";

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.getVideo = this.getVideo.bind(this);
  }
  async componentDidMount() {
    await this.props.getVideos();
    console.log(this.props);
  }

  getVideo() {
    if (this.props.videos) {
      return _.map(this.props.videos.items, val => {
        return (
          <div className="videos__results--item">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${val.id}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              key={val.etag}
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
              {/* <div className="videos__searchbar">
                <input type="text" />
              </div> */}
              <div className="videos__results">{this.getVideo()}</div>
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
