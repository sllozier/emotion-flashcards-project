import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCards } from "../store/cardsReducer";
import { Link } from "react-router-dom";

const AllCards = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("none");
  const [search, setSearch] = useState("");

  const sortCards = (cardsArray, sortOption) => {
    switch (sortOption) {
      case "red":
        return [...cardsArray]
          .sort((a, b) => (a.color > b.color ? 1 : a.color < b.color ? -1 : 0))
          .filter((card) => card.color.toLowerCase().includes("red"));
      case "yellow":
        return [...cardsArray]
          .sort((a, b) => (a.color > b.color ? 1 : a.color < b.color ? -1 : 0))
          .filter((card) => card.color.toLowerCase().includes("yellow"));
      case "purple":
        return [...cardsArray]
          .sort((a, b) => (a.color > b.color ? 1 : a.color < b.color ? -1 : 0))
          .filter((card) => card.color.toLowerCase().includes("purple"));
      case "aqua":
        return [...cardsArray]
          .sort((a, b) => (a.color > b.color ? 1 : a.color < b.color ? -1 : 0))
          .filter((card) => card.color.toLowerCase().includes("aqua"));
      case "none":
        return cardsArray.filter((card) =>
          card.name.toLowerCase().includes(search.toLowerCase())
        );
    }
  };

  const cardsList = sortCards(
    useSelector((state) => state.cards || []),
    sort
  );

  const handleOptions = (event) => {
    setSort(event.target.value);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    dispatch(fetchAllCards());
  }, [sort]);

  return (
    <>
      <div id="filter-wrap">
        <label htmlFor="filter-options" className="filter-label">
          Sort Cards:
        </label>
        <select
          name="filter-options"
          className="filter-options"
          onChange={handleOptions}
          defaultValue="none"
        >
          <option value="red">View Red Cards</option>
          <option value="yellow">View Yellow Cards</option>
          <option value="purple">View Purple Cards</option>
          <option value="aqua">View Aqua Cards</option>
          <option value="none">View All</option>
        </select>
        <input
          className="search-input"
          placeholder="search for card by name"
          value={search}
          onChange={handleChange}
        />
      </div>
      <div className="cards">
        <div className="wrapper">
          {cardsList
            ? cardsList.map((card) => (
                <div className="card-wrapper" key={`${card.id}`}>
                  <Link to={`/cards/${card.id}`}>
                    <img src={`/${card.front}`} />
                  </Link>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default AllCards;
