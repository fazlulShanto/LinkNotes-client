import CheckBoxListNotes from "./noteCards/CheckBoxListNotes";
import TextNote from "./noteCards/TextNote";
import UrlNotes from "./noteCards/UrlNotes";

export default function NotesCard({ notesData }) {
    const noteType = notesData.type;
    const renderNoteUi = () => {
        switch (noteType) {
            case "TEXT_NOTE":
                return <TextNote notesData={notesData} />;
            case "URL":
                return <UrlNotes notesData={notesData} />;
            case "CHECKBOX_LIST":
                return <CheckBoxListNotes notesData={notesData} />;
            default:
                return null;
        }
    };

    return (
        <div className="card h-56 overflow-y-auto bg-accent text-black  w-full shadow-xl">
            <div className="card-body p-4">
                <h2 className="card-title">{notesData.noteTitle}</h2>
                {renderNoteUi()}
                <div className="flex overflow-x-auto hs">
                    <div className="flex space-x-2 pb-2">
                        <div className="badge badge-info font-medium pt-0.5 whitespace-nowrap">
                            Text
                        </div>
                        <div className="badge whitespace-nowrap">default</div>
                        <div className="badge badge-primary whitespace-nowrap">
                            primary
                        </div>
                        <div className="badge badge-success text-white whitespace-nowrap">
                            secondary
                        </div>
                        <div className="badge badge-secondary whitespace-nowrap">
                            +99
                        </div>
                        <div className="badge badge-accent whitespace-nowrap">
                            accent
                        </div>
                        <div className="badge badge-warning whitespace-nowrap">
                            warn
                        </div>
                        <div className="badge badge-secondary whitespace-nowrap">
                            +99
                        </div>
                        <div className="badge badge-accent whitespace-nowrap">
                            accent
                        </div>
                        <div className="badge badge-warning whitespace-nowrap">
                            warn
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
