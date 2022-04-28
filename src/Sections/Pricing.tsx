import React from "react";
import styled from "styled-components";
import { RightUpArr } from "../conmponents/Svgs";

const Pricing = () => {
  return (
    <Container>
      <h2>PRICING</h2>
      <BoxCon>
        {data.map((item, index) => {
          return (
            <Box key={index}>
              <Head>{item.head}</Head>
              <section>
                <h3 style={{}}>{item.secondHead}</h3>
                <div>
                  {item.Price1}
                  <span>
                    BUY NOW <RightUpArr />
                  </span>
                </div>{" "}
              </section>
              <section>
                <h3 style={{}}>{item.thirdHead}</h3>
                <div>
                  {item.price2}
                  {item.price2 && (
                    <span>
                      BUY NOW <RightUpArr />
                    </span>
                  )}
                </div>
              </section>
            </Box>
          );
        })}
      </BoxCon>

      <Addons>
        <h3>ADD-ONS</h3>
        <div>
          <span>Live actor or actress : $300</span>
          <span>Copywriting and story direction : $500</span>
          <span>Asset creation 2D or 3D : $45 / hr</span>
        </div>
        <div>
          <span>
            Eachs plan includes 2 sets of revisions Additional revisions billes
            $45 / hr
          </span>

        </div>
      </Addons>
    </Container>
  );
};
const BoxCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
const Container = styled.div`
--font-head:0.9rem;
--font-body:0;
  padding: 1.3rem;
  h2 {
    font-family: "Courier New", Courier, monospace;
    font-weight: 100;
    font-size: 1.3rem;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 4rem 1rem 4rem;
  border: 1px solid #333;
  min-height: 100%;
  justify-content: center;
  gap: 1rem;
  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    /* background: red\; */
    width: 100%;
    h3 {
      text-transform: capitalize;
    }
  }
  div {
    display: flex;
    width: 90%;
    font-size: small;
    letter-spacing: 0.1ch;
    justify-content: space-between;
  }
  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-family: monospace;
    font-size: var(--font)
    ; }
  h3 {
    font-weight: 100;
    font-size: 0.8rem;
    text-align: center;
  }
`;
const Head = styled.h1`
font-size: medium;
font-weight: 100;
  position: relative;
  width: max-content;
  ::before {
    content: " ";
    width: 3rem;
    height: 0.08rem;
    position: absolute;
    background: #333;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  height: fit-content;
  padding-bottom: 10px;
`;
const Addons = styled.div`
display: flex;
flex-direction: column;
gap:1.3rem;
font-weight: 100;
letter-spacing: 0.8px;
div{
  display: flex;
  gap:0.5rem;
  flex-direction: column;
}
  h3{
    font-size: 1rem;
    font-weight: 300;
  }
`
const data = [
  {
    head: "30 SECONDS",
    secondHead: "Commercial video (2D)",
    Price1: "$2000",
    thirdHead: "Commercial video (3D)",
    price2: "$2500",
  },
  {
    head: "60 SECONDS",
    secondHead: "Explainer video with 2D assets on decided color pallet",
    Price1: "$3000",
    thirdHead: "Explainer video with 3D assets on decided color pallet",
    price2: "$3500",
  },
  {
    head: "90 - 120 SECONDS",
    secondHead: "Detailed explainer video with detailed assets",
    Price1: "$5000",
  },
];

export default Pricing;
