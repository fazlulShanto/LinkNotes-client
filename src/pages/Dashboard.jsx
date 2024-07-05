/* eslint-disable react/jsx-key */
import GreetingsCard from "../components/GreetingsCard";
import NotesCard from "../components/NotesCard";

export default function Dashboard() {
    const dummyData = [
        {
            noteTitle: "Bookmarks",
            noteContent: {
                title: "Go to Youtube",
                value: "https://youtube.com",
            },
            type: "URL",
        },
        {
            noteTitle: "Text Note",
            noteContent: {
                value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate. Velit ipsa aut labore, reiciendis quae est pariatur accusamus neque similique necessitatibus. Dolor dolorum temporibus aut eius quidem assumenda delectus.",
            },
            type: "TEXT_NOTE",
        },
        {
            noteTitle: "Text Note",
            noteContent: {
                value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate. Velit ipsa aut labore, reiciendis quae est pariatur accusamus neque similique necessitatibus. Dolor dolorum temporibus aut eius quidem assumenda delectus.",
            },
            type: "TEXT_NOTE",
        },
        {
            noteTitle: "Text Note",
            noteContent: {
                value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate. Velit ipsa aut labore, reiciendis quae est pariatur accusamus neque similique necessitatibus. Dolor dolorum temporibus aut eius quidem assumenda delectus.",
            },
            type: "TEXT_NOTE",
        },
        {
            noteTitle: "Text Note",
            noteContent: {
                value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate. Velit ipsa aut labore, reiciendis quae est pariatur accusamus neque similique necessitatibus. Dolor dolorum temporibus aut eius quidem assumenda delectus.",
            },
            type: "TEXT_NOTE",
        },
        {
            noteTitle: "Text Note",
            noteContent: {
                value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate. Velit ipsa aut labore, reiciendis quae est pariatur accusamus neque similique necessitatibus. Dolor dolorum temporibus aut eius quidem assumenda delectus.",
            },
            type: "TEXT_NOTE",
        },
        {
            noteTitle: "Text Note",
            noteContent: {
                value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate. Velit ipsa aut labore, reiciendis quae est pariatur accusamus neque similique necessitatibus. Dolor dolorum temporibus aut eius quidem assumenda delectus.",
            },
            type: "TEXT_NOTE",
        },
        {
            noteTitle: "Text Note",
            noteContent: {
                value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate. Velit ipsa aut labore, reiciendis quae est pariatur accusamus neque similique necessitatibus. Dolor dolorum temporibus aut eius quidem assumenda delectus.",
            },
            type: "TEXT_NOTE",
        },
        {
            noteTitle: "Text Note",
            noteContent: {
                value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate. Velit ipsa aut labore, reiciendis quae est pariatur accusamus neque similique necessitatibus. Dolor dolorum temporibus aut eius quidem assumenda delectus.",
            },
            type: "TEXT_NOTE",
        },
        {
            noteTitle: "Text Note",
            noteContent: {
                value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate. Velit ipsa aut labore, reiciendis quae est pariatur accusamus neque similique necessitatibus. Dolor dolorum temporibus aut eius quidem assumenda delectus.",
            },
            type: "TEXT_NOTE",
        },
        {
            noteTitle: "Text Note",
            noteContent: {
                value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate. Velit ipsa aut labore, reiciendis quae est pariatur accusamus neque similique necessitatibus. Dolor dolorum temporibus aut eius quidem assumenda delectus.",
            },
            type: "TEXT_NOTE",
        },
        {
            noteTitle: "Text Note",
            noteContent: {
                value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate. Velit ipsa aut labore, reiciendis quae est pariatur accusamus neque similique necessitatibus. Dolor dolorum temporibus aut eius quidem assumenda delectus.",
            },
            type: "TEXT_NOTE",
        },
        {
            noteTitle: "Text Note",
            noteContent: {
                value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate. Velit ipsa aut labore, reiciendis quae est pariatur accusamus neque similique necessitatibus. Dolor dolorum temporibus aut eius quidem assumenda delectus.",
            },
            type: "TEXT_NOTE",
        },
        {
            noteTitle: "Text Note",
            noteContent: {
                value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate. Velit ipsa aut labore, reiciendis quae est pariatur accusamus neque similique necessitatibus. Dolor dolorum temporibus aut eius quidem assumenda delectus.",
            },
            type: "TEXT_NOTE",
        },
        {
            noteTitle: "Todo List",
            noteContent: {
                value: [
                    {
                        isChecked: false,
                        text: "Note 1 content",
                    },
                    {
                        isChecked: false,
                        text: "Note 1 content",
                    },
                    {
                        isChecked: true,
                        text: "Note 1 content",
                    },
                ],
            },
            type: "CHECKBOX_LIST",
        },
    ];
    return (
        <div className="w-full  p-2 flex flex-col gap-2">
            <div className="flex w-full flex-col sm:flex-row gap-2">
                <GreetingsCard />
                <GreetingsCard />
                <GreetingsCard />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cent w-full gap-2">
                {dummyData.map((data) => (
                    <div key={Math.random()}>
                        <NotesCard notesData={data} />
                    </div>
                ))}
            </div>
        </div>
    );
}
