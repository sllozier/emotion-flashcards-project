import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCards } from '../store/cardsReducer';
import { Link } from 'react-router-dom';
import AOS from 'aos';


const AllCards = () => {
  const dispatch = useDispatch();
  const [ sort, setSort ] = useState('none');
  const [ search, setSearch ] = useState('');
  

  const sortCards = (cardsArray, sortOption) => {
    switch(sortOption) {
      case 'red':
        return [...cardsArray].sort((a, b) => a.color > b.color ? 1 : a.color < b.color ? -1 : 0)
        .filter(card => card.color.toLowerCase().includes('red'));
      case 'yellow':
        return [...cardsArray].sort((a, b) => a.color > b.color ? 1 : a.color < b.color ? -1 : 0)
        .filter(card => card.color.toLowerCase().includes('yellow'));
      case 'purple':
        return [...cardsArray].sort((a, b) => a.color > b.color ? 1 : a.color < b.color ? -1 : 0)
        .filter(card => card.color.toLowerCase().includes('purple'));
      case 'aqua':
        return [...cardsArray].sort((a, b) => a.color > b.color ? 1 : a.color < b.color ? -1 : 0)
        .filter(card => card.color.toLowerCase().includes('aqua'));
      case 'none':
        return cardsArray.filter(card => card.name.toLowerCase().includes(search.toLowerCase()));
        
    }
  }

  
    
    const cardsList = sortCards(useSelector(state => state.cards || []), sort);

    const handleOptions = event => {
      setSort(event.target.value);
    }

    const handleChange = event => {
      setSearch(event.target.value)
    }
    useEffect(() => {
        dispatch(fetchAllCards());
    }, [sort]);

    useEffect(() => {
      AOS.init({
        duration: 2000,
      });
    }, []);

   
    

  return (
    <>
        <label htmlFor='filter-options'>Filter cards by:</label>
        <select name='filter-options' onChange={handleOptions} defaultValue='none'>
                <option value='red'>Red</option>
                <option value='yellow'>Yellow</option>
                <option value='purple'>Purple</option>
                <option value='aqua'>Aqua</option>
                <option value='none'>No sorting</option>
              </select>
              <input placeholder='search for card by name' value={search} onChange={handleChange}/>
        <div className='cards'>
      <div className='wrapper'>
      {cardsList
        ? cardsList.map((card) => (
          <div className='card-wrapper' key={`${card.id}`}>
            <div className='card'>
              <Link to={`/cards/${card.id}`}>
                <img data-aos={'zoom-in'} src={`/${card.front}`}/>
              </Link>
            </div>
            </div>
          ))
      :null}
      </div>
      </div>
    
    </>
   )
};


export default AllCards;