import logo2 from '../images/logo2.png'
import Image from 'next/image'


export default function Logo2(){
  return(
    <div className='lg:flex md:flex bg-white	justify-around p-5 border-b-2'>
       <Image src={logo2}alt="Pic" width={150} height={50}   />
       <p className='lg:text-3xl lg:font-medium text-gray-400 m-1'>Accueil</p>
       <p className='lg:text-2xl  text-gray-400 lg:font-normal m-1'>Avoins</p>
       <p className='lg:text-2xl  text-gray-400 lg:font-normal m-1'>Services</p>
       <p className='lg:text-2xl lg:font-normal  text-gray-400 m-1'>Qui somme Nous</p>
       <p className='lg:text-2xl lg:font-normal text-gray-400 m-1'>Contactez Nous</p>
       <button className='lg:text-xl text-blue-300 border-blue-300  border-4	lg:p-2 md:p-1 p-1 rounded-xl lg:font-medium'>Sign In / Sign up</button>
       <button className='lg:text-xl text-white lg:font-medium mt-2  mx-1   bg-blue-400	lg:p-3 p-2 rounded-xl '>Make a Booking</button>




    </div>
  )
}