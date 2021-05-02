import React, { Fragment } from 'react';

import img1 from './style/images/img1.jpg'
import github from './style/images/github.png'
import linkedin from './style/images/linkedin.png'
import email from './style/images/arroba.png'

const About = () => {



    return (
        <Fragment>
            <section className="about-section">
                <img src={img1} />
                <h3>About</h3>
                <hr />
                <p>
                    My background in the hospitality industry has given me an excellent foundation of working in a team and problem-solving. I have always been keen on how modern apps are built, and this curiosity, along with connecting with software engineers in my network, greatly influenced my enrolment in the Software Engineering Immersive Course at General Assembly.
                </p>
                <h3>Find me here</h3>
                <hr />
                <ul className="find-me-here">
                    <li>
                        <img src={github} alt="github" />
                    </li>
                    <li>
                        <img src={linkedin} alt="linkedin" />
                    </li>
                    <li>
                        <img src={email} alt="email" />
                    </li>
                </ul>
            </section>
        </Fragment>
    );
}
export default About;