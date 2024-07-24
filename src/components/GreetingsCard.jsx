import { memo } from "react";

function GreetingsCard({ userInfo }) {
    const name = userInfo.firstName + " " + userInfo.lastName;
    return (
        <div className="card bg-slate-700  text-white sm:w-56 w-full shadow-xl">
            <div className="p-4">
                <h2 className="font-semibold">Greetings, {name}</h2>
                <p>Today is {new Date().toLocaleDateString()} </p>
                <p> {new Date().toLocaleTimeString()} </p>
            </div>
        </div>
    );
}
export default memo(GreetingsCard);
