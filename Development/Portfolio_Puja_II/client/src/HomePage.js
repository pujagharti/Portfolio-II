import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';


import img1 from "./style/images/img1.jpg";

/* <img src={img1} /> */

const HomePage = ({ history }) => {



    return (
        <Fragment>
            <section className="home-page">
            <h1><strong><span>Welcome to my</span><span>website!</span></strong></h1>

            <p className="welcome">
                Hello, Puja Gharti
            </p>
            <p className="welcome">
                <div>Software engineer</div>
            </p>

            <button className="read-more" onClick={e=> history.push('/abouts')}>
                Read more
            </button>
            <p>
                I have strong academics and knowledge in Web technologies with a good eye for design. Desire to be at the forefront of change. <span>Let's work together to make your product stand out.</span>
            </p>

            

            </section>
        </Fragment>
    );
}
export default withRouter(HomePage);