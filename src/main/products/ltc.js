import React from 'react';
import '../../css/styles.css';
import TextButton from '../../components/molecules/textButton';

const Ltc = () => {
    return (
        <div className='l extraPadding'>
            <h2>Long-Term Peace of Mind</h2>
                <p>Our significant partnerships have produced a broad portfolio of Long Term Care options, including individual, joint, and linked benefit products. With the senior population growing by strides and with limited availability of resources for Long Term Care options, we constantly look for new trends to present our clients with the most advanced and complete services available.</p>
                <h2>A Comprehensive Portfolio</h2>
                <p>Rising costs of Long Term care are one of the many obstacles for retirees and middle agers who currently have no plan to ensure their Long Term Care needs will be met for the rest of their lives. The expenses related to Long Term Care may have a negative impact on client portfolios as well as their ability to retire comfortably on their own terms. Long Term Care Insurance can be a priceless asset and may even mean the difference between retiring on time or not.</p> 
                <h2>Strategic Partnerships</h2>
                <p>We have a recipe of nurtured relationships and leveraged shared experience, to assist our clients with results far beyond their expectations. Our strategic partnerships across the industry have helped create a community of contacts and resources.</p>
                <div className='ltcGraphics'>
                    <img src={require('../../images/ltcFact1.png')} alt='fact1' />
                    <img src={require('../../images/ltcFact2.png')} alt='fact2' />
                </div>
                <div className='ltcVideo'>
                    <iframe title='ltcVid' width="936" height="534" src="https://www.youtube.com/embed/wTw5fYnyLew" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
                </div>
                <div className='productLinks'>
                    <p>For agents seeking a quote, click below</p>
                    <TextButton link="http://advisor.allegisag.com/forms/long-term-care-quote-request" name='Long-Term Care Quote' />
                </div>
        </div>
    );
};

export default Ltc;