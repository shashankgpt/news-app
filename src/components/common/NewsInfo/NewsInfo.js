import React from "react";
import PropTypes from 'prop-types'

function NewsInfo({news}) {
  return (
      <div className="col-md-8 blog-main">
        <h3 className="pb-3 mb-4 font-italic border-bottom">
          US
        </h3>
        {news.map((val) => (        <div className="blog-post">
          <h2 className="blog-post-title">{val.title}</h2>
          <p className="blog-post-meta">
          {val.publishedAt}
          </p>

          <p>
          {val.description}
          </p>
          <hr />
          <p>
            <a href={val.url}>{val.content}</a>
          </p>
          
        </div>))}


        <nav className="blog-pagination">
          <a className="btn btn-outline-primary" href="w">
            Older
          </a>
          <a className="btn btn-outline-secondary disabled" href="w">
            Newer
          </a>
        </nav>
      </div>
  );
}

NewsInfo.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      urlToImage: PropTypes.string.isRequired,
      publishedAt:PropTypes.string.isRequired
    })
  ),
};

NewsInfo.defaultProps = {
  news: [
    {
      title: "",
      description: "",
      urlToImage:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1764137641b%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1764137641b%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    },
    {
      title: "",
      description: "",
      urlToImage:
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1764137641b%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1764137641b%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    },
  ],
};
export default NewsInfo;
