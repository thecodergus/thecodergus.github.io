import React from "react";

function Footer({ sharedBasicInfo })(
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
            {
              !!sharedBasicInfo && sharedBasicInfo.name
            }
          </small>
        </div>
      </div>
    </div>
  </footer>
)




export default Footer;
