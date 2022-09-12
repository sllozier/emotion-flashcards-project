import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchOneCard } from '../store/singleCardReducer';





const SingleCard = () => {
    const dispatch = useDispatch();
    const params = useParams();

    
    

    const  card = useSelector(state =>  state.card);

    console.log('ISCARD?', card);
    console.log('PARAMS', params)
     

    useEffect(() => {
        dispatch(fetchOneCard(params.cardId));
    }, []);


    
 //^^^^ This is setting campusId to null in the database but I can't get the browser to update.
 //I am moving on to other areas of the project so I don't waste time here FOREVERRR...
 //I looked at creating a useState but couldn't quite get it going.    
    
    

    

    return (
        <div key={card.cardId} id='single-campus' className='column'>
            
            { card ?
                    <div id='single-campus-detail' className='row'>
                        {/* <img src={`/${card.front}`}/> */}
                        <div className='column mr1'>
                        <h2>{card.name}</h2>
                        </div>
                    </div>
                : 'Card Not Found'}
                        <hr/>
        </div>
      );
    };
    
    export default SingleCard;
