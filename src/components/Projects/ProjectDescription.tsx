import React, { useState } from 'react'
import { ShowMoreBtn } from './ProjectsStyles'

interface Props {
  txt: string
  length: number
}

export function ProjectDescription ({ txt, length }: Props): JSX.Element {
  const [isShowMore, setIsShowMore] = useState(false)

  function getTxtToShow (txt: string, length: number): string {
    return (txt.length < length || isShowMore) ? txt : txt.substring(0, length + 1) + '...'
  }

  function onToggleLongTxt (): void {
    setIsShowMore(prevLongTxtShown => !prevLongTxtShown)
  }

  return (
        <article>
            <p>{getTxtToShow(txt, length)}</p>
            {txt.length > length && <ShowMoreBtn onClick={onToggleLongTxt}>{isShowMore ? 'Read less' : 'Read more'}</ShowMoreBtn>}
        </article>
  )
}
