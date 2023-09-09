import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../../images/logo.png'
import { useState } from 'react'

const NavbarItem = ({title, classProps}) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={logo} alt='logo' className='w-32 cursor-pointer' />
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavbarItem key={item + index} title={item}/>
        ))}
        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
          Connect
        </li>
      </ul>

      <div className='flex relative'>
        {!toggleMenu && <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)}/>}
        {toggleMenu && (
          <div className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden rounded-md blue-glassmorphism text-white animate-slide-in'>
            <div className='flex justify-end w-full pr-6'>
              <AiOutlineClose onClick={() => setToggleMenu(false)} fontSize={28} className='cursor-pointer'/>
            </div>
            <ul className='list-none flex flex-col justify-center items-center h-screen'>
              {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                <NavbarItem key={item + index} title={item} classProps='my-2 text-lg pb-6'/>
              ))}
              <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                Connect
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar