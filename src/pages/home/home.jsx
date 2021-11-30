import React from 'react';

import './style.scss';

import AppStoreButton1x from '../../assets/img/png/1x/App Store.png';
import AppStoreButton2x from '../../assets/img/png/2x/App Store.png';

import playStoreButton1x from '../../assets/img/png/1x/Google Play.png';
import playStoreButton2x from '../../assets/img/png/2x/Google Play.png';
import Image from '../../components/common/image';
import Hero from '../../components/layout/hero';

function Home() {
  return (
    <main className="home">
      <Hero>
        <Hero.Content>
          <Hero.Heading>Snow removal with a simple tap</Hero.Heading>
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
        {/* <Hero.SnowDrop /> */}
        <Hero.SnowDrop />
        <Hero.SnowDrop />
      </Hero>
    </main>
  );
}

export default Home;
