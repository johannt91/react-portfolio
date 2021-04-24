import React from 'react'
import profileImage from '../../assets/profile/image.jpeg'

function About() {
    return (
        <section>
            <h1 id="about">About me</h1>
            <img src={profileImage} className="profile-image" />
            <p>I am a pianist and piano teacher who has recently transitioned into the world of tech. 
                As a performer and teacher I constantly push my capacity for learning and improving in order to be on top of my game. 
                Pushing my capacity along with my passion and dedication have all contributed to the successes on my coding journey.
            </p>
            <p>
            My musical training has been a very important asset in my coding journey. 
            It has enabled me to foster my critical thinking skills, attention to detail, as well as breaking down of complex ideas into simpler components. 
            In this rapidly evolving technological landscape, my thirst for knowledge and curiosity fuel my desire to keep up with the latest technologies.
            </p>
        </section>
    );
}

export default About;