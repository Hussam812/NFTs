import React, { useRef } from "react";
import { styled, keyframes } from "styled-components";

import Img1 from "../../assets/bighead.svg";
import Img2 from "../../assets/bighead-1.svg";
import Img3 from "../../assets/bighead-2.svg";
import Img4 from "../../assets/bighead-3.svg";
import Img5 from "../../assets/bighead-4.svg";
import Img6 from "../../assets/bighead-5.svg";
import Img7 from "../../assets/bighead-6.svg";
import Img8 from "../../assets/bighead-7.svg";
import Img9 from "../../assets/bighead-8.svg";
import Img10 from "../../assets/bighead-9.svg";
import ETH from "../../assets/Ethereum.svg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;

  & > :first-child {
    animation-duration: 20s;
  }

  & > :last-child {
    animation-duration: 15s;
  }
`;
const move = keyframes`
  0% {
    transform: translateX(100%)

  }
  100%{
    transform:translateX(-100%)
  }

`;

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${move} 20s linear infinite ${(props) => props.direction};
`;
const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 20px;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  span {
    font-size: ${(prosp) => prosp.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba}, .5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }
  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    height: auto;
    width: 1rem;
  }
`;
const NftItem = ({ img, number = 0, price = 0, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };

  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img} alt="The Weirdo" />
      <Details>
        <div>
          <span>Weirdos</span>
          <br />
          <h1>#{number}</h1>
        </div>
        <dir>
          <span>price</span>
          <Price>
            <img src={ETH} alt="ETH" />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </dir>
      </Details>
    </ImgContainer>
  );
};

const ShowCase = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  return (
    <Section>
      <Row direction="none" ref={row1Ref}>
        <NftItem img={Img1} number={52} price={1.2} passRef={row1Ref} />
        <NftItem img={Img2} number={123} price={1.3} passRef={row1Ref} />
        <NftItem img={Img3} number={456} price={2.5} passRef={row1Ref} />
        <NftItem img={Img4} number={666} price={5.5} passRef={row1Ref} />
        <NftItem img={Img5} number={452} price={10.5} passRef={row1Ref} />
      </Row>

      <Row direction="reverse" ref={row2Ref}>
        <NftItem img={Img6} number={999} price={1.6} passRef={row2Ref} />
        <NftItem img={Img7} number={333} price={2.8} passRef={row2Ref} />
        <NftItem img={Img8} number={696} price={2.1} passRef={row2Ref} />
        <NftItem img={Img9} number={969} price={3.2} passRef={row2Ref} />
        <NftItem img={Img10} number={865} price={2.3} passRef={row2Ref} />
      </Row>
    </Section>
  );
};

export default ShowCase;
