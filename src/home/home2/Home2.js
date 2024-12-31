import React from 'react';
import HeroSec2 from './herosec2/HeroSec2';
import ViewCollectionHome2 from './ViewCollectionhome2/ViewCollectionHome2';
import ConnectedMail from '../home1/connected/ConnectedMail';
import Connected from '../home1/connected/Connected';
import Instagram from '../home1/instagram/Instagram';
import Logo from '../home1/logo/Logo';
import Tranding from '../home1/tranding/Tranding';
import SaleHome2 from './salehome2/SaleHome2';
import LetestCollection from './letestcollecton/LetestCollection';
import BlogHome2 from './bloghome2/BlogHome2';
import TestingMonials from './testimonials/TestingMonials';
import Vedio from './Vedio/Vedio';

function Home2() {
  return (
    <>
     <HeroSec2/> 
     <ViewCollectionHome2/>
     <Tranding/>
     <SaleHome2/>
     <LetestCollection/>
     <Vedio/>
     <BlogHome2/>
     <TestingMonials/>
     <Logo/>
     <ConnectedMail/>
     <Connected/>
     <Instagram/>
    </>
  )
}

export default Home2
