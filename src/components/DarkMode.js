import React, { useEffect } from 'react';
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { cardsReducer } from '../store/cardsReducer';
import { toggleDarkMode } from '../store/darkModeReducer';
import darkBackground from '/home/sarah/Fullstack_Stuff/SeniorPhase/AsyncProject/emotion-flashcards-project/public/darkbackground.png';
import lightBackground from '/home/sarah/Fullstack_Stuff/SeniorPhase/AsyncProject/emotion-flashcards-project/public/lightbackground.png';


const DarkMode = () => {
    const dispatch = useDispatch();

    const mode = useSelector((state) => state.darkMode);
    const { isDarkMode } = mode;

    const switchDarkMode = () => {
        isDarkMode
        ? dispatch(toggleDarkMode(false))
        : dispatch(toggleDarkMode(true));
    };

    useEffect(() => {
        document.body.style.backgroundImage = isDarkMode ? `url(${darkBackground})` : `url(${lightBackground})`;
        document.body.style.color = isDarkMode ? '#fff' : '#292c35';
    }, [isDarkMode]);

  return (
    <>
      <div id="darkmode">
        <input type="checkbox" className="checkbox" id="checkbox" onChange={switchDarkMode} checked={isDarkMode}/>
        <label htmlFor="checkbox" className="label">
          <BsMoonStarsFill color="white" />
          <BsFillSunFill color="yellow" />
          <div className="ball"></div>
        </label>
      </div>
    </>
  );
}

export default DarkMode;