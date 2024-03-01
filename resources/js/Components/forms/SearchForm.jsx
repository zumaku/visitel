import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchForm({
    keySearch,
    handleChange,
    placeholder,
    disabled = false,
}) {
    return (
        <div className={`p-3 rounded-lg border-2 ${
            disabled ? "border-tertiary-300 bg-disable hover:border-tertiary-300" : "border-tertiary hover:border-primary"
        } text-tertiary text-body flex justify-between`}>
            <input
                type="text"
                className={`w-full border-0 focus:ring-0 focus:border-0 outline-none p-0 ${disabled && 'bg-disable'}`}
                disabled={disabled}
                placeholder={placeholder}
                value={keySearch}
                onChange={handleChange}
            />
            <MagnifyingGlassIcon
                className={`w-5 h-5 ${disabled && 'text-tertiary-300'}`}
                stroke-width="3"
            />
        </div>
    );
}
