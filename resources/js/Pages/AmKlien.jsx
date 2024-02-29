import { AmTableClient } from "@/Components";
import { MyButton, MyButtonLink, OptionButton } from "@/Components/buttons";
import { SearchForm } from "@/Components/forms";
import { AmLayout } from "@/Layouts";
import {
    DocumentPlusIcon,
    FunnelIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function AmKlien({ auth, semua_client }) {

    const[ keySearch, setKeySearch ] = useState("");
    const handleChange = (event) => {
        setKeySearch(event.target.value);
    };
    
    return (
        <AmLayout
            user={auth.user}
            active={"klien"}
            breadcrumbItem={[
                { link: "/klien", text: "Klien", icon: "building" },
            ]}
        >
            <div className="w-full flex justify-between items-start">
                <h1 className={`text-h1 mb-4`}>Klien</h1>
                <OptionButton downloadTableOption={true} />
            </div>
            <div className="h-1 w-full bg-disable mb-4"></div>
            <div className="flex justify-between">
                <div className="flex">
                    <MyButtonLink link="/klien-baru" name="Klien Baru" type="primary">
                        <DocumentPlusIcon className="w-5 h-5" />
                    </MyButtonLink>
                    <MyButton className="ml-4" name="Filter" type="secondary">
                        <FunnelIcon className="w-5 h-5" />
                    </MyButton>
                </div>
                <SearchForm keySearch={keySearch} handleChange={handleChange} placeholder={"Cari Client"} />
            </div>

            {/* Tables */}
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-12">
                <AmTableClient data={semua_client} keySearch={keySearch} />
            </div>
        </AmLayout>
    )
};
