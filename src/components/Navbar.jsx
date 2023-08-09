import { Link } from 'react-router-dom';
import Logo from '../assets/ruqtec.svg';

const Navbar = () => {
  return (
    <section className='h-[88px] flex justify-between bg-white01 px-16 py-6'>
        <div>
            <img src={Logo} alt="" className='' />
        </div>
        <div>
            <ul  className='flex gap-x-8  mt-4 items-center justify-center text-blue04 text-[16px]'>
            <Link to='/'>
                <li className=' hover:text-blue06'>
                  Home
                </li>
            </Link>
               <Link to='/courses'>
               <li className=' hover:text-blue06'>
                    <select name="" id="" className='bg-inherit pr-1'>
                        <option value="">Courses</option>
                    </select>
                </li>
               </Link>
                <Link to='/about'>
                <li className=' hover:text-blue06'>
                  About
                </li>
                </Link>
               <Link to='/contact'>
               <li className=' hover:text-blue06'>
                  Contact
                </li>
               </Link>
            </ul>
        </div>
       
        <Link to='/signin'>
            <button className='bg-blue03 text-grey10 text-center border rounded-lg w-[124px] h-[40px] hover:bg-blue06 hover:text-white01'>Sign in <span><select name="" id="" className='bg-inherit  '></select></span></button>
        </Link>
    </section>
  )
}

export default Navbar