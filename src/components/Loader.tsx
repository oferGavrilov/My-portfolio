import React, { useEffect } from 'react'
function Loader ({ isLoading, setIsLoading }: { isLoading: boolean, setIsLoading: () => void }): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading()
    }, 1900)
  }, [setIsLoading])

  if (!isLoading) return <div></div>

  return (
      <img src='logo.gif' className='loader'/>
  )
}

export default Loader
