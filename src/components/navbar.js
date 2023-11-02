import React , {useState} from 'react'
import '../components/navbar.css'
import ham from '../images/icon-hamburger.svg'
import close from '../images/icon-close-menu.svg'
const Navbar = () => {

  const [Menu, setMenu] = useState(false);

  return (
    <div className='bgImage' >
    <div className='navbar md:w-3/4 '>
        <h2 className='font-semibold text-2xl'>crowdfund</h2>
        <img className='md:hidden items-center py-6 px-4' onClick={()=>setMenu(!Menu)} src={Menu? close : ham} alt='menu' />
        <div className=' navItems '>
            <p>About</p>
            <p>Discover</p>
            <p>Get Started</p>
        </div>

        { Menu && <div className='md:hidden'>
          <div className='absolute flex flex-col left-12 rounded-2xl top-16 w-3/4 p-4 bg-white'>
            <p className='text-left font-semibold text-lg py-2'>About</p>
            <p className='text-left font-semibold text-lg py-2'>Discover</p>
            <p className='text-left font-semibold text-lg py-2'>Get Started</p>
          </div>
          </div>
        }
    </div>
    </div>
  )
}

export default Navbar