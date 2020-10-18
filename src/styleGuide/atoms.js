import React from 'react';
import Button from '../components/molecules/button';
import TextButton from '../components/molecules/textButton';
import TextArea from '../components/molecules/textarea';
import '../css/styles.css';

const Atoms = () => {
    return (
        <div className='l'>
            <h1>Modifiable Atoms</h1>
            <Button />
            <br />
            <TextButton />
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
            <div>Primary font: "HelveticaNeue", "Helvetica", "Arial", sans-serif;</div>
            <div><em>Primary font italic: "HelveticaNeue", "Helvetica", "Arial", sans-serif;</em></div>
            <div><strong>Primary font bold: "HelveticaNeue", "Helvetica", "Arial", sans-serif;</strong></div>
            <div className='font-secondary'>Secondary font: Georgia, Times, "Times New Roman", serif;</div>
            <div className='font-secondary'><em>Secondary font italic: Georgia, Times, "Times New Roman", serif;</em></div>
            <div className='font-secondary'><strong>Secondary font bold; Georgia, Times, "Times New Roman", serif;</strong></div>
            <input type='text' placeholder='Text Input'></input>
            <TextArea label='label' />
            <ul className='sg-colors'>
                <li>
                <span className='sg-color-fill sg-primary'></span>
                <span className="sg-label">$color-brand-primary<br />#5C832F</span>
                </li>
                <li>
                <span className='sg-color-fill sg-primary-dark'></span>
                <span className="sg-label">$color-brand-primary-dark<br />#3b4a20</span>
                </li>
                <li>
                <span className='sg-color-fill sg-secondary'></span>
                <span className="sg-label">$color-brand-secondary<br />#5C832F</span>
                </li>
                <li>
                <span className='sg-color-fill sg-secondary-dark'></span>
                <span className="sg-label">$color-brand-secondary-dark<br />#3b4a20</span>
                </li>
            </ul>
            <ul className="sg-colors">
                <li>
                <span className="sg-color-fill sg-white"></span>
                <span className="sg-label">$color-white<br />#ffffff</span>
                </li>
                <li>
                <span className="sg-color-fill sg-gray-1"></span>
                <span className="sg-label">$color-gray-1<br />#f7f9f9</span>
                </li>
                <li>
                <span className="sg-color-fill sg-gray-2"></span>
                <span className="sg-label">$color-gray-2<br />#d9d9d9</span>
                </li>
                <li>
                <span className="sg-color-fill sg-gray-3"></span>
                <span className="sg-label">$color-gray-3<br />#a5a5a5</span>
                </li>
                <li>
                <span className="sg-color-fill sg-gray-4"></span>
                <span className="sg-label">$color-gray-4<br />#808080</span>
                </li>
                <li>
                <span className="sg-color-fill sg-gray-5"></span>
                <span className="sg-label">$color-gray-5<br />#595959</span>
                </li>
                <li>
                <span className="sg-color-fill sg-gray-6"></span>
                <span className="sg-label"> $color-gray-6<br />#444444</span>
                </li>
                <li>
                <span className="sg-color-fill sg-gray-7"></span>
                <span className="sg-label">$color-gray-7<br />#222222</span>
                </li>
                <li>
                <span className="sg-color-fill sg-black"></span>
                <span className="sg-label">$color-black<br />#000000</span>
                </li>
            </ul>
            <ul className="sg-colors">
                <li>
                <span className="sg-color-fill sg-util-positive"></span>
                <span className="sg-label">$color-utility-positive<br />#03804d</span>
                </li>
                <li>
                <span className="sg-color-fill sg-util-positive-subtle"></span>
                <span className="sg-label">$color-utility-positive-subtle<br />#d4f3e6</span>
                </li>
                <li>
                <span className="sg-color-fill sg-util-caution"></span>
                <span className="sg-label">$color-utility-caution<br />#a59b15</span>
                </li>
                <li>
                <span className="sg-color-fill sg-util-caution-subtle"></span>
                <span className="sg-label">$color-utility-caution-subtle<br />#fffecf</span>
                </li>
                <li>
                <span className="sg-color-fill sg-util-negative"></span>
                <span className="sg-label">$color-utility-negative<br />#b12a0b</span>
                </li>
                <li>
                <span className="sg-color-fill sg-util-negative-subtle"></span>
                <span className="sg-label">$color-utility-negative-subtle<br />#fdded8</span>
                </li>
                <li>
                <span className="sg-color-fill sg-util-neutral"></span>
                <span className="sg-label">$color-utility-neutral<br />#0192d0</span>
                </li>
                <li>
                <span className="sg-color-fill sg-util-neutral-subtle"></span>
                <span className="sg-label">$color-utility-neutral-subtle<br />#d3f2ff</span>
                </li>
            </ul>
            <img src={require('../images/fpo_avatar.png')} alt='avatar' />
            <img src={require('../images/fpo_hero.png')} alt='hero' />
            <img src={require('../images/fpo_landscape.png')} alt='landscape' />
            <img src={require('../images/fpo_square.png')} alt='square' />
            <img src={require('../images/logo.png')} alt='logo' className='c-logo'/>
        </div>
    );
};

export default Atoms;