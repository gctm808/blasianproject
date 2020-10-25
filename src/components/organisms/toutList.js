import React from 'react';
import '../../css/styles.css';
import ToutBlock from '../molecules/toutBlock';

const ToutList = () => {
    return (
        <ul className="c-tout-list g g-4up">
            <li className="c-tout-list__item gi">
                <ToutBlock img='film.jpg' link='#' headline='Film' />
            </li>
            <li className="c-tout-list__item gi">
                <ToutBlock img='magazine.jpg' link='#' headline='Magazine' />
            </li>
            <li className="c-tout-list__item gi">
                <ToutBlock img='podcast.jpg' link='#' headline='Podcast' />
            </li>
            <li className="c-tout-list__item gi">
                <ToutBlock img='blog.jpg' link='#' headline='Blog' />
            </li>
        </ul>
    );
};

export default ToutList;