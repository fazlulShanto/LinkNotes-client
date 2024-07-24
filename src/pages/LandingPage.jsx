import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../components/Sheet";
export default function LandingPage() {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className="w-screen relative bg-[#0f172a] h-screen flex flex-col gap-6 items-center p-6 sm:mx-auto">
            <h1 className="text-3xl font-bold  text-gray-300">
                Welcome to LinkNotes
            </h1>
            <div className="  bg-[#1e293b] text-center h-fit w-full sm:max-w-lg flex flex-col rounded-md gap-4 py-10">
                <h1>Sign In</h1>
                <p className="text-sm text-center text-white">
                    A simple note taking app
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                    <Link
                        className="px-12 py-4 rounded-md bg-indigo-700"
                        to="/signin"
                    >
                        Sign In
                    </Link>
                    <Link
                        to="/signup"
                        className="px-12 py-4 rounded-md bg-indigo-700"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
            <div>
                <button onClick={onOpenModal}>Open modal</button>
                <Modal open={open} onClose={onCloseModal} center>
                    <h2>Simple centered modal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                    </p>
                </Modal>
            </div>
            <Sheet>
                <SheetTrigger>Open</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
}
