import React from 'react'
function Header() {
  return (
    <header className=' py-8 '>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <a href="#">
            {/* <img src={logo} alt="logo" className="w-32" /> */}
            Logo
          </a>
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  )
}

export default Header