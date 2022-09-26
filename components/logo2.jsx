import logo2 from '../images/logo2.png'
import Image from 'next/image'


export default function Logo2(){
  return(
    <div className='lg:flex  md:flex bg-white	justify-around p-5 2xl:flex border-b-2 2xl:pt-10'>
       <Image src={logo2}alt="Pic" width={150} height={50}   />
       <p className='lg:text-3xl 2xl:text-5xl 2xl:font-bold lg:font-medium text-gray-400 m-1'>Accueil</p>
       <p className='lg:text-2xl 2xl:text-3xl 2xl:font-bold  text-gray-400 lg:font-normal m-1'>Avoins</p>
       <p className='lg:text-2xl  text-gray-400 2xl:text-3xl 2xl:font-bold lg:font-normal m-1'>Services</p>
       <p className='2xl:text-3xl 2xl:font-bold lg:text-2xl lg:font-normal  text-gray-400 m-1'>Qui somme Nous</p>
       <p className='lg:text-2xl lg:font-normal 2xl:text-3xl 2xl:font-bold text-gray-400 m-1'>Contactez Nous</p>
       <button className='2xl:text-3xl 2xl:font-bold lg:text-xl text-blue-300 border-blue-300  border-4	lg:p-2 md:p-1 p-1 rounded-xl lg:font-medium'>Sign In / Sign up</button>
       <button className='lg:text-xl text-white 2xl:text-3xl 2xl:font-bold lg:font-medium mt-2  mx-1   bg-blue-400	lg:p-3 p-2 rounded-xl 2xl:p-4'>Make a Booking</button>




    </div>
  )
}