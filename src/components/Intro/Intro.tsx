export default function Intro() {
    return(
        <div className='w-full h-200 md:h-250 bg-white items-center flex justify-center-safe flex-col'>
            <div className='pt-10 px-15 text-black font-bold text-4xl md:text-5xl lg:text-6xl'>
                ЗАРАБАТЫВАЙТЕ НА КОФЕ В <span className='underline decoration-[#E8BE61] md:hidden'>СВОЕМ ГОРОДЕ</span>
            </div>
            <div className='hidden md:flex lg:text-6xl text-black font-bold text-5xl underline decoration-[#E8BE61]'>
                СВОЕМ ГОРОДЕ
            </div> 
            
            <div className='2xl:px-80 xl:px-80 lg:px-40 px-15 text-black text-xl xl:line-clamp-2 2xl:line-clamp-2 mt-10'>
                Станьте владельцем кофейни и занимайтесь бизнесом, или доверьте управление нам и просто получайте девиденды
            </div>

            <img className='mt-15 flex justify-center items-center px-5' src='src\assets\Intro.svg' alt='Intro'/>

            <button className='text-m md:text-base px-5 h-10 mt-20 lg:mt-30 text-white bg-[#E87E61] rounded-3xl transform duration-300 hover:scale-110'>
                ИЗУЧИТЬ БИЗНЕС-МОДЕЛЬ
            </button>
        </div>
    );
};