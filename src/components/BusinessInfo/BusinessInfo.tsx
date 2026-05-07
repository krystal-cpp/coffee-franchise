export default function BusinessInfo() {
    return (
        <div className='w-full md:h-150 lg:h-180 bg-white flex flex-col'>
            <div className='flex flex-col pt-15 pl-15'>
                <div className='text-[#E87E61] text-4xl lg:text-6xl xl:text-6xl 2xl:text-6xl'>
                    ЧТО ЗА БИЗНЕС?
                </div>
                <div className='text-black font-bold text-4xl xl:text-6xl 2xl:text-6xl 2xl:line-clamp-3 xl:line-clamp-3 xl:pr-40 2xl:pr-40'>
                    КОФЕ, ДОСТОЙНЫЙ <span className='underline decoration-[#E8BE61]'>ЛУЧШИХ БАРИСТА</span>, В УЮТНОЙ ОБСТАНОВКЕ И ПО ЧЕСТНОЙ ЦЕНЕ.
                </div>
            </div>
            <div className='relative flex justify-center items-center mt-15 lg:mt-25 xl:mt-25 2xl:mt-25'>
                <div className='grid grid-cols-2 md:grid-rows-3 mx-5 md:mx-25 lg:mx-50 w-full h-80 bg-[#3F3F3F] text-white rounded-xl'>
                    <div className='mt-5 ml-5 whitespace-nowrap w-fit md:mt-10 lg:mt-8 lg:ml-8 md:ml-10 rounded-3xl bg-[#E87E61] text-xs md:text-base px-3 h-10 md:px-5 items-center flex justify-center col-start-1 col-end-2 row-start-1 row-end-1'>
                        Небольшая площадь от 15 м&#178;
                    </div>
                    <div className='pl-5 mb-5 md:pl-10 font-bold text-2xl md:text-2xl lg:text-2xl xl:text-4xl h-min col-start-1 col-span-2 lg:col-end-1 xl:col-end-1 2xl:col-end-1 row-start-2 row-end-2'>
                        КОМПАКТНЫЙ ФОРМАТ, МАКСИМУМ ПРИБЫЛИ!
                    </div>
                    <div className='pl-8 md:pl-14 col-start-1 col-end-1 row-start-3 row-end-3 text-m md:text-lg md:-mt-8 lg:text-lg lg:-mt-8 xl:mt-0'>
                        <ul className='list-disc'>
                            <li>Премиальное зерно</li>
                            <li>Профессиональное оборудование</li>
                            <li>Обучение и поддержка</li>
                        </ul>
                    </div>
                </div>
                <img className='w-45 h-45 left-50 top-32 absolute xs:left-45 xs:top-35 xs:w-40 xs:h-40 md:w-80 md:h-80 md:left-100 md:top-0 lg:w-100 lg:h-100 lg:left-120 lg:-top-20 xl:w-125 xl:h-125 xl:-top-45 xl:left-150' src='src\assets\Cup1.svg' alt='Cup' />
            </div>
        </div>
    );
};