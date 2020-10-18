import React from 'react';
import '../../css/styles.css';
import MediaList from '../organisms/mediaList';
import TextButton from '../molecules/textButton';

const MediaListSection = () => {
    return (
        <section class="c-section">
            <h2 class="c-section__title">Section Title</h2>
            <MediaList />
            <TextButton />
        </section>
    );
};

export default MediaListSection;