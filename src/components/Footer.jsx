import React, { Component } from "react";

class Footer extends Component {
  render() {
    // if (this.props.sharedBasicInfo) {
    //   var networks = this.props.sharedBasicInfo.social.map(function (network) {
    //     return (
    //       <span key={network.name} className="m-4">
    //         <a href={network.url} className="fa-2x" target="_blank" rel="noopener noreferrer">
    //           {/*
    //             Lista de icones
    //             https://gist.github.com/mohamdio/982653e3a8ae35f892f13c5ef0ef9b58 
    //           */}
    //           <i className={network.class}></i>
    //         </a>
    //       </span>
    //     );
    //   });
    // }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links fa-3x">
            <span key="github" className="m-4">
              <a href="https://github.com/thelostgus" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </span>
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
