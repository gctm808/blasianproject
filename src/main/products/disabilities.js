import React from 'react';
import '../../css/styles.css';
import TextButton from '../../components/molecules/textButton';

const Disabilities = () => {
    return (
        <div className='l extraPadding'>
            <h2>Expertise with Personality</h2>
            <p>Our professionals who are experts on disability insurance and all of its nuances, have established deep relationships with excellent carriers and continue to make strides in addressing income replacement before it becomes an issue too late to address.</p>
            <h2>Best-In-Class Service</h2>
            <p>Focusing on providing the best detailed information with proficiency, our personalized attention is done so with accuracy and efficiency. Our successful approach has helped us become the idyllic channel for financial professionals and their clients.</p>     
            <div className='disabilityGraphics'>
                <img src={require("../../images/disabilityGraphic1.jpg")} alt='disability graphic 1' />
                <img src={require("../../images/disabilityGraphic2.png")} alt='disability graphic 2' />
            </div>
            <div className='disabilityVideo'>
                <iframe src="//lifehappenspro.org/resources/embeded?userId=27409&videoId=6004517548001" title='disability' width="660" height="371" scrolling="no" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>
            </div>
            <div className='productLinks'>
                <p>For agents seeking a quote, click below</p>
                <TextButton link="http://advisor.allegisag.com/forms/disability-income-quote-request" name='Disability Income Quote' />
            </div>
        </div>
    );
};

export default Disabilities;