import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import {navLinks} from '../constants/index'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')

  return (
    <div className={ `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary` }>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
         to='/'
         className='flex -items-center gap-2'
         onClick={() => {
          setActive('');
          window.scrollTo(0, 0)
        }
        }
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[30px] cursor-pointer font-bold'>Jemeel | <span className='sm:block hidden'> Dokita.com</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map(link=><li>
            <a href={`#{nav.id}`}>{link.title}</a>
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default Navbar