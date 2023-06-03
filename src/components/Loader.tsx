import React, { type Dispatch, type SetStateAction, useEffect } from 'react'

interface Props {
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

function Loader ({ isLoading, setIsLoading }: Props): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1900)
  }, [setIsLoading])

  if (!isLoading) return <div></div>

  return (
    <img src='logo.gif' className='loader' />
  )
}

export default Loader
