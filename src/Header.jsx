import React from "react";

function Header({ content, img }) {
  return (
    <>
      <header
        className="masthead"
        style={{ backgroundImage: `url(${img.link})` }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                {content.length === "0" ? (
                  <>
                    <h1>Clean Blog</h1>
                    <span className="subheading">
                      A Blog Theme by Start Bootstrap
                    </span>
                  </>
                ) : (
                  <>
                    <h1>{content.title}</h1>
                    <span className="subheading">
                      {content.author}, {content.createdAt}, {content.description}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
