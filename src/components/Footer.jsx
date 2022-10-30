import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} className="fa-2x fas fa-spin" target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "white" }}>
            <span>
              {this.props.resumeBasicInfo ? this.props.resumeBasicInfo.section_name.contact : "???"}
            </span>
          </h1>

          <div className="social-links fa-3x">
            {networks}
            </div>
          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo ? this.props.sharedBasicInfo.name : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
