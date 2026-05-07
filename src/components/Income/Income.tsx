export default function Income() {
    return (
        <div className='w-full h-160 bg-white flex flex-col items-center mt-20 md:mt-30 lg:mt-10 xl:mt-30'>
            <div className='underline decoration-[#E8BE61] text-black text-4xl md:text-6xl items-center justify-center flex'>
                ДОХОДНОСТЬ
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-5 px-10 md:px-40 w-full h-100 pt-20'>
                <div className='col-start-1 col-end-1 row-start-1 row-end-1 border rounded-xl p-4'>
                    <div className='flex items-center justify-center rounded-full bg-[#3F3F3F] w-10 h-10'>
                        <svg width='20' height='20' viewBox="0 0 24 24" fill='none'>
                            <path d='M12 4V20M4 12H20' stroke='white' strokeWidth='2' strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className='flex-row flex'>
                        <div className='mt-4 text-black font-bold text-xl md:text-3xl'>
                            $1530
                        </div>
                        <div className='group relative inline-block'>
                            <button className='w-4 h-4 rounded-full bg-[#E87E61] text-white flex justify-center items-center pl-0.5'>i</button>
                            <div className='absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 w-80 rounded-lg bg-black px-4 py-3 text-sm text-white opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible'>
                                <div className='flex justify-between mb-2'>
                                    <span className='text-gray-300'>Средний чек:</span>
                                    <span className='font-medium'>~10$</span>
                                </div>
                                <div className='flex justify-between mb-2'>
                                    <span className='text-gray-300'>Клиентов в день:</span>
                                    <span className='font-medium'>~6</span>
                                </div>
                                <div className='flex justify-between mb-2'>
                                    <span className='text-gray-300'>Возвраты и скидки:</span>
                                    <span className='font-medium'>~270$</span>
                                </div>

                                <div className='border-t border-gray-700 my-2'/>

                                <div className='text-xs text-gray-300 mb-1'>
                                    Итого: 10$ × 6 × 30 = 1800$ - 270$ = <span className='text-white font-bold'>~1530$</span>
                                </div>
                                <span className='absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black'></span>
                            </div>
                        </div>
                    </div>
                    <div className='text-[#7C7C7C] text-xs pt-2 md:text-xl'>ВЫРУЧКА В МЕСЯЦ</div>
                </div>
                <div className='col-start-1 col-end-1 row-start-2 row-end-2 border rounded-xl p-4'>
                    <div className='flex items-center justify-center font-bold text-2xl rounded-full bg-[#3F3F3F] w-10 h-10'>
                        <svg width='20' height='20' viewBox="0 0 24 24" fill='none'>
                            <path d='M4 12H20' stroke='white' strokeWidth='2' strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className='flex flex-row'>
                        <div className='mt-4 text-black font-bold text-xl md:text-3xl'>
                            $891
                        </div>
                        <div className='group relative inline-block'>
                            <button className='w-4 h-4 rounded-full bg-[#E87E61] text-white flex justify-center items-center pl-0.5'>i</button>
                            <div className='absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 w-80 rounded-lg bg-black px-4 py-3 text-sm text-white opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible'>
                                <div className='flex justify-between mb-2'>
                                    <span className='text-gray-300'>Аренда:</span>
                                    <span className='font-medium'>~200$</span>
                                </div>
                                <div className='flex justify-between mb-2'>
                                    <span className='text-gray-300'>Налог 6%</span>
                                    <span className='font-medium'>~108$</span>
                                </div>
                                <div className='flex justify-between mb-2'>
                                    <span className='text-gray-300'>Зарплата персонала:</span>
                                    <span className='font-medium'>~250$</span>
                                </div> 
                                <div className='flex justify-between mb-2'>
                                    <span className='text-gray-300'>Коммунальные услуги:</span>
                                    <span className='font-medium'>~60$</span>
                                </div>
                                <div className='flex justify-between mb-2'>
                                    <span className='text-gray-300'>Закупка товаров:</span>
                                    <span className='font-medium'>~150$</span>
                                </div>
                                <div className='flex justify-between mb-2'>
                                    <span className='text-gray-300'>Реклама:</span>
                                    <span className='font-medium'>~15$</span>
                                </div>
                                <div className='flex justify-between mb-2'>
                                    <span className='text-gray-300'>Непредвиденные расходы</span>
                                    <span className='font-medium'>~108$</span>
                                </div>

                                <div className='border-t border-gray-700 my-2'/>

                                <div className='text-xs text-gray-300 mb-1'>
                                    Итого: 200$ + 108$ + 250$ + 60$ + 150$ + 15$ + 108$ = <span className='text-white font-bold'>~891$</span>
                                </div>
                                <span className='absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black'></span>
                            </div>
                        </div>
                    </div>
                    <div className='text-[#7C7C7C] text-xs pt-2 md:text-xl'>РАСХОДЫ</div>
                </div>
                <div className='col-start-2 col-end-2 row-start-1 rounded-xl bg-[#3F3F3F] row-span-2 flex-col flex p-4'>
                    <div className='flex items-center justify-center font-bold text-2xl rounded-full bg-white w-10 h-10'>
                        <svg width='20' height='20' viewBox="0 0 24 24" fill='none'>
                            <path d='M4 10H20M4 15H20' stroke='black' strokeWidth='2' strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className='flex-1' />
                    <div className='mb-4 text-white'>
                        <div className='text-4xl md:text-6xl font-bold'>
                            $634
                        </div>
                        <div className='text-xl md:text-3xl'>
                            ЧИСТАЯ ПРИБЫЛЬ
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1' />
            <button className='text-m md:text-base px-5 h-10 mb-15 text-white bg-[#E87E61] rounded-3xl transform duration-300 hover:scale-110'>
                ИЗУЧИТЬ БИЗНЕС-МОДЕЛЬ
            </button>
        </div>
    );
};