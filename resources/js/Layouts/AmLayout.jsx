import { useState } from 'react';
import { MarkLogo, SecondaryLogo } from '@/Components/logos';
import { HomeIcon, DocumentDuplicateIcon, BuildingOfficeIcon, ArrowLeftStartOnRectangleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { SideMenuButton } from '@/Components/buttons';
import SideOpen from '@/Components/icons/SideOpen';
import Breadcrumb from '@/Components/Breadcrumb';
import { Link } from '@inertiajs/react';

export default function AmLayout({user, breadcrumbItem, children}) {
    const username = user.name.split(" ").slice(0, 2).join(' ');
    const [isOpen, setIsOpen] = useState(false)

    const handleLogout = () => {
        // Mengirim permintaan POST ke route logout
        Inertia.post(route('logout'));
    };

    return (
        <div className='flex w-full h-screen overflow-hidden'>
            <aside className={`${
                isOpen ? 'w-64' : 'w-20'
            } px-2 bg-tertiary-800 text-white  py-8 flex flex-col justify-between items-start transition-all relative`}>
                {/* Links */}
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
            
                {/* Profile */}
                <div className={`px-5 w-full flex ${isOpen ? "justify-between" : "justify-center"} group items-center hover:cursor-pointer`}>
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full mr-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 overflow-hidden">
                            <img src={user.google_picture} alt="" />
                        </div>
                        {isOpen && <p className={`text-body-heavy text-white`}>{username}</p>}
                    </div>
                    {isOpen && (
                        <Link href={route('logout')} method="post" as="button" >
                            <ArrowLeftStartOnRectangleIcon className='h-6 w-6 group-hover:text-primary'/>
                        </Link>
                    )}
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
                        // items={[
                        //     { link: '/dashboard', text: 'Beranda', icon: 'home' },
                        //     { link: '/laporanku', text: 'Laporanku', icon: 'docs' },
                        //     { link: '/products/item123', text: 'Item 123' }
                        // ]}
                        items={breadcrumbItem}
                    />
                </nav>

                {/* Main Content */}
                <main className={`padding-x pt-28 w-full h-full scroll-m-3 overflow-y-scroll text-tertiary`}>
                    {children}
                </main>
            </section>
        </div>
    )
} 