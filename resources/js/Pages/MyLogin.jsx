import { Head } from '@inertiajs/react';
import style from '@/styles';
import { GoogleIcon } from '../Components/icons';
import { PrimaryLogo } from '@/Components/logos';

export default function MyLogin() {
    return (
        <>
            <Head title="Login" />
            <div className={`w-full h-screen flex flex-col-reverse md:flex-row`}>
                {/* Left Section */}
                <div className={`p-6 md:p-20 w-full md:w-1/2 h-screen flex flex-col justify-start items-center md:justify-center md:items-start`}>
                    <h1 className={`${style.h1} text-tertiary`}>Selamat Datang</h1>
                    <h1 className={`${style.h1} text-tertiary mb-12`}>
                        di Visi<span className='text-primary'>Tel</span>
                    </h1>
                    <button className={`${style.flexCenter} px-5 py-[10px] border-solid border-tertiary rounded-lg border-2 transition-all hover:bg-secondary-100 w-fit`}>
                        <GoogleIcon />
                        <p className={`${style.bodyHeavy} pl-4 w-full text-start`}>Masuk dengan Google.</p>
                    </button>
                </div>

                {/* Right Section */}
                <div className={`${style.flexCenter} w-full md:w-1/2 h-screen bg-hero-login bg-no-repeat bg-center bg-cover`}>
                    <PrimaryLogo className='w-56' primary={true} tertiary={true} />
                </div>
            </div>
        </>
    )
} 