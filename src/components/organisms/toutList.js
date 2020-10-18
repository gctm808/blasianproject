import React from 'react';
import '../../css/styles.css';
import ToutBlock from '../molecules/toutBlock';

const ToutList = () => {
    return (
        <ul className="c-tout-list g g-3up">
            <li className="c-tout-list__item gi">
                <ToutBlock img='fpo_landscape.png' link='#' headline='Lorem ipsum dolor sit amet, consectetur adipisicing elit,(37 characters)' />
            </li>
            <li className="c-tout-list__item gi">
                <ToutBlock img='fpo_landscape.png' link='#' headline='Lorem ipsum dolor sit amet, consectetur adipisicing elit,(37 characters)' />
            </li>
            <li className="c-tout-list__item gi">
                <ToutBlock img='fpo_landscape.png' link='#' headline='Lorem ipsum dolor sit amet, consectetur adipisicing elit,(37 characters)' />
            </li>
        </ul>
    );
};

export default ToutList;