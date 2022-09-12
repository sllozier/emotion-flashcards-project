import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCards } from '../store/cardsReducer';
import { Link } from 'react-router-dom';


const AllCards = () => {
  const dispatch = useDispatch();
    
    
    const cards = useSelector(state => state.cards);


    useEffect(() => {
        dispatch(fetchAllCards());
    }, []);


  return (
    <div id='cards' className='column'>
      {cards
        ? cards.map((card) => (
            <div className='cards' key={`All Cards ${card.id}`}>
              <Link to={`/cards/${card.id}`}>
                <h3>{card.name}</h3>
              </Link>
              <hr/>
            </div>
          ))
      :null}
        
    </div>
   )
};


export default AllCards;