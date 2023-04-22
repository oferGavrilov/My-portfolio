import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { Link } from 'react-scroll'

function Nav() {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5  flex items-center justify-between text-2xl text-white/50'>
          <Link activeClass='active' smooth spy offset={-200} to='banner' className='nav-icon' >
              <BiHomeAlt />
          </Link>
          <Link activeClass='active' smooth spy to='about' className='nav-icon'>
            <BiUser />
          </Link>
          <Link activeClass='active' smooth spy to='work' className='nav-icon'>
            <BsClipboardData />
          </Link>
          <Link activeClass='active' smooth spy to='services' className='nav-icon'>
            <BsBriefcase />
          </Link>
          <Link activeClass='active' smooth spy to='contact' className='nav-icon'>
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav