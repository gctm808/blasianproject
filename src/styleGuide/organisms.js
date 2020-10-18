import React from 'react';
import '../css/styles.css';
import Footer from '../components/organisms/footer';
import Header from '../components/organisms/header';
import Form from '../components/organisms/form';
import MediaList from '../components/organisms/mediaList';
import ToutList from '../components/organisms/toutList';
import PageTitle from '../components/organisms/pageTitle';
import MediaListSection from '../components/organisms/mediaListSection';
import TextBlob from '../components/organisms/textBlob';

const organisms = () => {
    return (
        <div className='l'>
            <h1>Organisms</h1>
            <Footer />
            <Header />
            <Form />
            <MediaList />
            <ToutList />
            <PageTitle />
            <MediaListSection />
            <TextBlob />
        </div>
    );
};

export default organisms;