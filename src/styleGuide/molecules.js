/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react';
import HeroBlock from '../components/molecules/heroBlock';
import MediaBlock from '../components/molecules/mediaBlock';
import ToutBlock from '../components/molecules/toutBlock';
import FigWithCaption from '../components/molecules/figWithCaption';
import LogoLink from '../components/molecules/logoLink';
import FormField from '../components/molecules/formField';
import Alert from '../components/molecules/alert';
import Overlay from '../components/molecules/overlay';
import FooterNav from '../components/molecules/footerNav';
import Nav from '../components/molecules/nav';
import Pagination from '../components/molecules/pagination';
import Blockquote from '../components/molecules/blockquote';
import '../css/styles.css';

const Molecules = () => {
   return (
    <div className='l'>
      <h1>Molecules</h1>
      <HeroBlock img='fpo_hero.png' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit iopa. (76 characters)' />
      <MediaBlock img='fpo_square.png' headline='Lorem ipsum dolor sit (37 characters)' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
      <ToutBlock img='fpo_landscape.png' link='#' headline='Lorem ipsum dolor sit amet, consectetur adipisicing elit,(37 characters)' />
      <FormField label='label' />
      <FigWithCaption img='fpo_landscape.png' caption='This is an example of an image with a caption. Photo captions, also known as cutlines, are a few lines of text used to explain or elaborate on published photographs.' />
      <LogoLink img='logo.png' link='#' />
      <Alert alertType='alert--error' />
      <Alert alertType='alert--success' />
      <Alert alertType='alert--warning' />
      <Alert alertType='alert--info' />
      <Overlay />
      <FooterNav />
      <Pagination />
      <Nav />
      <Blockquote quote='A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation.' cite='Wikipedia' />
    </div>
  );
}

export default Molecules;
