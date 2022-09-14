import React, { useEffect } from 'react';
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../store/darkModeReducer';
import darkRainbow from '/home/sarah/Fullstack_Stuff/SeniorPhase/AsyncProject/emotion-flashcards-project/public/darkrainbow.png';
import lightRainbow from '/home/sarah/Fullstack_Stuff/SeniorPhase/AsyncProject/emotion-flashcards-project/public/lightrainbow.png';
// const darkRainbow = require('/home/sarah/Fullstack_Stuff/SeniorPhase/AsyncProject/emotion-flashcards-project/public/darkrainbow.png').default;
// const lightRainbow = require('/home/sarah/Fullstack_Stuff/SeniorPhase/AsyncProject/emotion-flashcards-project/public/lightrainbow.png').default;

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
        document.body.style.backgroundImage = isDarkMode ? `url(${darkRainbow})` : `url(${lightRainbow})`;
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