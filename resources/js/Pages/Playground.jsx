import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Playground({ auth }) {
    const data = [
        { name: "John Doe", age: 25 },
        { name: "Jane Smith", age: 30 },
        { name: "Alice Johnson", age: 35 },
        { name: "Bob Brown", age: 40 },
        { name: "Charlie Davis", age: 45 },
        { name: "David Wilson", age: 50 },
        // Tambahkan data lain sesuai kebutuhan
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Cari..."
                value={searchTerm}
                onChange={handleChange}
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        {/* Tambahkan kolom lain sesuai kebutuhan */}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            {/* Tambahkan kolom lain sesuai kebutuhan */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
