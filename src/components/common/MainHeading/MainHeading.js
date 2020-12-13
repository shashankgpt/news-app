import React from 'react'
import PropTypes from 'prop-types'
import './main-heading.css';

function MainHeading({news}) {
    return (
        <div className="row jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0 text-left">
    <h1 className="display-4 font-italic">{news.title}</h1>
    <p className="lead my-3">{news.description}</p>
          <p className="lead mb-0"><a href={news.url} className="text-white font-weight-bold">Continue reading...</a></p>
        </div>
        <div className="col-md-6 px-0 text-left">
        <img className="card-img-right flex-auto d-none d-md-block main-heading-img" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src={news.urlToImage} data-holder-rendered="true" />
          </div>
      </div>
    )
}

MainHeading.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired
  })
};

MainHeading.defaultProps = {
  news: {
    title: '',
    description: '',
    urlToImage:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1764137641b%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1764137641b%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
  }
};

export default MainHeading
