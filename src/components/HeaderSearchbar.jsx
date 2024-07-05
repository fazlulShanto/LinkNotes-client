import { Search } from "lucide-react";
import { useState } from "react";

export default function HeaderSearchbar() {
    const [input, setInput] = useState("");

    return (
        <div>
            <div className="hidden md:flex items-center">
                <Search size={16} />
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="p-2 bg-primary border-b border-b-transparent w-full focus:outline-none focus:border-green-300"
                />
            </div>
            <div>
                <button className="md:hidden flex items-center">
                    <Search size={28} />
                </button>
            </div>
        </div>
    );
}
