import React from 'react';
import '../css/styles.css';
import '../components/molecules/productBox';
import ProductBox from '../components/molecules/productBox';

const Products = () => {
    return (
        <div className='l extraPadding'>
            <h2>FULLY CUSTOMIZED SERVICE</h2>
            <p>We pride ourselves in keeping business friendly and light and provide our brokers with competitive commission as well as the attentiveness needed to further their individual success. Being a boutique agency, we know each broker and company by name, so we can better serve our clients’ needs.</p>
            <h2>WHAT WE OFFER</h2>
            <ProductBox
                title='ANNUITIES'
                content='An annuity is a financial vehicle that provides a means to accumulate funds, usually for a guaranteed interest or guaranteed income for retirement for a certain period of time or for the rest of your life. We have fixed immediate and deferred annuities, fixed indexed annuities, and multi- year guarantee annuities.'
                link='./products/annuities'
            />
            <ProductBox
                title='LIFE INSURANCE'
                content='Life insurance is for the living. Not only does it give your clients peace of mind for the surviving family members, but it can also include benefits for your clients to enhance and lead a more fulfilling life directed by them. We have a broad portfolio of life insurance products to fit your clients’ needs for the present day and future.'
                link='./products/life'
            />
            <ProductBox
                title='LONG-TERM CARE'
                content='Long term care does not equate to a nursing home. In fact, most clients prefer to receive care in the comfort of their own home. There are reimbursement plans, as well as cash indemnity plans. Both plans have qualifying events to be on claim. We have stand-alone options as well as life insurance with LTC riders.'
                link='./products/ltc'
            />
            <ProductBox
                title='DISABILITY COVERAGE'
                content='Disability insurance, in theory, is your client’s paycheck insurance, also affectionately known as “MUG” insurance. It covers your client’s Mortgage, Utilities and Groceries. If they fell ill or got into an accident and couldn’t work, how will they pay their daily expenses? Let us help you find the right carrier that’s appropriate for your clients.'
                link='./products/disabilities'
            />
            <ProductBox
                title='LINKED BENEFITS'
                content='Sometimes a traditional stand-alone long term care policy can be pricey and if you don’t ever use your policy, you’ve lost all the premiums you’ve put into it, and oftentimes a carrier will raise your premiums. A Linked Benefit product combines universal life and long term care benefits into one product, providing a bucket of money for covered long term care expenses, a death benefit or both. You may even choose to have your premium returned should you choose to terminate your policy. And the premiums and benefits are guaranteed.'
                link='./products/linked'
            />
        </div>
    );
};

export default Products;