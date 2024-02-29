import { TagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

export default function EditorTags({ tagsString, setTagsString, placeholder = "Add tags", }) {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Menyiapkan tags awal berdasarkan tagsString
    useEffect(() => {
        if (tagsString) {
            const initialTags = tagsString.split(",");
            setTags(initialTags);
        }
    }, [tagsString]);

    // Memperbarui input value ketika pengguna mengetik
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Menambahkan tag ke dalam daftar tags ketika tombol Enter atau koma ditekan
    const handleInputKeyDown = (e) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            const tagValue = inputValue.trim();
            if (tagValue) {
                setTags([...tags, tagValue]);
                setInputValue("");
                setTagsString([...tags, tagValue].join(","));
            }
        }
    };

    // Menghapus tag dari daftar
    const handleTagRemove = (tagToRemove) => {
        const updatedTags = tags.filter((tag) => tag !== tagToRemove);
        setTags(updatedTags);
        setTagsString(updatedTags.join(","));
    };

    return (
        <div className="border-2 rounded-md p-3 flex flex-start">
            <TagIcon className="w-6" stroke-width="2" />
            <div className="w-full ml-2">
                <div className="mb-2 flex flex-wrap">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="py-1 px-2 border border-tertiary rounded-md flex-center mr-2 mb-2"
                        >
                            <p className="mr-2">{tag}</p>
                            <button onClick={() => handleTagRemove(tag)}>
                                <XMarkIcon
                                    className="w-4 h-4 text-tertiary hover:text-primary"
                                    stroke-width="2"
                                />
                            </button>
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    className="w-full py-1 px-2 border-2 rounded-md border-disable outline-tertiary focus:ring-0"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}
