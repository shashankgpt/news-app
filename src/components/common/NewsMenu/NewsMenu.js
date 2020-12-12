import React from "react";
import { category } from "../../../constant/News";

function NewsMenu() {
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        {category.map((val) => (
          <a className="p-2 text-muted" href={val.key}>
            {val.value}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default NewsMenu;
