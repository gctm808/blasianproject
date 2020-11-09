import React from 'react';
import '../../css/styles.css';
import ToutBlock from '../molecules/toutBlock';

const ToutList = () => {
    return (
        <div>
            <ul className="c-tout-list g g-2up">
                <li className="c-tout-list__item gi">
                    <ToutBlock img='film.jpg' link='#' headline='Film' />
                </li>
                <li className="c-tout-list__item gi">
                    <ToutBlock img='magazine.jpg' link='#' headline='Magazine' />
                </li>
            </ul><br />
            <ul className="c-tout-list g g-2up">
                <li className="c-tout-list__item gi">
                    <ToutBlock img='podcast.jpg' link='#' headline='Podcast' />
                </li>
                <li className="c-tout-list__item gi">
                    <ToutBlock img='blog.jpg' link='#' headline='Blog' />
                </li>
            </ul>
        </div>
    );
};

export default ToutList;