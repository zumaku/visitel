import { MyButton } from "@/Components/buttons";
import { AmLayout } from "@/Layouts";
import { DocumentPlusIcon, EllipsisHorizontalCircleIcon, FunnelIcon } from "@heroicons/react/24/outline";

export default function AmLaporan({auth}) {

    return (
        <AmLayout
            user={auth.user}
            active={"laporan"}
            breadcrumbItem={[
                { link: "/laporan", text: "Laporan", icon: "docs" },
            ]}
        >
            <div className="w-full flex justify-between items-start">
                <h1 className={`text-h1 mb-4`}>Laporan</h1>
                <button>
                    <EllipsisHorizontalCircleIcon className="w-10 h-10" />
                </button>
            </div>
            <div className="h-1 w-full bg-disable mb-4"></div>
            <div className="flex">
                <div className="flex">
                    <MyButton name="Laporan Baru" type="primary" >
                        <DocumentPlusIcon className="w-5 h-5" />
                    </MyButton>
                    <MyButton className="ml-4" name="Filter" type="secondary" >
                        <FunnelIcon className="w-5 h-5" />
                    </MyButton>
                </div>
            </div>
        </AmLayout>
    );
}
