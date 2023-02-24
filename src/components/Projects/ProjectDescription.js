import { useState } from "react";
import { ShowMoreBtn } from "./ProjectsStyles";

export function ProjectDescription({ txt, length }) {
    const [isShowMore, setIsShowMore] = useState(false)

    function getTxtToShow(txt, length) {
        return (txt.length < length || isShowMore) ? txt : txt.substring(0, length + 1) + '...'
    }

    function onToggleLongTxt() {
        setIsShowMore(prevLongTxtShown => !prevLongTxtShown)
    }

    return (
        <article>
            <p>{getTxtToShow(txt, length)}</p>
            {txt.length > length && <ShowMoreBtn onClick={onToggleLongTxt}>{isShowMore ? 'Read less' : 'Read more'}</ShowMoreBtn>}
        </article>
    )
}