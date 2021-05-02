import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

import p1 from './style/images/project1.png'
import p2 from './style/images/project2.png'
import p3 from './style/images/project3.png'
import p4 from './style/images/project4.png'

const Projects = ({ history }) => {

    const clickHandler = (path) => {

        history.push(path)
    
      }

    return (
        <Fragment>
            <section>
                <h3>Projects</h3>
                <hr />
                <ul className="projects-list">
                    <li>
                        <h4><span onClick={e=> clickHandler('/projects/emojis')}>Emojis - Express yourself</span></h4>
                        <img src={p4} onClick={e=> clickHandler('/projects/emojis')} />
                    </li>
                    
                    
                    <li>
                        <h4><span onClick={e=> clickHandler('/projects/discover-your-montreal')}>Discover your Montreal</span></h4>
                        <img src={p3} onClick={e=> clickHandler('/projects/discover-your-montreal')} />
                    </li>
                    
                    
                    <li>
                        <h4><span onClick={e=> clickHandler('/projects/food-life')}>Food Life</span></h4>
                        <img src={p2} onClick={e=> clickHandler('/projects/food-life')} />
                    </li>
                    
                    
                    <li>
                        <h4><span onClick={e=> clickHandler('/projects/shooter-game')}>Shooter Game</span></h4>
                        <img src={p1} onClick={e=> clickHandler('/projects/shooter-game')} />
                    </li>
                    
                </ul>
            </section>
        </Fragment>
    );
}
export default withRouter(Projects);