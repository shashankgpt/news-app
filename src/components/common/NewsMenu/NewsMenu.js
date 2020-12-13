import React from "react";
import { useDispatch} from 'react-redux'
import { category } from "../../../constant/News";
import {fetchTopHeadline} from '../../../store/actions/news.action';
import './news-menu.css';

function NewsMenu() {
  const dispatch = useDispatch();
  const [activatedMenu, setActivatedMenu] = React.useState('all')
  const fetchNews = (categorySelected) => {
    setActivatedMenu(categorySelected);
    dispatch(fetchTopHeadline(categorySelected))
  }
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        {category.map((val) => (
          <button type="button" className={`p-2 text-muted btn btn-link ${activatedMenu===val.key ? 'active-main': ''}`} onClick={() =>fetchNews(val.key) }>{val.value}</button>
        ))}
      </nav>
    </div>
  );
}

export default NewsMenu;
