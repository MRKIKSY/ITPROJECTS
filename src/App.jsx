import React from 'react';
import './App.css'; // You can create this CSS file for styling if needed

import { Tooltip } from 'react-tooltip'
import { MdLogin } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { CiCalculator2 } from "react-icons/ci";
import { GiSnake } from "react-icons/gi";
import { TbBoxMultiple0, TbPlaceholder } from "react-icons/tb";
import { LiaHandRockSolid } from "react-icons/lia"
import { FaDiceSix } from "react-icons/fa6";
import { LiaStickyNoteSolid } from "react-icons/lia";
import { RiFileWord2Line } from "react-icons/ri";
import { BsTranslate } from "react-icons/bs";
import { MdManageSearch } from "react-icons/md";
import { MdMovieEdit } from "react-icons/md";
import { FiMousePointer } from "react-icons/fi";
import { FaRegCreditCard } from "react-icons/fa6";
import { GiCubes } from "react-icons/gi";
import { LiaBookSolid } from "react-icons/lia";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

function App() {
  const currentDate = new Date().toLocaleString(); // Get current date and time

  return (
    <div className="App">
      <header className="page-header">
        <h1> SAMUEL AKINOLA ELUYEFA<br></br>
         (MR KIKSY )<br></br>IT PROJECTS</h1>
        <h3> Intermediate proficiency in Javascript, HTML, CSS. Good knowledge of <br></br>
          Frameworks such as Tailwind CSS, Bootstrap, React Js, Next Js.
        </h3>
        <a href="https://github.com/MRKIKSY?tab=repositories" target="_blank" rel="noopener noreferrer">
          GIT HUB REPOSITORY:-<br></br><h8>https://github.com/MRKIKSY?tab=repositories</h8> <br></br>     <a data-tooltip-id="my-tooltip"   data-tooltip-content=" I used NEXT JS,NODE JS, MONGO DB to create this Login USER INTERFACE"> 
        </a>
        <Tooltip id="my-tooltip" />    </a>
      </header>
      <main>
        <strong>FRONT END  PROJECTS</strong>
      </main>

      <div className="icons-container">
        <button className="icon-button">
      
        
        <a href="https://loginpagenext14-6jeq.vercel.app/register" target="_blank" rel="noopener noreferrer">
          Typical Next Js 14.0 Login Page <MdLogin />  <br></br>     <a data-tooltip-id="my-tooltip"   data-tooltip-content=" I used NEXT JS,NODE JS, MONGO DB to create this Login USER INTERFACE"> 
        ◕Tech Stack: NEXT JS, MONGO DB, NODE JS◕</a>
        <Tooltip id="my-tooltip" />    </a>
           
        </button>

        <button className="icon-button">
      
        
        <a href="https://mrkiksychessgame.netlify.app/" target="_blank" rel="noopener noreferrer">
          CHESS <MdLogin />  <br></br>     <a data-tooltip-id="my-tooltip"   data-tooltip-content=" This Chess Game was built with just pure Vanilla Javascript"> 
        ◕Tech Stack: HTML,CSS & JS◕</a>
        <Tooltip id="my-tooltip" />    </a>
           
        </button>
    
    
      
        <button  className="icon-button"  >

		<a href="https://mrkiksyquizapp.netlify.app/" target="_blank" rel="noopener noreferrer">
      Mr Kiksy Quiz App <MdQuiz />   <br></br>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="This Quiz was built with just simple HTML,CSS, & JS. No JS Frameworks or Libraries ">
  ◕Tech Stack: Html,CSS,JS◕
</a>
  </a>
      
        </button>
  
		<button  className="icon-button">
		<a href="https://mrkiksysnakegame.netlify.app/" target="_blank" rel="noopener noreferrer">
      Mr Kiksy Snake Game <GiSnake /><br></br>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="This Snake Game was built with just simple HTML,CSS, & JS. No JS Frameworks or Libraries ">
  ◕Tech Stack: Html,CSS,JS◕
</a>
      </a>
        </button>
        <button className="icon-button">
        <a href="https://temporarydiarynotesapp.vercel.app/" target="_blank" rel="noopener noreferrer">
          Mr Kiksy Temporary  Notes Diary <GrNotes /> <br></br>
          <a data-tooltip-id="my-tooltip" data-tooltip-content="This temporary notes diary was built with just simple HTML,CSS, & JS. No JS Frameworks or Libraries ">
  ◕Tech Stack: REACT JS ◕
</a>
          </a>
        </button>
        <button className="icon-button">
        <a href="https://mrkiksyrolldicesimulator.netlify.app/" target="_blank" rel="noopener noreferrer">
          Mr Kiksy Roll Dice Simulator for Kids  <FaDiceSix />  <br></br>
          <a data-tooltip-id="my-tooltip" data-tooltip-content="This basic project was built with just simple HTML,CSS, & JS. No JS Frameworks or Libraries ">
  ◕Tech Stack: Html,CSS,JS◕
</a>
          </a>
        </button>
        <button className="icon-button">
        <a href="https://mrkiksyloancalculator.netlify.app/" target="_blank" rel="noopener noreferrer">
          Mr Kiksy Typical Loan  App  Calculator <CiCalculator2 /> <br></br>
          
          <a data-tooltip-id="my-tooltip" data-tooltip-content="This INTEREST LOAN calculator was built with just simple HTML,CSS, & JS. No JS Frameworks or Libraries ">
  ◕Tech Stack: Html,CSS,JS◕
</a>
          </a>
        </button>
        <button className="icon-button">
        <a href="https://mrkiksyrockpaperscissors.netlify.app/" target="_blank" rel="noopener noreferrer">
          MR KIKSY ROCK PAPER SCISSORS Kids Game<LiaHandRockSolid />  <br></br>
          
          <a data-tooltip-id="my-tooltip" data-tooltip-content="This KIDS game was built with just  HTML,CSS, & JS. No JS Frameworks or Libraries ">
  ◕Tech Stack: Html,CSS,JS◕
</a>
          </a>
        </button>

        <button className="icon-button">
        <a href="https://mrkiksymultiplicationtable.netlify.app/" target="_blank" rel="noopener noreferrer">
          MR KIKSY Multiplication App for Kids  <TbBoxMultiple0 />  <br></br>
          <a data-tooltip-id="my-tooltip" data-tooltip-content="This Multiplication Kids App was built with just simple HTML,CSS, & JS. No JS Frameworks or Libraries ">
  ◕Tech Stack: Html,CSS,JS◕
</a>
          </a>
        </button>

        <button className="icon-button">
        <a href="https://mrkiksykidswordsscramblegame.netlify.app/" target="_blank" rel="noopener noreferrer">
          MR KIKSY Scramble Kids Game App for Kids  <RiFileWord2Line /> <br></br>
          
          <a data-tooltip-id="my-tooltip" data-tooltip-content="This KIDS GAME was built with just simple HTML,CSS, & JS. No JS Frameworks or Libraries ">
  ◕Tech Stack: Html,CSS,JS◕
</a>
          </a>
        </button>

        <button className="icon-button">
        <a href="https://mrkiksyprojectmanagertodolistapp.netlify.app/" target="_blank" rel="noopener noreferrer">
          MR KIKSY Project Manager To Do List  <LiaStickyNoteSolid /> <br></br>
          
          <a data-tooltip-id="my-tooltip" data-tooltip-content="This PM manager to do list was built with REACT JS. Data saved via Local Storage ">
  ◕Tech Stack: React JS, JSX, ◕
</a>
          </a>
        </button>
		
        <button className="icon-button">
        <a href="https://mrkiksytranslationapplication.netlify.app/" target="_blank" rel="noopener noreferrer">
          MR KIKSY Language App <BsTranslate />   <br></br>
          
          <a data-tooltip-id="my-tooltip" data-tooltip-content="This LANGUAGE TRANSLATION app was built with   HTML,CSS, & JS. An external FETCH API was used">
  ◕Tech Stack: Html,CSS,JS◕
</a>
          </a>
        </button>
        <button className="icon-button">
        <a href="https://searchfilterdesign.netlify.app/" target="_blank" rel="noopener noreferrer">
          Vanilla Javascript Search Filter  <MdManageSearch /> <br></br>
          <a data-tooltip-id="my-tooltip" data-tooltip-content="This Search Filter design was built with just simple HTML,CSS, & JS. No JS Frameworks or Libraries ">
  ◕Tech Stack: Html,CSS,JS◕
</a>
          </a>
        </button>
        <button className="icon-button">
        <a href="https://moviewebsitecssdesign.netlify.app/" target="_blank" rel="noopener noreferrer">
          Frontend  Movie Display CSS Site <MdMovieEdit />  <br></br>
          <a data-tooltip-id="my-tooltip" data-tooltip-content="This front end display  was built with  HTML,CSS, & a fetch API through JS. No JS Frameworks or Libraries ">
  ◕Tech Stack: Html,CSS,JS,◕
</a>
          </a>
        </button>
        <button className="icon-button">
        <a href="https://hovereffectwithcssonly.netlify.app/" target="_blank" rel="noopener noreferrer">
           Frontend CSS  Hover Effect design  <FiMousePointer /><br></br>
           <a data-tooltip-id="my-tooltip" data-tooltip-content="This Hover Effect was built with just simple HTML & CSS. NO JS was used ">
  ◕Tech Stack: Html & CSS◕
</a>
           </a>
        </button>
        <button className="icon-button">
        <a href="https://credircarddesign.netlify.app/" target="_blank" rel="noopener noreferrer">
          Fontend Credit Card design <FaRegCreditCard />   <br></br>
          <a data-tooltip-id="my-tooltip" data-tooltip-content="This Card design was built with just simple HTML & CSS, NO JS or Frameworks or Libraries ">
  ◕Tech Stack: Html & CSS◕
</a>
          </a>
        </button>
        <button className="icon-button">
        <a href="https://mrkiksycubsmashingkidsgame.netlify.app/" target="_blank" rel="noopener noreferrer">
          MR KIKSY Kids Smashing Cube Kids Game <GiCubes />  

          <br></br>
          <a data-tooltip-id="my-tooltip" data-tooltip-content="This KIDS GAME was built with just  HTML,CSS, & JS. No JS Frameworks or Libraries ">
  ◕Tech Stack: Html,CSS,JS◕
</a>
          </a>
      
        </button>

      </div>
<div></div>
      <section>
        <h4> BACK END /  M.E.R.N FULL STACK PROJECTS</h4>
      </section>

      <div className="icons-container">
        <button className="icon-button">
      
        
        <a href="https://frontendbookstore.netlify.app/" target="_blank" rel="noopener noreferrer">
          Online Bookstore <LiaBookSolid/>  <br></br>     <a data-tooltip-id="my-tooltip"   data-tooltip-content=" This  online Bookstore was built with the MERN STACK"> 
        ◕STACK, Frontend- React JS, BackEnd- Node JS, DB:Mongo DB, Server Express ◕</a>
        <Tooltip id="my-tooltip" />    </a>
           
        </button>
    
       
        <button  className="icon-button"  >

		<a href="https://investmentcalculatorreactjs.netlify.app/" target="_blank" rel="noopener noreferrer">
      Investment App <FaMoneyBillTrendUp/>   <br></br>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="This INVESTMENT APP was built with the MERN STACK ">
      ◕STACK, Frontend- React JS, BackEnd- Node JS, DB:Mongo DB, Server Express ◕
</a>
  </a>
      
        </button>
        <button  className="icon-button"  >

<a href="https://mrkiksyhradminsystem.netlify.app/" target="_blank" rel="noopener noreferrer">  HR ADMIN SYSTEM  <MdQuiz />   <br></br>
  <a data-tooltip-id="my-tooltip" data-tooltip-content="This HR ADMIN system  was built  with the MERN STACK ">
  ◕STACK, Frontend- React JS, BackEnd- Node JS, DB:Mongo DB, Server Express ◕
</a>
</a>
  
    </button>

    <button  className="icon-button"  >

<a href="https://mrkiksywebsitedevelopmentclass.vercel.app/" target="_blank" rel="noopener noreferrer">  PERSONAL EDUCATIONAL WEBSITE  <MdQuiz />   <br></br>
  <a data-tooltip-id="my-tooltip" data-tooltip-content="This HR ADMIN system  was built  with the MERN STACK ">
  ◕STACK, Frontend- React JS, BackEnd- Node JS, DB:Mongo DB, Server Express ◕
</a>
</a>
  
    </button>
 
	
        
        </div>
      


      <footer>
        <p> MR KIKSY DATE AND TIME : <br></br> {currentDate}</p>
      </footer>
    </div>
    
  );
  
}


export default App;
