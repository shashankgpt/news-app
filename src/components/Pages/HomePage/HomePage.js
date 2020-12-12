import React from "react";
import { useDispatch, useSelector} from 'react-redux'
import {fetchTopHeadline} from '../../../store/actions/news.action'
import PageWrapper from "../../common/PageWrapper/PageWrapper";
import Header from "../../common/Header/Header";
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

  return (
    <PageWrapper>
      <Header />
      <NewsMenu />
      <MainHeading news={stateInfo.topHeading} />
      <SubHeading />
      <div className="row text-left">
        <NewsInfo />
        <About />
      </div>
    </PageWrapper>
  );
}

HomePage.propTypes = {};

export default HomePage;
