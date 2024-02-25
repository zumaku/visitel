import AmLayout from "@/Layouts/AmLayout"
import AmReportCard from '@/Components/AmReportCard';
import AmCalender from '@/Components/AmCalender';
import { Head } from '@inertiajs/react';

export default function AmDashboard({auth}) {
    
    return (
        <AmLayout
            user={auth.user}
            breadcrumbItem={[
                { link: '/dashboard', text: 'Beranda', icon: 'home' },
            ]}
        >
            <Head title="Beranda" />
                    
            <h1 className={`text-h1`}>
                <span className='text-primary'>Hi,</span> {auth.user.name}
            </h1>
            <p className={`text-body mb-4`}>Account Manager Divisi Bissunis Service at Witel Makassar, Sul-Sel.</p>
            <div className="h-1 w-full bg-disable mb-4"></div>

            {/* Laporan Terbaru */}
            <h2 className={`text-h2 mb-4`}>Laporan Terbaru</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full justify-between mb-8">
                <AmReportCard link="/" title="Laporan #1 PT Jomblo Indonesia" client="PT Jomblo Indonesia" date="kemarin" />
                <AmReportCard link="/" title="Laporan #1 PT Jomblo Indonesia" client="PT Jomblo Indonesia" date="kemarin" />
                <AmReportCard link="/" title="Laporan #1 PT Jomblo Indonesia" client="PT Jomblo Indonesia" date="kemarin" />
            </div>

            {/* Kalender */}
            <AmCalender />
        </AmLayout>
    )
}