import React from 'react';
import HeroSec from './HeroSec/HeroSec';
import NewArivals from './newarivals/NewArivals';
import Sale from './sale/Sale';
import Tranding from './tranding/Tranding';
import ViewCollection from './viewcollection/ViewCollection';
import Collection from './collection/Collection';
import Latest from './latest/Latest';
import Connected from './connected/Connected';
import Instagram from './instagram/Instagram';
import ConnectedMail from './connected/ConnectedMail';
import Logo from './logo/Logo';

function Home1() {
  return (
    <>
     <HeroSec/> 
     <ViewCollection/>
     <NewArivals/>
     <Sale/>
     <Tranding/>
     <Collection/>
     <Latest/>
     <Logo/>
     <ConnectedMail/>
     <Connected/>
     <Instagram/>
    </>
  )
}

export default Home1
