export default function HowItWorks() {
    return (
        <div className='w-full h-140 bg-[#3F3F3F] flex flex-col'>
            <div className='text-white text-4xl md:text-6xl pt-15 pl-15'>
                КАК ЭТО <span className='underline decoration-[#E8BE61]'>РАБОТАЕТ</span>
            </div>
            <div className='flex justify-center items-center mt-15'>
                <div className='flex w-full px-5 md:px-10 h-70'>
                    <div className='w-1/2 bg-[#E4DDCF] rounded-l-xl text-black'>
                        <img className='pl-4 md:pl-9 pt-5 w-18 h-18 md:w-22 md:h-22' src='src\assets\Dollar.svg' alt='Dollar' />
                        <div className='font-bold text-xl md:text-4xl pt-4 pl-5 md:pl-9 md:pt-11'>
                            БИЗНЕС
                        </div>
                        <div className='text-xs md:text-base md:line-clamp-3 pl-5 pt-5 md:pl-9 md:pt-2 md:pr-3'>
                            Открываете кофейню или несколько с нашей поддержкой, занимаетесь бизнесом и зарабатываете.
                        </div>
                    </div>
                    <div className='w-1/2 bg-[#FFFFFF] rounded-r-xl text-black'>
                        <img className='pl-4 pt-5 md:pl-9 md:pt-5 w-18 h-18 md:w-22 md:h-22' src='src\assets\CreditCard.svg' alt='CreditCard' />
                        <div className='font-bold text-xl md:text-4xl pt-4 pl-5 md:pl-9 md:pt-11'>
                            ИНВЕСТ
                        </div>
                        <div className='text-xs pl-5 pt-5 md:text-base md:line-clamp-3 md:pl-9 md:pt-2 md:pr-3'>
                            Инвестируйте в одну кофейню или несколько, доверяете всю работу нам и просто получаете девиденды.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};