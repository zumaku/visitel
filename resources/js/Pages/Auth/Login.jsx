import { Head, Link, usePage } from '@inertiajs/react';
import { GoogleIcon } from '../../Components/icons';
import { PrimaryLogo } from '@/Components/logos';
import { useState, useEffect } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function MyLogin() {
    const { message } = usePage().props;
    const [showMsg, setShowMsg] = useState(true)

    return (
        <>
            <Head title="Login" />
            <div className={`w-full h-screen flex flex-col-reverse md:flex-row`}>
                {/* Left Section */}
                <div className={`p-6 md:p-20 w-full md:w-1/2 h-screen flex flex-col justify-start items-center md:justify-center md:items-start`}>
                    <h1 className={`text-h1 text-tertiary`}>Selamat Datang</h1>
                    <h1 className={`text-h1 text-tertiary mb-12`}>
                        di Visi<span className='text-primary'>Tel</span>
                    </h1>

                    <a href='/auth/redirect' className={`flex-center px-5 py-[10px] border-solid border-tertiary rounded-lg border-2 transition-all hover:bg-secondary-100 w-fit`}>
                        <GoogleIcon />
                        <p className={`text-body-heavy pl-4 w-full text-start`}>Masuk dengan Google.</p>
                    </a>

                    {/* Informasi */}
                    {message && showMsg && (
                        <div className="flex justify-start items-center text-tertiary">
                            <InformationCircleIcon className='w-6 text-primary' />
                            <p className='m-2 mr-4'>{message}</p>
                            <p className='hover:font-bold cursor-pointer' onClick={() => setShowMsg(false)}>X</p>
                        </div>
                    )}
                </div>

                {/* Right Section */}
                <div className={`flex-center w-full md:w-1/2 h-screen bg-hero-login bg-no-repeat bg-center bg-cover`}>
                    <PrimaryLogo className='w-56' primary={true} tertiary={true} />
                </div>
            </div>
        </>
    )
} 