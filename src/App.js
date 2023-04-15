import './App.css';
import { useState } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import pfp from './images/pfp.JPG';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme}>
      <div className="background centered">
        <input type='checkbox' id="switch" className="check" onClick={() => setTheme(theme === "light" ? "dark" : "light")}/>
        <label className="toggle" htmlFor="switch">
        </label>
        <div className="centered-col full">
          <div className="centered-row pad-all-5">
            <img src={pfp} className="pfp rotateGrow"/>
            <div>
              <h1 className="text title">Hello</h1>
              <h3 className="text fadeIn-3 margin-top-btm-0">Nice To Meet You, My Name Is</h3>
              <h2 className="slideUp font-md anim-text margin-top-btm-0">Dylan Rhinehart</h2>
              <h4 className="text growUp font-sm margin-top-btm-0">FullStack Software Engineer 💻</h4>
            </div>
          </div>
          <div className="btm-rgt">
              <a href="https://github.com/Shadowfear36" className="link"><BsGithub size={35}/></a>
              <a href="https://www.linkedin.com/in/dylan-rhinehart/" className="link"><BsLinkedin size={35}/></a>
              <a href="mailto:dylanrhinehart@gmail.com" className="link"><MdEmail size={40}/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
