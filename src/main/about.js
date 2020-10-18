import React from 'react';
import '../css/styles.css';
import Blockquote from '../components/molecules/blockquote';

const About = () => {
    return (
        <div className='l extraPadding'>
            <h2>OUR FOUNDER</h2>
            <p>Hammer in hand, Fredrick K. Tseu opened shop on South King Street in Honolulu on April 15th, 1955. By his side, was Edna Loo, his future wife. He was a resourceful man and made use of the training and self-confidence he received from the Navy to entrench himself in the insurance world. He always had a joke on hand to share.</p>
            <div className='splitContainer'>
                <div className='half1'>
                    <p>Fred was a man of his word and a man of understanding. “There are two things that are certain in life: death & taxes,” he would say with a chuckle. He was a Chinese merchant and would only bet on a sure thing. With death being sure bet, he embarked on his journey as a life insurance broker. He was an old-fashioned kitchen-table salesman who knew the value of life and family. After seeing a client and having all the forms signed, a woman realized she was sadly short $5 of what she needed to cover the premium. Instead of walking away, Fred agreed to take three live ducks to cover the difference. He put the ducks in a laundry bag, and drove off, feeling proud of the exchange. A few miles down the road, the ducks got loose, flapped all over the backseat,and making a big duck mess in his car. That afternoon, Fred stopped at a Chinese restaurant where the ducks were sold for $10.As the founder of Guardian of Hawaii, Ltd, Fred was everyone’s “Chinese Cousin” or “Chinese Uncle.” He could laugh at himself and was a character known for his one-liners, incredible sense of humor, and ready smile. He worked hard and loved the industry; he lived, breathed, and even dreamt about life insurance.</p>
                </div>
                <div className='half2'>
                    <img src={require('../images/fred.jpg')} alt='fred' />
                </div>
            </div>
            <p>Fred retired in 2001 to spend more time with his wife and seven beautiful granddaughters. He passed the business along to two of his children, Steven Tseu and Lori A. Tseu-Rodriguez but continued to come to the office for coffee, to deliver policies and give commission checks to brokers. Steven and Lori worked to grow the business and further their father’s legacy together for over fifteen years.</p><br /><br />
            <h2>OUR CEO</h2>
            <div className='splitContainer'>
                <div className='half2'  id='lori'>
                    <img src={require('../images/lori.jpg')} alt='lori' />
                </div>
                <div className='half1' id='loriDescription'>
                    <p>After graduating from the University of Washington, Lori worked for a family owned life and health agency in Kirkland, Washington where long hours and hard work made her realize she could be doing the same for her father's agency. In 1990, she moved home and joined her father, Fred Tseu and brother Steven to take over the “behind the scenes” responsibilities of running the agency. Today, she continues to value hard and smart work, time sensitivity, integrity, and most importantly, the importance of enriching relationships. She views her clients as friends and seeks to provide the service they deserve with a smile and giving heart. Lori can get lost in the worlds of quilting, word puzzles, reading, and traveling, experiencing different cultures, trying different foods and wandering along the unbeaten paths of a new country. She has a soft spot for senior citizens and children and enjoys helping her church with various social functions to bring families closer together.</p>
                    <Blockquote quote='My favorite is spending time with family and friends…you can never get back time, nor can you rely on tomorrow; tomorrow is never promised.  Which is why I am an advocate for life insurance and love helping our agents find the right tools, carriers and products for their clients.' cite='Lori Tseu-Rodriguez, CEO'></Blockquote>
                </div>
            </div>
        </div>
    );
};

export default About;