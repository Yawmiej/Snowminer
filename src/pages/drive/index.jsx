import React from 'react';
import Hero from '../../components/layout/hero';

import './style.scss';

import AppStoreButton1x from '../../assets/img/png/1x/App Store.png';
import AppStoreButton2x from '../../assets/img/png/2x/App Store.png';

import playStoreButton1x from '../../assets/img/png/1x/Google Play.png';
import playStoreButton2x from '../../assets/img/png/2x/Google Play.png';
import Image from '../../components/common/image';

function Drive() {
  return (
    <main className="drive">
      <Hero className="drive__hero">
        <Hero.Content>
          <Hero.Heading>Earn money on your own schedule</Hero.Heading>
          <Hero.Paragraph>
            Expert snowplow Miners to your driveway or sidewalk in minutes.
            Download the app and start your order!
          </Hero.Paragraph>
          <Hero.CTA className="home__hero--cta">
            <a href="##">
              <Image
                src1x={AppStoreButton1x}
                src2x={AppStoreButton2x}
                alt="Download from app store"
              />
            </a>
            <a href="##">
              <Image
                src1x={playStoreButton1x}
                src2x={playStoreButton2x}
                alt="Download from google play store"
              />
            </a>
          </Hero.CTA>
        </Hero.Content>
        <Hero.Footer />
        <Hero.SnowDrop />
      </Hero>
    </main>
  );
}

export default Drive;
