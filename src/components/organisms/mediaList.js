import React from 'react';
import '../../css/styles.css';
import MediaBlock from '../molecules/mediaBlock';

const MediaList = () => {
    return (
        <ul class="c-media-list">
            <li>
                <MediaBlock img='fpo_square.png' headline='Lorem ipsum dolor sit (37 characters)' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
            </li>
            <li>
                <MediaBlock img='fpo_square.png' headline='Lorem ipsum dolor sit (37 characters)' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
            </li>
            <li>
                <MediaBlock img='fpo_square.png' headline='Lorem ipsum dolor sit (37 characters)' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
            </li>
        </ul>

    );
};

export default MediaList;