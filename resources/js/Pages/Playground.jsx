import { MarkLogo, SecondaryLogo } from '@/Components/logos';
import { Head } from '@inertiajs/react';
import { HomeIcon, DocumentDuplicateIcon, BuildingOfficeIcon, EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline'
import style from '@/styles';
import { SideMenuButton } from '@/Components/buttons';
import SideOpen from '@/Components/icons/SideOpen';
import { useState } from 'react';

export default function Playground() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex w-full h-screen'>
            <aside className={`${
                isOpen ? 'w-64' : 'w-26'
            } px-2 bg-tertiary-800 text-white  py-8 flex flex-col justify-between items-start transition-all relative`}>
                <div className="w-full">
                    <a href="/" className={`px-5 w-full flex ${isOpen ? 'justify-start' : 'justify-center'}`}>
                        {isOpen ? <SecondaryLogo className='w-32 mb-12' primary={true} /> : <MarkLogo className='w-9 mb-12' primary={true} />}
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
                        {isOpen && <p className={`${style.bodyHeavy} text-white`}>Kimi No Nawa</p>}
                    </div>
                    {isOpen && <EllipsisHorizontalCircleIcon className='h-6 w-6'/>}
                </div>

                {/* Toggle */}
                <SideOpen className='absolute -right-5' isOpen={isOpen} setIsOpen={setIsOpen}/>
            </aside>
            <main>
                <h1>Hellow</h1>
            </main>
        </div>
    )
} 