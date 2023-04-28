import styled from 'styled-components'

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`
export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 5rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin: 2rem 0;
`

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #A5D7E8;
`

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`

export const CardInfo = styled.div`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  min-height:96px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  }
  `

export const ShowMoreBtn = styled.button`
  background-color: #457b9d;
  padding: .6rem .8rem;
  margin: .8rem 0;
  border-radius:8px;
  border:none;
  color:#ffffff;
  cursor: pointer;
`

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  margin: 2.5rem 0;
`

export const ExternalLinks = styled.a`
color:#ffffff;
font-size: 1.6rem;
padding: 1rem 3rem;
background: #457b9d;
border-radius: 8px;
transition: 0.5s;
&:hover{
  background: #a8dadc;
}
`

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
flex-wrap:wrap;
padding: 2rem;
gap:1rem;
height: 100px;
    overflow: hidden;
`
export const Tag = styled.li`
color: #e63946;
font-size: 1.5rem;
`
