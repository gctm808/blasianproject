import React from 'react';
import '../../css/styles.css';
import TextButton from '../../components/molecules/textButton';

const Life = () => {
    return (
        <div className='l extraPadding'>
            <div>
                <h2>Establishing a Solid Simple Foundation</h2>
                <div className='lifeList'>
                    <div className='left'>
                        <p>Our life-long passion has been to help families establish solid financial foundations, starting with life insurance and offering long-term and personalized answers. Therefore, we unceasingly explore options that will complete our reputable life insurance portfolio, which include but are not limited to:</p>
                    </div>
                    <ul className='right'>
                        <li><i class="fas fa-check"></i>Universal Life</li>
                        <li><i class="fas fa-check"></i>Whole Life</li>
                        <li><i class="fas fa-check"></i>Term Life</li>
                        <li><i class="fas fa-check"></i>Survivorship Life</li>
                        <li><i class="fas fa-check"></i>Indexed Life</li>
                        <li><i class="fas fa-check"></i>Impaired Life</li>
                        <li><i class="fas fa-check"></i>Guarantee and simplified issue</li>
                        <li><i class="fas fa-check"></i>Small group life</li>
                    </ul>  
                </div>   
            </div>
            <div className='video-responsive'>
                <iframe title='lifeVid' src="//lifehappenspro.org/resources/embeded?userId=27409&videoId=5834859709001" width="360" height="371" scrolling="no" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>
            </div>
            <h3>Life Insurance Calculators:</h3>
            <p>These life insurance calculators that will help to determine your life insurance needs:</p>
            <div className='calculators'>
                <iframe title='calc1' src="https://widgets.memberedge.io/planner/?cHJpbWFyeT04RkJDOEYmc2Vjb25kYXJ5PWZmYmEwMCZ0ZXh0PWZmZmZmZiZoaWdobGlnaHQ9ZmZiYTAwJmxpZmU9aHR0cDovL3d3dy5saWZlaGFwcGVucy5vcmcvaW5zdXJhbmNlLW92ZXJ2aWV3L2xpZmUtaW5zdXJhbmNlLyZkaXNhYmlsaXR5PWh0dHA6Ly93d3cubGlmZWhhcHBlbnMub3JnL2luc3VyYW5jZS1vdmVydmlldy9kaXNhYmlsaXR5LWluc3VyYW5jZS8mbG9uZ3Rlcm09aHR0cDovL3d3dy5saWZlaGFwcGVucy5vcmcvaW5zdXJhbmNlLW92ZXJ2aWV3L2Rpc2FiaWxpdHktaW5zdXJhbmNlLyZ1c2VyPTI3NDA5JnR5cGU9cGxhbm5lcg==" border="0" scrolling="no"></iframe>
                <iframe title='calc2' src="https://widgets.memberedge.io/calculators/?cHJpbWFyeT1mZmJhMDAmc2Vjb25kYXJ5PThGQkM4RiZ0ZXh0PWZmZmZmZiZoaWdobGlnaHQ9ZmZiYTAwJmxpZmU9aHR0cDovL3d3dy5saWZlaGFwcGVucy5vcmcvaW5zdXJhbmNlLW92ZXJ2aWV3L2xpZmUtaW5zdXJhbmNlLyZkaXNhYmlsaXR5PWh0dHA6Ly93d3cubGlmZWhhcHBlbnMub3JnL2luc3VyYW5jZS1vdmVydmlldy9kaXNhYmlsaXR5LWluc3VyYW5jZS8mbG9uZ3Rlcm09aHR0cDovL3d3dy5saWZlaGFwcGVucy5vcmcvaW5zdXJhbmNlLW92ZXJ2aWV3L2Rpc2FiaWxpdHktaW5zdXJhbmNlLyZ1c2VyPTI3NDA5JnR5cGU9Y2FsY3VsYXRvcg==" border="0" scrolling="no"></iframe>
            </div>
            <div className='productLinks'>
                <p>For agents seeking a quote, click below</p>
                <TextButton link="http://advisor.allegisag.com/forms/life-insurance-illustration-request" name='Life Insurance Quote' />    
            </div>
        </div>
    );
};

export default Life;