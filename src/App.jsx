import React from 'react';
import './App.css'; // You can create this CSS file for styling if needed
import { MdLogin } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { FaShoppingBasket } from "react-icons/fa";
import { CiCalculator2 } from "react-icons/ci";
import { GiSnake } from "react-icons/gi";
import { TbBoxMultiple0 } from "react-icons/tb";
import { LiaHandRockSolid } from "react-icons/lia"
import { FaDiceSix } from "react-icons/fa6";


function App() {
  const currentDate = new Date().toLocaleString(); // Get current date and time

  return (
    <div className="App">
      <header className="page-header">
        <h1>MR KIKSY(AKINOLA SAMUEL ELUYEFA)<br></br>
        IT PROJECTS</h1>
      </header>
      <main>
        {/* Your main content goes here */}
      </main>

      <div className="icons-container">
        <button className="icon-button">
        <a href="https://loginpagenext14-6jeq.vercel.app/register" target="_blank" rel="noopener noreferrer">
          Typical Next Js 14.0 Login Page <MdLogin /></a>
        </button>
        <button  className="icon-button">
		<a href="https://mrkiksyquizapp.netlify.app/" target="_blank" rel="noopener noreferrer">
      Mr Kiksy Quiz App <MdQuiz /></a>
        </button>
		<button  className="icon-button">
		<a href="https://mrkiksysnakegame.netlify.app/" target="_blank" rel="noopener noreferrer">
      Mr Kiksy Snake Game <GiSnake /></a>
        </button>
        <button className="icon-button">
        <a href="https://temporarydiarynotesapp.vercel.app/" target="_blank" rel="noopener noreferrer">
          Mr Kiksy Temporary  Notes Diary <GrNotes /></a>
        </button>
        <button className="icon-button">
        <a href="https://mrkiksyrolldicesimulator.netlify.app/" target="_blank" rel="noopener noreferrer">
          Mr Kiksy Roll Dice Simulator for Kids  <FaDiceSix /></a>
        </button>
        <button className="icon-button">
        <a href="https://mrkiksyloancalculator.netlify.app/" target="_blank" rel="noopener noreferrer">
          Mr Kiksy Typical Loan  App  Calculator <CiCalculator2 /></a>
        </button>
        <button className="icon-button">
        <a href="https://mrkiksyrockpaperscissors.netlify.app/" target="_blank" rel="noopener noreferrer">
          MR Kiksy Rock Papers Scissors Kids Game<LiaHandRockSolid /></a>
        </button>

        <button className="icon-button">
        <a href="https://mrkiksymultiplicationtable.netlify.app/" target="_blank" rel="noopener noreferrer">
          MR KIKSY Multiplication App for Kids  <TbBoxMultiple0 /></a>
        </button>
		
		
      </div>

      <footer>
        <p> MR KIKSY DATE AND TIME : <br></br> {currentDate}</p>
      </footer>
    </div>
  );
}

export default App;
