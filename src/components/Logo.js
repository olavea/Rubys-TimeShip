import React from 'react';
import styled from 'styled-components';
import stripes from '../assets/images/stripes.svg';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: clamp(1px, 0.65vw, 8px);
  width: 30em;
  height: 30em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 0;
  --borderSize: 1em;
  background: white url(${stripes});
  background-size: 150em;
  border: var(--borderSize) solid white;
  display: flex;
  .inner {
    margin: var(--borderSize);
    flex: 1;
    background: white;
    display: grid;
    grid-template-rows: 20% 1fr 1fr;
    align-content: center;
  }
  .est {
    font-size: 1.5em;
    align-self: center;
  }
  h1 {
    display: grid;
    grid-template-rows: 8fr 2fr;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    grid-gap: 2em;
    transform: translateY(-0.7em);
  }

  .slices {
    font-size: 3.2em;
    letter-spacing: 0.2em;
    transform: translateY(-0.15em);
    color: var(--pink);
  }
  .slicks {
    transform: scale(1.4);
    display: block;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
    perspective: 100px;
  }
  .letter {
    font-size: 5em;
    color: var(--red);
    --scale: 1;
    --rotate: -10deg;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 0deg;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    display: inline-block;
    line-height: 1;
    transition: transform 0.3s;
    &.S {
      --rotate: 19deg;
      --scale: 1.7;
      --translateY: -0.14em;
    }
    &.l {
      --rotate: -15deg;
      --scale: 1.0;
      --translateX: 0.05em;
      --translateY: -0.05em;
    }
    &.c {
      --rotate: 3deg;
      --scale: 0.9;
      --translateX: 0.1em;
      --translateY: 0.23em;
    }
    &.d {
      --rotate: 3deg;
      --scale: 0.3;
      --translateX: 0.1em;
      --translateY: 0.23em;
    }
    &.v {
      --rotate: 18deg;
      --scale: 0.9;
      --translateY: -0.67em;
      --translateX: 0.13em;
    }
    &.b {
      --rotate: 19deg;
      --scale: 0.7;
      --translateY: 0.1em;
    }
    &.a {
      --rotate: 18deg;
      --scale: 0.9;
      --translateY: 0.27em;
      --translateX: -0.13em;
    }
    &.e {
      --rotate: -53deg;
      --scale: 0.4;
      --translateY: -0.9em;
      --translateX: 1.2em;
    }

    &.k {
      --rotate: -19deg;
      --scale: 1.6;
      --translateX: -0.06em;
    }
    &.f {
      --rotate: -33deg;
      --scale: 0.9;
      --translateX: -0.20em;
      --translateY: -0.10em;
    }
    &.i {
      --scale: 0.9;
      --translateY: -0.1em;
      --translateX: -0.1em;
    }
    &.apos {
      --translateX: 0.30em;
    }

  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <span className="est">Ola Vea &</span>
        <h1>
          <span className="slicks">
            <span className="letter S">L</span>
            <span className="letter l">i</span>
            <span className="letter c">ll</span>

            <span className="letter b">i</span>
            <span className="letter a">a</span>
            <span className="letter k">n</span>
            <br />


          </span>

        </h1>
      </div>
    </LogoStyles>
  );
}