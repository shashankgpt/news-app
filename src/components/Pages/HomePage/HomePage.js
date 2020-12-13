import React from "react";
import { useDispatch, useSelector} from 'react-redux'
import {fetchTopHeadline} from '../../../store/actions/news.action'
import PageWrapper from "../../common/PageWrapper/PageWrapper";
import MainHeading from "../../common/MainHeading/MainHeading";
import NewsMenu from "../../common/NewsMenu/NewsMenu";
import SubHeading from "../../common/SubHeading/SubHeading";
import NewsInfo from "../../common/NewsInfo/NewsInfo";
import About from '../../common/About/About';
// import { getTopHeadline } from '../../../Services/news.service'

// import PropTypes from 'prop-types'

function HomePage() {
  const dispatch = useDispatch();
  const stateInfo = useSelector(state => state.news)
  console.log(stateInfo);
  React.useEffect(() => {
    dispatch(fetchTopHeadline());
  }, []);

  const move = (val = 'NEXT') => {
    dispatch(fetchTopHeadline(stateInfo.category, val === 'NEXT' ? stateInfo.page + 1 : stateInfo.page -1));
  }

  return (
    <PageWrapper>
      <NewsMenu />
      <MainHeading news={stateInfo.topHeading} />
      <SubHeading news={stateInfo.subHeadingNews} category={stateInfo.category==='all' ? 'Top': stateInfo.category} />
      <div className="row text-left">
        <NewsInfo news={stateInfo.otherNews} />
        <About />
      </div>
      <nav className="blog-pagination">
         <button type="button" className={`mx-4 btn btn-outline-primary ${stateInfo.page===0 ? 'disabled': ''}`} onClick={() =>move('NEXT') }>Older</button>
         <button type="button" className={`mx-4 btn btn-outline-primary ${stateInfo.page===0 ? '': ''}`} onClick={() =>move('NEXT') }>Newer</button>
        </nav>
    </PageWrapper>
  );
}

HomePage.propTypes = {};

export default HomePage;
