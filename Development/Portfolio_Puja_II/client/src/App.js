import React, { Fragment, useEffect, useState } from 'react';

import { Link, Route, Switch, withRouter } from "react-router-dom";
import Project from './Project';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import HomePage from './HomePage';

import homeBtn from './style/images/home.png';
import womanBtn from './style/images/woman.png';
import favoritesBtn from './style/images/favorites.png';
import projectsBtn from './style/images/start-up.png';


const App = ({ history, location }) => {

  const [nav, setNav] = useState(false)

  const clickHandler = (path) => {

    history.push(path)
    setNav(false)

  }


  return (
    <Fragment>
      <header>
        <h1>
          {
            location.pathname !== "/" ? <span onClick={e=> history.push("/")}>home</span> : <span>PG</span>
          }
        </h1>
        
        {
          nav ? <Fragment>
            <ul className="nav">
              <li>
                <img src={homeBtn} onClick={e => clickHandler("/")} /><span onClick={e => clickHandler("/")}>home</span>
              </li>
              <li>
                <img src={womanBtn} onClick={e => clickHandler("/abouts")} /><span onClick={e => clickHandler("/abouts")}>about</span>
              </li>
              <li>
                <img src={favoritesBtn} onClick={e => clickHandler("/skills")} /><span onClick={e => clickHandler("/skills")}>skills</span>
              </li>
              <li>
                <img src={projectsBtn} onClick={e => clickHandler("/projects")} /><span onClick={e => clickHandler("/projects")}>projects</span>
              </li>
            </ul>
            <div className="shadow" onClick={e=> setNav(false)}></div>
          </Fragment> : <Fragment>
          <table className="nav-button" onClick={e=> setNav(!nav)}>
            <tr><hr/></tr>
            <tr><hr/></tr>
            <tr><hr/></tr>
          </table>
          
          </Fragment>
        }
        <hr/>
      </header>
      <main className="output">
        
        <Switch>
          <Route exact path="/">
            <HomePage />
            
          </Route>

          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/projects/:project'>
            <Project />
          </Route>
          <Route exact path='/abouts'>
            <About />
          </Route>
          <Route exact path='/skills'>
            <Skills />
          </Route>

        </Switch>
        
      </main>
      <hr />
      <footer>
        <table>
          <tr><td onClick={e=> clickHandler("/")}>home</td><td onClick={e=> clickHandler("/abouts")}>about</td><td onClick={e=> clickHandler("/skills")}>skills</td><td onClick={e=> clickHandler("/projects")}>projects</td></tr>
          <tr><td>&#169; Puja Gharti 2021</td></tr>
        </table>
      </footer>
    </Fragment>
  );
}

export default withRouter(App);
