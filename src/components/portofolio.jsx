import React from 'react'

// Image
import GamingPlatform from '../assets/Gaming-platform.png'
import TokoSebelah from '../assets/Toko-sebelah.png'
import DeLoure from "../assets/De'Louer.png"
import coffeApps1 from "../assets/Coffe-apps-1.jpg"
// import coffeApps2 from "../assets/Coffe-apps-2.jpg"

const Portofolio = () => {
  return (
    <div>
        <h1 className='text-white font-bold text-2xl'>Project that i has been done</h1>
        <div className='py-5'>
            <div className='flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center content-center md:my-5 my-2'>
                <div className='text-white py-2 mx-2'>
                    <h1 className='text-2xl font-bold md:py-3'>Gaming Platform</h1>
                    <br />
                    <p className='md:w-3/4'>
                        Gaming-platform UI/UX dibuat dengan <br />
                        Library React.js dengan menggunakan Tailwind.css, <br /> 
                        Project ini diperuntukan sebagai hasil belajar react.js <br />
                        dengan menerapkan fundamental react seperti props useState useEffect dan lain sebagainya.
                        <br />
                        <br />
                        <label className='font-bold'>May 25 2023</label>
                    </p >
                    <p className='py-5'>
                        <a className='bg-[#9213cd] text-lg px-4 py-2 rounded-full' href="https://gaming-platform.therrors.com/">Let's See</a>
                    </p>
                </div>
                <div>
                    <img className='lg:w-[650px] w-full rounded-xl' src={GamingPlatform} alt="" />
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className='flex lg:flex-row flex-col lg:justify-between justify-center items-center content-center md:my-5 my-2'>
                <div>
                    <img className='lg:w-[650px] w-full rounded-xl' src={TokoSebelah} alt="" />
                </div>
                <div className='text-white mx-2 py-2 lg:px-5'>
                    <h1 className='text-2xl font-bold md:py-3'> E-commerce | Toko-Sebelah</h1>
                    <p className='md:w-3/4'>
                        Toko-sebelah merupakan sebuah project E-commerce yang diperuntukan
                        untuk jual beli Printer. <br />
                        Project ini dibuat menggunakan Laravel dan Bootstrap serta 
                        terintegrasi dengan MySQL 
                        <br />
                        <br />
                        <label className='font-bold'>March 9 2023</label>
                    </p>
                    <p className='py-5'>
                        <a className='bg-[#9213cd] text-lg px-4 py-2 rounded-full' href="https://github.com/Farizirfani/Toko-sebelah-ecommerce-printer">Let's See</a>
                    </p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className='flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center content-center md:my-5 my-2'>
                <div className='text-white py-2 mx-2'>
                    <h1 className='text-2xl font-bold md:py-3'> De'Louer </h1>
                    <p>
                        De'Louer sebuah project website yang diperuntukan <br />
                        untuk tempat booking online kostsan serta pemilihan room. <br />
                        Project ini menggunakan laravel dan Bootstrap serta tertintegrasi dengan MySQL
                        <br />
                        <br />
                        <label className='font-bold'>Mei 3 2023</label>
                    </p>
                    <p className='py-5'>
                        <a className='bg-[#9213cd] text-lg px-4 py-2 rounded-full' href="https://github.com/Farizirfani/De-Louer">Let's See</a>
                    </p>
                </div>
                <div>
                    <img className='lg:w-[650px] w-full rounded-xl' src={DeLoure} alt="" />
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className='flex lg:flex-row flex-col lg:justify-between justify-center items-center content-center md:my-5 my-2'>
                <div className='md:w-1/4 w-1/2'>
                    <img className='md:w-3/3 rounded-xl m-3' src={coffeApps1} alt="Coffe-apps" />
                </div>
                <div className='text-white py-2  mx-5'>
                    <h1 className='text-2xl font-bold md:py-3'> Coffe Apps </h1>
                    <p>
                        Project Mobile Development,<br/> dengan design  Aplikasi Pemesanan Kopi Online. <br />
                        Aplikasi ini menggunakan Framework Flutter <br/> dengan bahasa pemrograman dart. <br />
                        Project ini diperuntukan sebagai Real case dari tugas DICODING
                        <br />
                        <br />
                        <label className='font-bold'>December 24 2022</label>
                    </p>
                    <p className='py-5'>
                        <a className='bg-[#9213cd] text-lg px-4 py-2 rounded-full' href="https://github.com/Farizirfani/coffe-apps-dicoding">Let's See</a>
                    </p>
                </div>
                <div>

                </div>
            </div>
        </div>
        <h1 className='text-white font-bold text-2xl text-center py-10'>Comming Soon...</h1>
    </div>
  )
}

export default Portofolio