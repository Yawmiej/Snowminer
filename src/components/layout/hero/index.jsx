import React from 'react';
import Container from '../container/container';

import './style.scss';

function Content({ children, className }) {
  return <div className={`hero__content ${className}`}>{children}</div>;
}

function HeroHeading({ children, className }) {
  return <h1 className={`hero-heading ${className}`}>{children}</h1>;
}

function HeroParagraph({ children, className }) {
  return <p className={`hero-paragraph ${className}`}>{children}</p>;
}

function HeroCta({ children, className }) {
  return <div className={`hero-cta ${className}`}>{children}</div>;
}

function HeroFooter() {
  return <div className="hero-footer" />;
}

function HeroSnowDrop() {
  return <div className="hero-snow" />;
}

function Hero({ children, className }) {
  return (
    <div className={`hero ${className}`}>
      <Container>{children}</Container>
    </div>
  );
}

Hero.Content = Content;
Hero.Heading = HeroHeading;
Hero.Paragraph = HeroParagraph;
Hero.CTA = HeroCta;
Hero.Footer = HeroFooter;
Hero.SnowDrop = HeroSnowDrop;

export default Hero;
