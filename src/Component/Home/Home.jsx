import React, { useState, useEffect }from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {resume, Freelancer, Lanetwork, surya_infotech_work} from "../../Utils/data";
import "./Home.scss";
function Home() {
    return (
      <div >
          <Header/>
          <div className="main">
    <div className="intro">
      <p>
      Experienced Front-End Developer with a proven history of working in the information technology and services industry. Involved in designing, building and supporting complex software applications for Hospitality, Insurance, Healthcare, and Supply Chain sector.
      </p>
      <ul>
                { resume.map((name,index) =>{
                    return <li key={index}>{name}</li>;
                  })}
            </ul>
    </div>
    <div className="skill">
      <h3><u>Professional Skills</u></h3>
      <div className="d_flex"><h5>Web Technology: </h5> <div className="m_20">ReactJS (Redux and Flux), Node.js, JavaScript, jQuery, Ajax, REST Services, Web Services.</div></div>
      <div className="d_flex"><h5>Web Designing:</h5> <div className="m_20">HTML/HTML5, CSS/CSS3, SASS, Bootstrap.</div></div>
      <div className="d_flex"><h5>Testing: </h5><div className="m_20">Cypress, Jest, Selenium.</div></div>
      <div className="d_flex"><h5>Programming Language:</h5><div className="m_20"> PHP</div></div>
<div className="d_flex"><h5>Database:</h5><div className="m_20"> SQL Server, Oracle, PostgreSQL.</div></div>
<div className="d_flex"><h5>Development Tool:</h5> <div className="m_20">WebStorm, Visual Studio Code.</div></div>
    </div>
    <div className="work_histry">
      <h3><u>Work History</u></h3>
      <div>
        <h5 >Freelancer Front End Developer (July 2020 - Current) </h5>
      <p>Worked on multiple fixed and hourly projects with positive feedback. generated sales near ₹100,000.00 in one year. and finished 2 prototypes.</p>
      <ul>
                { Freelancer.map((name,index) =>{
                    return <li key={index}>{name}</li>;
                  })}
            </ul>
            </div>
            <div>
            <h5 >La Net Team Software Solution - Surat, GJ, Front End Developer   ( December 2017 - May) </h5>
            <p>LaNet Team Software Solution was in the process of implementing
              a marketplace for underwriters and brokers to increase their 
              coverage and contacts as well as help them to stay up to date with latest news and market activities.</p>
            <ul>
                            { Lanetwork.map((name,index) =>{
                                return <li key={index}>{name}</li>;
                              })}
                        </ul>
            </div>
            <div>
              <h5>Surya Infotech, Surat, GJ, Web Developer  (July 2016 - October 2017)</h5>
              <p>This project covers product implementation, integration and support. 
                This project comprised of integration of the booking product with the newly developed property management product.
                 The product allows the owners to manage the reservation, pricing and produce reports and allow the customers to do the reservation.</p>
                 <ul>
                            { surya_infotech_work.map((name,index) =>{
                                return <li key={index}>{name}</li>;
                              })}
                        </ul>
            </div>
    </div>

      <div className="education">
      <h3><u>Education</u></h3>
      <div>Bachelor in Computer Application</div>
<div>Master in Computer Application</div>


      </div>
      </div>
       <Footer/>
      </div>
    );
  }
  
  export default Home;