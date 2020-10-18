import React from 'react';
import '../../css/styles.css';
import TextButton from '../../components/molecules/textButton';

const Annuities = () => {
    return (
        <div className='l extraPadding'>
            <h2>Making your money work for you</h2>
            <div class="video-responsive">
                <iframe width="936" height="534" title='annuities' src="https://www.youtube.com/embed/smZOK8eozJc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
            </div>
            <div className='annuityList'>
                <div className='left'>
                    <p>Whether your clients are starting off in the 
                    workforce, headed toward retirement, or living 
                    the retired life, annuities provide valuable 
                    benefits at all stages of life.  There are 
                    different strategies to accomplish 
                    individualized goals at various points in our 
                    lifespan.  Allow us to help you navigate through 
                    the plethora of products available that include 
                    tax deferred growth opportunities, principal 
                    and income protection and a guaranteed income 
                    stream that can last a lifetime:</p>
                </div>
                <ul className='right'>
                    <li><span className='isBold'>Fixed:</span> Offers a guaranteed rate of 
                        return for a fixed number of years and are 
                        akin to the certificates of deposits, however 
                        they are not FDIC insured. This is a more 
                        conservative, less volatile asset with earning 
                        compounding on a tax deferred basis. If 
                        withdrawals are taken out prior to 59 ½ years 
                        of age, client may be subject to a 10% IRS 
                        penalty.</li>
                    <li><span className='isBold'>Immediate Fixed Income:</span> Offers a guaranteed stated payment for life and/or for a certain number of years. Guaranteed income payment helps protect your retirement income from market risks and cannot be affected by market volatility.</li>
                    <li><span className='isBold'>Deferred Fixed Income:</span> These are fixed income annuities that have a “waiting” period or deferral period before income begins.  Being that there is a deferral period, there may be a higher income payment amount than would have been received from a comparable immediate fixed income annuity with the same initial investment.</li>
                    <li><span className='isBold'>Indexed:</span> An amount is invested (premium) in return for protection against the downslide of markets.  There is potential for some investment growth linked to the performance of an index (i.e. S&P 500 Index) and in some cases, guaranteed level lifetime income through optional riders at an additional cost.</li>
                    <li><span className='isBold'>Traditional Fixed Annuities versus MYGAs:</span>Traditional fixed annuities usually are guaranteed 1 year at a time with an ongoing minimum guaranteed rate as well. This is great when the interest rates are on the rise, so the client is not locked in for  ”X” number of years, but only 1 year at a time.  Whereas MYGAs are similar to a CD but with tax deferral until the money is taken out, thereby allowing the interest to compound. With a CD, taxes are paid annually on the interest earned.</li>
                </ul><br /><br /><br />
            </div>
            <div className='productLinks'>
                <p className='isBold'>For agents seeking a quote, click below</p>
                <TextButton name='Annuity Quote' link='http://advisor.allegisag.com/forms/annuity-quote-request' />
            </div>
        </div>
    );
};

export default Annuities;