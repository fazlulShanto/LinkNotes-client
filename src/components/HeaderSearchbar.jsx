import { Search } from "lucide-react";
import { useState } from "react";

export default function HeaderSearchbar() {
    const [input, setInput] = useState("");

    return (
        <div>
            <div className="hidden md:flex md:gap-2 items-center">
                <Search size={24} />
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="px-2 bg-primary border-b border-b-transparent w-full focus:outline-none focus:border-blue-300"
                />
            </div>
        </div>
    );
}
