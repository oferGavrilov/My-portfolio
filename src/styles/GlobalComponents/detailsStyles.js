
import styled from 'styled-components'

export const HeroSection = styled.section`
      overflow-x: hidden;
`

export const HeroContext = styled.div`
display: flex;
flex-direction: column;
color:#dce3e7;
position: absolute;
bottom: 71px;
left: 30px;
`

export const HeroTitle = styled.h1`
font-size: 4.25rem;
line-height: 3.25rem;
font-weight: 700;
filter: drop-shadow(2px 4px 6px black);

`

export const HeroDescription = styled.p`
font-size: 1.8rem;
font-weight: 700;
line-height: 2.875rem;
word-spacing: 0.5rem;
max-width: 33rem;
filter: drop-shadow(3px 2px 9px black);

@media screen and (min-width: 786px) {
      max-width: 60rem;
}

`

export const HeroImg = styled.img`
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      filter: drop-shadow(0 0 5px #fff);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
`

export const HeroContainer = styled.div`
      height: 100vh;
      background-image:linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#242424 68%,#141414 100%);
      width:100vw;
      height:95vh;
      z-index:-10;
`
// Mockup

export const MockupSection = styled.div`
      background-color: #141414;
      padding: 10rem 2rem;
      overflow-x: hidden;
`
export const MockupContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      @media screen and (min-width: 900px) {
            flex-direction: row;
            justify-content: space-evenly;
      }

`

export const MockupImg = styled.img`
      width: 350px;
      height: 100%;
      object-fit: cover;
      object-position: center;
      filter: drop-shadow(0 0 5px #fff);
      `
