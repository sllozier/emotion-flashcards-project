import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchOneCard } from "../store/singleCardReducer";
import AOS from "aos";

const SingleCard = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [flip, setFlip] = useState(false);

  const card = useSelector((state) => state.card);

  useEffect(() => {
    dispatch(fetchOneCard(params.cardId));
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="single-card-wrapper">
      {card ? (
        <div key={card.cardId} className={`single-card ${flip ? "flip" : ""}`}>
          <div
            data-aos={"zoom-out"}
            className="single-card-front"
            onClick={() => setFlip(!flip)}
          >
            <img src={`/${card.front}`} />
          </div>
          <div className="single-card-back" onClick={() => setFlip(!flip)}>
            <img src={`/${card.back}`} />
          </div>
        </div>
      ) : (
        "Card Not Found"
      )}
    </div>
  );
};

export default SingleCard;
