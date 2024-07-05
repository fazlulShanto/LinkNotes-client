export default function GreetingsCard({ name = "Alice" }) {
    return (
        <div className="card bg-accent  text-black sm:w-56 w-full shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Greetings, {name}</h2>
                <p>Today is {new Date().toLocaleDateString()} </p>
                <p> {new Date().toLocaleTimeString()} </p>
            </div>
        </div>
    );
}
