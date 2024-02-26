import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Playground({ auth }) {
    return (
        <div className="p-20 flex flex-col">
            {/* Input Text */}
            <input
                type="text"
                className="p-3 rounded-lg border border-tertiary hover:border-primary-500 focus:border-primary focus:ring-primary text-tertiary text-body"
                placeholder="Input Text"
            />
            {/* Input Date */}
            <input
                type="date"
                className="p-3 rounded-lg border border-tertiary hover:border-primary-500 focus:border-primary focus:ring-primary text-tertiary text-body"
                name="Hua"
            />
            {/* Select */}
            <select
                name=""
                id=""
                className="p-3 rounded-lg border border-tertiary hover:border-primary-500 focus:border-primary focus:ring-primary text-tertiary text-body appearance-none"
            >
                <option value="">Hua 1</option>
                <option value="">Hua 2</option>
                <option value="">Hua 3</option>
                <option value="">Add New</option>
            </select>
            

            {/* Search */}
            <div className="p-3 rounded-lg border border-tertiary hover:border-primary text-tertiary text-body flex justify-between">
                <input type="text" className="w-full border-0 focus:ring-0 p-0" placeholder="Search" />
                <MagnifyingGlassIcon className="w-5 h-5" stroke-width="3" />
            </div>
        </div>
    );
}
