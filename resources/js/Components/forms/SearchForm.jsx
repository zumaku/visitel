import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchForm({}) {
    return (
        <div className="p-3 rounded-lg border-2 border-tertiary hover:border-primary text-tertiary text-body flex justify-between">
            <input type="text" className="w-full border-0 focus:ring-0 p-0" placeholder="Search" />
            <MagnifyingGlassIcon className="w-5 h-5" stroke-width="3" />
        </div>
    )
};
