export default function NavBar() {
    return(
        <div className='z-1 bg-transparent w-full h-20 md:h-25 flex justify-around items-center gap-1 md:gap-2 rounded-b-xl shadow-2xl backdrop-blur-xl sticky top-0 text-xs md:text-base text-black'>
            <img className='hidden lg:flex lg:w-20 lg:h-20 2xl:flex xl:flex xl:w-27 xl:h-27 2xl:w-27 2xl:h-27 mt-2' src='src\assets\Logo.svg' alt='Franchise Logo'/>

            <button className='w-min md:w-fit transform duration-300 hover:scale-110'>
                Как это работает
            </button>
            <button className='w-min md:w-fit transform duration-300 hover:scale-110'>
                Доходность
            </button>
            <button className='w-min md:w-fit transform duration-300 hover:scale-110'>
                Реальные кейсы
            </button>
            <button className='w-min md:w-fit transform duration-300 hover:scale-110'>
                С чего начать
            </button>
            <button className='flex justify-center items-center px-2 md:px-5 h-10 text-white bg-[#E87E61] rounded-3xl transform duration-300 hover:scale-110'>
                ОСТАВИТЬ ЗАЯВКУ
            </button>
        </div>
    );
};