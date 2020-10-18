import React from 'react';
import '../css/styles.css';

const Covid = () => {
    return (
        <div className='l extraPadding'>
            <h2>A few notes regarding updated business practices due to current circumstances:</h2>
            <ul>
                <li>- Insurance companies are not testing for COVID-19.  We are not aware of any imminent plans to start or require testing.</li>
                <li>- Death claims as a result of COVID-19 infection are covered. This illness is not treated different than other illnesses from a coverage perspective because it is a global pandemic.</li><br />
                <li>- Current Underwriting Treatment:
                    <ul>
                        <li>Current infection with the virus will receive a “Postpone” underwriting decision until client is fully recovered. While companies are not testing for the virus, like any other illness, a current infection would need to be disclosed on an exam, non-medical, or interview.  Non-disclosure of a known infection, like non-disclosure of any material health information, could result in the denial of a claim during the contestability period.</li>
                        <li>Recent and planned foreign travel is being postponed by many insurance companies until 15-30 days after travel is completed</li>
                    </ul>
                </li><br />
                <li>- Potential Future Underwriting Treatment:
                    <ul>
                        <li>While nothing has been implemented, populations at higher risk of mortality or morbidity from COVID-19 infection may be subject to changes in underwriting practices in the future. Carriers may decide to be become more stringent in underwriting insureds at older ages or for insureds with chronic medical conditions, especially chronic respiratory conditions, to minimize risk.</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Covid;