import logo from '../images/logo.png'
import Image from 'next/image'


export default function Logo(){
  return(
    <div className='lg:flex md:flex bg-blue-900	justify-around p-5 '>
       <Image src={logo}alt="Pic" width={150} height={50}   />
       <p className='lg:text-3xl lg:font-medium  text-white mx-1'>Accueil</p>
       <p className='lg:text-2xl  text-white lg:font-normal mx-1'>Avoins</p>
       <p className='lg:text-2xl  text-white lg:font-normal mx-1'>Services</p>
       <p className='lg:text-2xl lg:font-normal  text-white mx-1'>Qui somme Nous</p>
       <p className='lg:text-2xl lg:font-normal text-white mx-1'>Contactez Nous</p>
       <button className='lg:text-xl text-white border-white  border-4	lg:p-2 md:p-1 p-2 rounded-xl lg:font-medium'>Sign In / Sign up</button>
       <button className='lg:text-xl text-blue-700 lg:font-medium mt-2  mx-1   bg-white	lg:p-3 md:p-1 p-2 rounded-xl '>Make a Booking</button>




    </div>
  )
}