/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react'
import { projects } from '../../constants/constants'
import {
  Section, SectionTitle, SectionText, CarouselContainer, CarouselMobileScrollNode, CarouselItem, CarouselItemTitle,
  CarouselItemImg, CarouselItemText, CarouselButton, CarouselButtons, CarouselButtonDot
} from '../../styles/GlobalComponents'

const TOTAL_CAROUSEL_COUNT = projects.length

export default function Timeline () {
  const [activeItem, setActiveItem] = useState(0)
  const carouselRef = useRef()

  const scroll = (node, left) => {
    if (!node) return
    return node?.scrollTo({ left, behavior: 'smooth' })
  }

  const handleClick = (ev, idx) => {
    console.log(idx)
    ev.preventDefault()

    if (carouselRef.current) {
      console.log(carouselRef.current)
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (idx / projects.length))

      scroll(carouselRef.current, scrollLeft)
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * projects.length)

      setActiveItem(index)
    }
  }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0)
    }

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        My name is Ofer Gavri and i&apos;m a Full-Stack developer and my purpose is to elevate Websites to the Next Level !
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {projects.map((item, idx) => (
            <CarouselMobileScrollNode key={idx} final={idx - TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                idx={idx}
                id={`carousel-item-${idx}`}
                active={activeItem}
                onClick={(ev) => handleClick(ev, idx)}
              >
                <CarouselItemTitle>
                  {item.title}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.description}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {projects.map((_, idx) => (
          <CarouselButton
            key={idx}
            idx={idx}
            active={activeItem}
            onClick={(ev) => handleClick(ev, idx)}
            type="button"
          >
            <CarouselButtonDot active={0} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  )
}
