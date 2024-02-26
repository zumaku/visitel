import Buttons from "@/Components/Buttons";
import AmLayout from "@/Layouts/AmLayout";
import AmReportCard from "@/Components/AmReportCard";
import AmCalender from "@/Components/AmCalender";
import { Head } from "@inertiajs/react";

import { DocumentPlusIcon } from "@heroicons/react/24/outline";
export default function AmDashboard({ auth, semua_laporan }) {
    const laporan_terbaru = semua_laporan.slice(0, 3);

    return (
        <AmLayout
            user={auth.user}
            active={"beranda"}
            breadcrumbItem={[
                { link: "/dashboard", text: "Dashboard", icon: "home" },
            ]}
        >
            <Head title="Beranda" />

            <div className="flex justify-between items-start">
                <div className="">
                    <h1 className={`text-h1`}>
                        <span className="text-primary">Hi,</span> {auth.user.name}
                    </h1>
                    <p className={`text-body mb-4`}>
                        Account Manager Divisi Bissunis Service at Witel Makassar,
                        Sul-Sel.
                    </p>
                </div>
                <Buttons className="ml-4" name="Laporan Baru" >
                    <DocumentPlusIcon className="w-5 h-5" />
                </Buttons>
            </div>

            <div className="h-1 w-full bg-disable mb-4"></div>

            {/* Laporan Terbaru */}
            <h2 className={`text-h2 mb-4`}>Laporan Terbaru</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 w-full justify-between mb-8">
                {laporan_terbaru.map((laporan, index) => (
                    <AmReportCard
                        key={index}
                        link={laporan.slug}
                        title={`${laporan.name} - ${laporan.client_name}`}
                        activity={laporan.activity}
                        date={laporan.date}
                    />
                ))}
            </div>

            {/* Kalender */}
            <AmCalender data={semua_laporan} />
        </AmLayout>
    );
}
