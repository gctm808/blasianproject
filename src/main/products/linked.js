import React from 'react';
import '../../css/styles.css';
import TextButton from '../../components/molecules/textButton';

const Ltc = () => {
    return (
        <div className='l extraPadding'>
            <h2>Convenience Wrapped into One</h2>
            <p>Life insurance only provides a death benefit and long-term care insurance only pays for qualifying expenses. A linked benefit policy has a death benefit, maintains a cash value and can provide income tax-free payments for qualified long-term care related expenses. In addition, the policies use a leveraged pool of money to pay these long-term care expenses. If the policyholder never needs long-term care, then his or her beneficiary will receive an income-tax-free death benefit.</p>
            <div className='ltcGraphics'>
                <img src={require('../../images/linked.png')} alt='fact1' />
            </div>
            <div className='productLinks'>
                <p>For agents seeking a quote, click below</p>
                <TextButton link="http://advisor.allegisag.com/forms/linked-ltc-quote-request" name='Linked Benefits Product Quote' />
            </div>
        </div>
    );
};

export default Ltc;