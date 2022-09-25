import logo2 from '../images/logo2.png'
import Image from 'next/image'


export default function Logo2(){
  return(
    <div className='lg:flex bg-white	justify-around p-5 border-b-2'>
       <Image src={logo2}alt="Pic" width={150} height={50}   />
       <p className='text-3xl font-medium text-gray-400 m-1'>Accueil</p>
       <p className='text-2xl  text-gray-400 font-normal m-1'>Avoins</p>
       <p className='text-2xl  text-gray-400 font-normal m-1'>Services</p>
       <p className='text-2xl font-normal  text-gray-400 m-1'>Qui somme Nous</p>
       <p className='text-2xl font-normal text-gray-400 m-1'>Contactez Nous</p>
       <button className='text-xl text-blue-300 border-blue-300  border-4	p-2 rounded font-medium'>Sign In / Sign up</button>
       <button className='text-xl text-white font-medium mt-2  mx-1   bg-blue-400	p-3 rounded '>Make a Booking</button>




    </div>
  )
}