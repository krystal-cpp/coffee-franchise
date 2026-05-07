export default function Footer() {
    return (
        <div className='w-full flex flex-col h-80 md:h-min bg-white shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.25)] text-black'>
            <div className='flex flex-col md:flex-row'>
                <div className='hidden md:flex md:p-15 p-5 w-fit'>
                    <img className='w-20 h-20 md:w-30 md:h-30' src='src\assets\Logo.svg' alt='Franchise Logo' />
                </div>
                <div className='p-10 text-xs md:text-base flex flex-col gap-5 md:gap-10 md:p-20'>
                    <button className='transform duration-300 hover:scale-110'>Как это работает</button>
                    <button className='transform duration-300 hover:scale-110'>Доходность</button>
                    <button className='transform duration-300 hover:scale-110'>Реальные кейсы</button>
                    <button className='transform duration-300 hover:scale-110'>С чего начать</button>
                </div>
                <div className='md:flex-1'/>
                <div className='text-xs md:text-base flex flex-col p-5 gap-2 md:p-20 md:gap-10'>
                    <div className=''>г.Минск, пр-т Победителей 7А</div>
                    <div className=''>krystal@coffee.com</div>
                </div>
            </div>

            <div className='flex justify-between p-5 md:p-10'>
                <div className='text-xs md:text-m text-black'>Krystal Coffee @ 2025-2026. Все права защищены.</div>
                <div className='flex gap-2 md:gap-4'>
                    <a href='https://github.com/krystal-cpp' target='_blank' rel='noopener norefferer' className='text-black hover:text-[#E87E61] transition'>
                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                            <path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z'/>
                        </svg>
                    </a>
                    <a href='https://www.linkedin.com/in/vladislav-senatorov-11aabb32a' target='_blank' rel='noopener norefferer' className='text-black hover:text-[#E87E61] transition'>
                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>\
                            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z'/>
                        </svg>
                    </a>
                    <a href='https://t.me/couturedev' target='_blank' rel='noopener norefferer' className='text-black hover:text-[#E87E61] transition'>
                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                            <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.22-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.02c.242-.213-.053-.334-.377-.12l-6.87 4.326-2.96-.926c-.64-.2-.652-.64.134-.955l11.56-4.458c.538-.19 1.006.128.816.97z'/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};