import logo from '../images/logo.png'
import Image from 'next/image'


export default function Logo(){
  return(
    <div className='lg:flex bg-blue-900	justify-around p-5 '>
       <Image src={logo}alt="Pic" width={150} height={50}   />
       <p className='text-2xl font-medium text-white m-1'>Accueil</p>
       <p className='text-xl  text-white font-normal m-1'>Avoins</p>
       <p className='text-xl  text-white font-normal m-1'>Services</p>
       <p className='text-xl font-normal  text-white m-1'>Qui somme Nous</p>
       <p className='text-xl font-normal text-white m-1'>Contactez Nous</p>
       <button className='text-xl text-white border-white  border-4	p-2 rounded font-medium'>Sign In / Sign up</button>
       <button className='text-xl text-blue-700 font-medium mt-2  mx-1   bg-white	p-3 rounded '>Make a Booking</button>




    </div>
  )
}