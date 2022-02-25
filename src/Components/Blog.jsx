import React from 'react';
import Article from './Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div id='blog' className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening,  We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
     {/*} <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="February 18, 2022" text="Is the 12-3-30 Workout Trend Worth the Hype? " />
</div>*/}
      <div className="gpt3__blog-container_groupB">
      <Article imgUrl={blog02} date=" January 18, 2022" text="Fitness Tech to Watch for in 2022" />
      <Article imgUrl={blog05} date="January 18, 2022" text="Cold Weather Workouts: What to Wear and When You’re Better Off Staying Inside" />

        <Article imgUrl={blog03} date="January 12, 2022" text="The Last Word: Do You Really Need to Take 10,000 Steps a Day?" />
        <Article imgUrl={blog04} date="January 10, 2022" text="What Is Carb Timing and Can It Boost Your Workout Performance?" />
      </div>
    </div>
  </div>
);

export default Blog;