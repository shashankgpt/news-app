import React from 'react'
import {PUBLICATION_NAME} from '../../../constant/News';

export default function Header() {
    return (
        <div className="news-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1 text-left">
            <a className="text-muted" href="www">
              Subscribe
            </a>
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="www">
              {PUBLICATION_NAME}
            </a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="text-muted" href="www">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-3"
              >
                <circle cx="10.5" cy="10.5" r="7.5" />
                <line x1="21" y1="21" x2="15.8" y2="15.8" />
              </svg>
            </a>
            <a className="btn btn-sm btn-outline-secondary" href="www">
              Sign up
            </a>
          </div>
        </div>
      </div>
    )
}
