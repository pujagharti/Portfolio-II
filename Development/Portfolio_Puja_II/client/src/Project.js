import React, { Fragment, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';


import p1 from './style/images/project1.png'
import p2 from './style/images/project2.png'
import p3 from './style/images/project3.png'
import p4 from './style/images/project4.png'



const Project = ({ match }) => {

    const [projectName, setProjectName] = useState('')
    const [description, setDescription] = useState('')
    const [picture, setPicture] = useState(null)

    useEffect(() => {
        let name = match.params.project.replace(/-/g, ' ')

        name = name.charAt(0).toUpperCase() + name.slice(1)

        setProjectName(name)

        switch(true) {

            case match.params.project.includes('emojis'):
                setDescription('Django API and full-stack web application with a relational database to allow users to comment and like their favourite emojis.')
                setPicture(p4)
                break;

            case match.params.project.includes('montreal'):
                setDescription('Add, comment, like, rate, and share your choice of destination, around the city of Montreal.')
                setPicture(p3)
                break;
            case match.params.project.includes('food'):
                setDescription('A web application to provide the selection of food in specified types.')
                setPicture(p2)
                break;
            case match.params.project.includes('shooter'):
                setDescription('A browser game using JavaScript and CSS.')
                setPicture(p1)
                break;

            default:
                setDescription('')
                setPicture(null)
                break;
        }

    }, [match.params.project]);

    return (
        <Fragment>
            <section>
                <h4>{ projectName }</h4>
                <p style={{ textAlign: 'center', marginBottom: '30px' }}>{ description }</p>
                {
                    picture && <img src={picture} />
                }
            </section>
        </Fragment>
    );
}
export default withRouter(Project);