import React from 'react';
import Tweet from './Tweet';

  var masterTweetList = [
    {
      img: "http://www.iconsdb.com/icons/preview/gray/twitter-xxl.png",
      title: "OMG",
      content: "He's just not that into you, Margaret."
    },
    {
      img: "https://didatticattivablog.files.wordpress.com/2016/12/bbe0fbe844c72eea190bf8b51b401be0.jpg",
      title: "Why doesn't he like me?",
      content: "Philip is so freaking cute. Why won't he ever notice me, huh ladies?!?"
    },
    {
      img: "http://www.iconsdb.com/icons/preview/gray/twitter-xxl.png",
      title: "Philip",
      content: "What a dreamboat"
    }
  ]

function TweetFeed(props) {
  return (
    <div>
      {masterTweetList.map((tweet, index) =>
        <Tweet img={tweet.img}
               title={tweet.title}
               content={tweet.content}
               key={index}/>
      )}
    </div>
  );
}

export default TweetFeed;
