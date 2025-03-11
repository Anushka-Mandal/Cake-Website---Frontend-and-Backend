import React, { useState } from 'react';
import './ReviewPage.css';
// import 'remixicon/fonts/remixicon.css';

const ReviewPage = () => {
  const [showReviews, setShowReviews] = useState(false);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <header>
      <div className="Review">
        <div className="Review__left">
          <h1>Discover why our customers can’t get enough of our cakes!</h1>
          <p>
            Satisfied customers from various regions trust us for their special celebrations and events.
          </p>
          <p>
            We have made every occasion sweeter, helping our clients create lasting memories while delivering delicious cakes with seamless ordering and on-time delivery.
          </p>
          <button onClick={toggleReviews}>Read our success stories</button>
        </div>

        {showReviews && (
          <div className="Review__right">
            <Card
              imgSrc="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              review="Absolutely delicious! The cakes are not just visually stunning but also melt-in-your-mouth perfection."
              name="Amelia Rose"
            />
            <Card
              imgSrc="https://images.pexels.com/photos/27721756/pexels-photo-27721756/free-photo-of-a-man-in-white-shirt-and-red-headband-standing-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              review="The flavor and texture are spot on – moist, rich, and perfectly sweet. These are the best cakes I’ve tasted!"
              name="Anderson Bennett"
            />
            <Card
              imgSrc="https://images.pexels.com/photos/2098707/pexels-photo-2098707.jpeg?auto=compress&cs=tinysrgb&w=800"
              review="Each bite is a burst of pure joy. You can really feel the love and craftsmanship in every slice."
              name="Evelyn Harper"
            />
          </div>
        )}
      </div>
    </header>
  );
};

const Card = ({ imgSrc, review, name }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="user" />
      <div className="card__content">
        <span><i className="ri-double-quotes-l"></i></span>
        <div className="card__details">
          <p>{review}</p>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
