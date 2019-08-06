import React from 'react';
import CustomCarousel from './CustomCarousel';
import FeaturedArticle from './FeaturedArticles';
import RespNav from '../RespNavbar/RespNav';
import MonthlyIssue from './MonthlyIssue'
import '../Styles/Homepage.scss'

export default function HomePage() {
  return (
    <div>
      <RespNav />
      <CustomCarousel />
      <div className="grid-v">
        <div className="left-gw">
          <span className="section-title">
            Popular Posts
          </span>
          <FeaturedArticle />
          <FeaturedArticle />
          <FeaturedArticle />
        </div>
        <div className="right-gw">
          <MonthlyIssue />
        </div>
      </div>
      <style jsx>
      {`
      .grid-v{
        display:grid;
        grid-template-columns: 2fr 1fr;
        background: transparent;
      }
      `}
      </style>
    </div>
  );
}
