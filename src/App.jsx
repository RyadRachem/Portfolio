import imj from "./assets/Screenshot 2025-06-27 185002.png"
import imj2 from "./assets/Screenshot 2025-07-03 183559.png"
import imj3 from "./assets/icons8-html-5.svg"
import imj4 from "./assets/1174949_js_react js_logo_react_react native_icon.svg"
import imj5 from "./assets/icons8-javascript.svg"
import imj6 from "./assets/icons8-nodejs.svg"
import imj7 from "./assets/icons8-mongo-db-32.png"
import imj8 from "./assets/Screenshot 2025-07-05 184828.png"
import imjc1 from "./assets/Capture d’écran (175).png"
import imjc2 from "./assets/Capture d’écran (176).png"
import imjc3 from "./assets/Capture d’écran (177).png"
import imjc4 from "./assets/Capture d’écran (178).png"
import imjc5 from "./assets/Capture d’écran (179).png"
import imjc6 from "./assets/Capture d’écran (180).png"
import imjb1 from "./assets/Capture d’écran (181).png"
import imjb2 from "./assets/Capture d’écran (182).png"
import imjb3 from "./assets/Capture d’écran (183).png"
import imjb4 from "./assets/Capture d’écran (184).png"
import imjb5 from "./assets/Capture d’écran (185).png"
import imjb6 from "./assets/Capture d’écran (186).png"
import imjb7 from "./assets/Capture d’écran (187).png"

import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react"
import { motion  } from "framer-motion";


function App() {

  const [expand,setExpand] = useState(null)
  const [expand2,setExpand2] = useState(null)
  const [expand3,setExpand3] = useState(null)
  const [zindex,setZindex] = useState(100)
  const [zindex2,setZindex2] = useState(100)
  const [zindex3,setZindex3] = useState(100)
  const [imaj,setImaj] = useState(true)

  return (
    
      <div className="main">
        
        <div className="grid-container">

        <div className='box1' style={{ gridArea: "box-upBar"}}>
          <p>
            <span className="intro" style={{ fontFamily: "'Bonheur Royale', cursive"}}>Rachem Mohamed Ryad</span> 
            </p>
        </div>

        <motion.div
  layout
  className={`box2 ${expand ? "expanded" : ""}`}
  style={{ gridArea: expand ? "1 / 1 / 7 / 4" : "box-exp", zIndex: zindex }}
  onClick={() => {
    if (!expand) {
      setExpand(true);
      setZindex(1000);
    } else {
      setExpand(false);
      setTimeout(() => setZindex(100), 400);
    }
  }}
>
  <i className="bi bi-body-text ci"></i>
  {!expand ? (
    <>
      <i className="bi bi-arrow-up-right ar"></i>
      
      <p className="pr">
        Want to see my Projects? <br /> Here’s a glimpse of what I’ve been working on
      </p>
    </>
  ) : (
    <>
      <i className="bi bi-arrow-down-left ar"></i>
      <div className="project-expand-wrapper">
        <div className="project-showcase">
          
          <div className="picts-horizontal">
              <img className="slide-img" src={imjc1} alt="" />
              <img className="slide-img" src={imjc2} alt="" />
              <img className="slide-img" src={imjc3} alt="" />
              <img className="slide-img" src={imjc4} alt="" />
              <img className="slide-img" src={imjc5} alt="" />
              <img className="slide-img" src={imjc6} alt="" />
          </div>
          <div className="tex">
          <h1>ATHAR</h1>
          <br />
          <p className="textos">Athar is a collaborative platform designed to preserve and celebrate Algeria’s rich cultural heritage. It serves as a hub where experts in fields such as history, architecture, archaeology, and more can come together to share knowledge, exchange ideas, and work collaboratively on heritage-related projects. <br />

          At the same time, users and enthusiasts can explore the platform to discover Algeria's historical treasures, learn about its monuments, traditions, and artifacts, and deepen their understanding of the country's cultural identity. <br />

          Whether you're a professional looking to collaborate with peers, or someone passionate about learning more about Algeria’s patrimony, Athar bridges the gap between knowledge and culture.</p>
          </div>

        </div>
        <div className="project-showcase">
          
          <div className="picts-horizontal">
              <img className="slide-img" src={imjb1} alt="" />
              <img className="slide-img" src={imjb2} alt="" />
              <img className="slide-img" src={imjb3} alt="" />
              <img className="slide-img" src={imjb4} alt="" />
              <img className="slide-img" src={imjb5} alt="" />
              <img className="slide-img" src={imjb6} alt="" />
              <img className="slide-img" src={imjb7} alt="" />
          </div>
          <div className="tex">
          <h1>Elmore CTF</h1>
          <br />
          <p className="textos">Elmore CTF is a dynamic online platform dedicated to cybersecurity challenges and Capture The Flag  competitions. Designed for beginners and seasoned hackers alike, it offers a wide variety of problems in web exploitation, cryptography, reverse engineering, binary exploitation, and more. <br />Whether you're sharpening your hacking skills, learning how real-world vulnerabilities work, or just having fun solving puzzles, Elmore CTF provides a hands-on environment where you can test your knowledge, learn from others, and grow within the cybersecurity community.</p>
          </div>

        </div>
      </div>
    </>
  )}
</motion.div>


        <div className='box3' style={{ gridArea: "box-image",backgroundImage: `url(${imj})`}}></div>

        <div className='box4' style={{ gridArea: "box-skills"}}>
          
        <p className="beeeeeeep">Technical Skills</p>

          <div className="el">
            <p>React</p>
            <img src={imj4} alt="" style={{width:"45px"}}/>
            </div>

          <div className="el">
            <p>Html/Css</p>        
            <img src={imj3} alt="" style={{width:"45px"}}/>
          </div>

          <div className="el">
            <p>Java Script</p>
            <img src={imj5} alt="" style={{width:"45px"}}/>
          </div>

          <div className="el">
            <p>Node JS + Express</p>
            <img src={imj6} alt="" style={{width:"45px"}}/>
          </div>

          <div className="el">
            <p>Mongo db</p>
            <img src={imj7} alt="" style={{width:"45px"}}/>
          </div>
        </div>

         <motion.div
          layout
          className={`box5 ${expand3 ? "expanded" : ""}`}
          style={{
          gridArea: expand3 ? "1 / 1 / 7 / 4" : "box-projects",
          zIndex: zindex3,
          ...(imaj
            ? { backgroundImage: `url(${imj2})` }
            : { backgroundColor: "#bbf4c1" }
          )
          }}
          onClick={() => {if (!expand3) {
    // EXPAND: Raise zIndex first
    setExpand3(true);
    setZindex3(1000);
  } else {
    // DE-EXPAND: Wait until animation finishes (e.g., 400ms), then lower zIndex
    setExpand3(false);
    setTimeout(() => setZindex3(100), 400); // match animation duration
  }
           setImaj(!imaj)
          }}
        >
          {expand3 && (
            <div className="expandus">
  <div className="expanded-content">
   
      <span className="section-title">Education :</span>
    <div className="sum">

    <p className="exp-text">
      I study at ESI Algiers, one of the top computer science schools in Algeria. Known for its high academic standards and selective admission, ESI provides a strong and well-structured curriculum that blends theory with real-world application. Being surrounded by some of the brightest students from across the country has created an inspiring and challenging environment that constantly pushes me to grow. This journey is shaping me into a driven and versatile developer, ready to solve meaningful problems through technology
    </p>
    <img src={imj8} alt="Experience" className="exp-img" />
    </div>
  </div>
  <div className="expanded-content">
   
      <span className="section-title">Experience :</span>
    <div className="sum">
    <p className="exp-text">
      Throughout the year, I’ve built a wide range of personal and collaborative projects that helped sharpen my technical skills. I also participated in multiple hackathons, where I faced real-world challenges and worked under tight deadlines, which taught me to think creatively and work efficiently as part of a team. I also had the chance of learning from highly experienced and skilled peers.
    </p>
    <img src={imj2 } alt="Experience" className="exp-img" />
    </div>
  </div>
            </div>

)}
          {!expand3 ? <i className="bi bi-arrow-up-right ar"></i> : <i class="bi bi-arrow-down-left ar"></i> }
          <div className={`darkus ${expand3 ? "expanded" : ""}`}>

          </div>
                  <p className="ex">Experience & Education</p>
         </motion.div> 

        <motion.div
          layout
          className={`box6 ${expand2 ? "expanded" : ""}`}
          style={{ gridArea: expand2 ? "1 / 1 / 7 / 4" : "box-about",zIndex:zindex2 }}
          onClick={() => {setExpand2(!expand2)
            zindex2===100 ? setZindex2(1000) : setZindex2(100)
          }}
        >
          {expand2 && 
          <div className="expanded-content2">
            <p>I’m a passionate full stack developer and a third year Computer Science student at ESI Algiers, one of the top tech schools in Algeria. I specialize in backend development with Node.js, Express, and MongoDB, and I enjoy building scalable and user-friendly web applications.
            <br />
            <br />
            Beyond just coding, I love helping others bring their ideas to life, whether it's designing personal portfolios, small business sites, or full platforms. I’m currently pursuing freelancing not only to gain real world experience but also to turn my skills into a sustainable source of income.
            <br />
            <br />
            Driven by curiosity and a desire to grow, I’m constantly learning and refining my craft. My goal is to become a successful freelancer known for delivering clean, functional, and impactful digital solutions.</p>
                      </div>
          }
          <i class=" bi-person-circle ci"></i>
          {!expand2 ? <i className="bi bi-arrow-up-right ar"></i> : <i class="bi bi-arrow-down-left ar"></i> }
          {!expand2 && <p className="pi" >Know more <br /> about me</p>}
          </motion.div>        
        <div className='box7' style={{ gridArea: "box-contact"}}>

         <a href="https://www.linkedin.com/in/rachem-mohamedriadh-050572305/" target="blank"><i className="bi bi-linkedin con"></i></a>
         <a href="https://web.facebook.com/r.adh.rachem/?locale=fr_FR" target="blank"><i className="bi bi-facebook con"></i></a>
         <a href="https://www.instagram.com/ryadrachem/" target="blank"><i className="bi bi-instagram con"></i></a>
         <a href="https://x.com/Rachem_Ryad"  target="blank"> <i className="bi bi-twitter-x con"></i></a>
 
        </div>

        </div>

      </div>
    
  )
}

export default App
