import { useState } from 'react';
import { MarkLogo, SecondaryLogo } from '@/Components/logos';
import { Head } from '@inertiajs/react';
import { HomeIcon, DocumentDuplicateIcon, BuildingOfficeIcon, EllipsisHorizontalCircleIcon, ChevronLeftIcon, ChevronRightIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'
import { SideMenuButton } from '@/Components/buttons';
import SideOpen from '@/Components/icons/SideOpen';
import Breadcrumb from '@/Components/Breadcrumb';
import Attribute from '@/Components/Attribute';
import AmReportCard from '@/Components/AmReportCard';

export default function Playground() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex w-full h-screen overflow-hidden'>
            <aside className={`${
                isOpen ? 'w-64' : 'w-20'
            } px-2 bg-tertiary-800 text-white  py-8 flex flex-col justify-between items-start transition-all relative`}>
                <div className="w-full">
                    <a href="/" className={`px-4 w-full flex ${isOpen ? 'justify-start' : 'justify-center'} mb-12`}>
                        {isOpen ? <SecondaryLogo className='w-32' primary={true} /> : <MarkLogo className='w-16' primary={true} />}
                    </a>

                    <SideMenuButton name={"Beranda"} link={"/beranda"} isOpen={isOpen} isActive={true} className='mb-2' >
                        <HomeIcon className='h-6 w-6'/>
                    </SideMenuButton>
                    <SideMenuButton name={"Laporanku"} link={"/laporanku"} isOpen={isOpen} isActive={false} className='mb-2' >
                        <DocumentDuplicateIcon className='h-6 w-6'/>
                    </SideMenuButton>
                    <SideMenuButton name={"KLien"} link={"/klien"} isOpen={isOpen} isActive={false} className='mb-2' >
                        <BuildingOfficeIcon className='h-6 w-6'/>
                    </SideMenuButton>
                </div>
                <div className={`px-5 w-full flex ${isOpen ? "justify-between" : "justify-center"} items-center hover:cursor-pointer`}>
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full mr-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500"></div>
                        {isOpen && <p className={`text-body-heavy text-white`}>Kimi No Nawa</p>}
                    </div>
                    {isOpen && <EllipsisHorizontalCircleIcon className='h-6 w-6'/>}
                </div>

                {/* Toggle */}
                <div className="h-screen flex items-center absolute -right-5">
                    <SideOpen isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
            </aside>
            <section className='w-full h-screen'>
                {/* Navbar */}
                <nav className={`px-2 py-2 w-full h-fit bg-tertiary-100 flex justify-start items-center fixed top-0`}>
                    <div className="flex w-12 justify-between mr-5">
                        <a href="">
                            <ChevronLeftIcon className='w-5 h-5 text-tertiary' />
                        </a>
                        <a href="">
                            <ChevronRightIcon className='w-5 h-5 text-tertiary' />
                        </a>
                    </div>
                    <Breadcrumb
                        items={[
                            { link: '/dashboard', text: 'Beranda', icon: 'home' },
                            // { link: '/laporanku', text: 'Laporanku', icon: 'docs' },
                            // { url: '/products/item123', text: 'Item 123' }
                        ]}
                    />
                </nav>

                {/* Main Content */}
                <main className={`padding-x pt-28 w-full h-full scroll-m-3 overflow-y-scroll text-tertiary`}>
                    <h1 className={`text-h1`}>
                        <span className='text-primary'>Hi,</span> Zuma
                    </h1>
                    <p className={`text-body mb-4`}>Account Manager Divisi Bissunis Service at Witel Makassar, Sul-Sel.</p>
                    <div className="h-1 w-full bg-disable mb-4"></div>

                    {/* Laporan Terbaru */}
                    <h2 className={`text-h2 mb-4`}>Laporan Terbaru</h2>
                    <div className="flex flex-wrap w-full justify-between mb-8">
                        <AmReportCard link="/" title="Laporan #1 PT Jomblo Indonesia" client="PT Jomblo Indonesia" date="kemarin" />
                        <AmReportCard link="/" title="Laporan #1 PT Jomblo Indonesia" client="PT Jomblo Indonesia" date="kemarin" />
                        <AmReportCard link="/" title="Laporan #1 PT Jomblo Indonesia" client="PT Jomblo Indonesia" date="kemarin" />
                    </div>

                    {/* Kalender */}
                    <h2 className={`text-h2 mb-4`}>Laporan Terbaru</h2>
                    
                </main>
            </section>
        </div>
    )
} 