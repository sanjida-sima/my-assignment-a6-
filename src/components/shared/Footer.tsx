import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='bg-[#15181e] text-white mt-16'>
            <div className=' max-w-7xl max-auto px-5 py-8 flex flex-col md:flex-row justify-between items-center gap-5'>

            <div className='flex item-center gap-3'>
                <Image src='/logo.png'
                alt='Fitlog'
                width ={40}
                height={40}/>
             
             <span className='text-xl font-black'>FITLOG</span>

            </div>

            <p className='text-gray-400 text-sm text-center'> © 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>


        </footer>
    )
}

export default Footer