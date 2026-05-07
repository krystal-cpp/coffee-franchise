export default function GettingStarted() {
    return (
        <div className='flex flex-col w-full bg-white h-260'>
            <div className='flex flex-col gap-2 px-15 py-15 text-4xl md:text-6xl'>
                <div className='text-[#E87E61]'>С ЧЕГО НАЧАТЬ?</div>
                <div className='text-black font-bold'>
                    <span className='underline decoration-[#E8BE61]'>ЗАПОЛНИТЕ ЗАЯВКУ</span> - И МЫ СДЕЛАЕМ ВСЕ ОСТАЛЬНОЕ!
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-2 grid-rows-2 gap-5 p-5 w-full md:px-30 h-130 lg:h-140'>
                    <div className='rounded-xl bg-[#3F3F3F] col-start-1 col-end-1 row-start-1 row-end-1 p-3 md:p-5'>
                        <div className='flex gap-3 font-bold'>
                            <div className='rounded-full bg-white text-[#3F3F3F] flex items-center justify-center text-2xl md:text-5xl px-5 w-10 h-10 md:w-12.5 md:h-12.5'>1</div>
                            <div className='text-white text-base md:text-3xl lg:text-2xl md:p-2'>ОСТАВЬТЕ ЗАЯВКУ</div>
                        </div>
                        <div className='border-t border border-white my-2 md:my-4' />
                        <div className='text-white text-sm md:text-xl lg:text-lg'>
                            <ul className='list-none'>
                                <li>- Заполните форму, а мы перезвоним в течении дня.</li>
                                <li>- Обсудим ваши цели и подберем локацию.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='rounded-xl bg-[#3F3F3F] col-start-2 col-end-2 row-start-1 row-end-1 p-3 md:p-5'>
                        <div className='flex gap-3 font-bold'>
                            <div className='rounded-full bg-white text-[#3F3F3F] flex items-center justify-center md:pl-1 text-2xl md:text-5xl px-5 md:pr-1 w-10 h-10 md:w-12.5 md:h-12.5'>2</div>
                            <div className='text-white text-base md:text-3xl lg:text-2xl md:p-2'>ЗАКЛЮЧАЕМ ДОГОВОР</div>
                        </div>
                        <div className='border-t border border-white my-2 md:my-4' />
                        <div className='text-white text-sm md:text-xl lg:text-lg'>
                            <ul className='list-none'>
                                <li>- Рассчитаем инвестиции и рентабельность.</li>
                                <li>- Подпишем франшизный договор и поможем с документами.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='rounded-xl bg-[#3F3F3F] col-start-1 col-end-1 row-start-2 row-end-2 p-3 md:p-5'>
                        <div className='flex gap-3 font-bold'>
                            <div className='rounded-full bg-white text-[#3F3F3F] flex items-center justify-center md:pl-1 text-2xl md:text-5xl px-5 md:pr-1 w-10 h-10 md:w-12.5 md:h-12.5'>3</div>
                            <div className='text-white text-base md:text-3xl lg:text-2xl md:p-2'>ГОТОВИМСЯ К ОТКРЫТИЮ</div>
                        </div>
                        <div className='border-t border border-white my-2 md:my-4' />
                        <div className='text-white text-sm md:text-xl lg:text-lg'>
                            <ul className='list-none'>
                                <li>- Получите дизайн-проект, оборудование и обучение для команды.</li>
                                <li>- Запустим маркетинг и привлечем первых гостей.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='rounded-xl bg-[#3F3F3F] col-start-2 col-end-2 row-start-2 row-end-2 p-3 md:p-5'>
                        <div className='flex gap-3 font-bold'>
                            <div className='rounded-full bg-white text-[#3F3F3F] flex items-center justify-center text-2xl md:text-5xl px-5 w-10 h-10 md:w-12.5 md:h-12.5'>4</div>
                            <div className='text-white text-base md:text-3xl lg:text-2xl md:p-2'>ОТКРЫВАЕМ И РАБОТАЕМ</div>
                        </div>
                        <div className='border-t border border-white my-2 md:my-4' />
                        <div className='text-white text-sm md:text-xl lg:text-lg'>
                            <ul className='list-none'>
                                <li>- Поможем с запуском и проведем контроль качества.</li>
                                <li>- Обеспечим постоянную поддержку и консультации.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-15'>
                <button className='text-m md:text-base flex items-center justify-center px-5 h-10 text-white bg-[#E87E61] rounded-3xl transform duration-300 hover:scale-110'>
                    ОСТАВИТЬ ЗАЯВКУ
                </button>
            </div>
        </div>
    );
};