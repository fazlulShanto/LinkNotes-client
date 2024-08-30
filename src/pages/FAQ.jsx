import React from "react";
import AppLogo from "../assets/appLogoWithoutBG.png";
import { appName, FAQS } from "../utils/Contents";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/Accordion";

import { useState } from "react";
import { useEffect } from "react";
import { getApiHealth } from "../services/utilityService";
import { BadgeCheck } from "lucide-react";

import { cn, Loader } from "../exports";
import { OctagonX } from "lucide-react";

function FAQ() {
    const [serveStatus, setServerStatus] = useState({
        message: "Not Running",
        status: false,
    });
    const [loading, setLoading] = useState(false);
    const faqs = FAQS;
    const renderBranding = () => {
        return (
            <div className="flex items-center justify-center p-6">
                <div className=" mr-1">
                    <img className="w-12" src={AppLogo} />
                </div>
                <span className="font-bold text-xl sm:text-3xl">{appName}</span>
            </div>
        );
    };
    const renderSingleFaq = (faq) => {
        return (
            <Accordion key={faq?.id} type="single" collapsible>
                <AccordionItem value={`faq-item-${faq?.id}`}>
                    <AccordionTrigger> {faq?.title ?? ""} </AccordionTrigger>
                    <AccordionContent>
                        {faq?.description ?? ""}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        );
    };
    const fetch = async () => {
        setLoading(true);
        try {
            await getApiHealth();
            setServerStatus({ message: "Up & Running", status: true });
        } catch (error) {
            console.log(error);
            setServerStatus({
                message: "Something went Wrong",
                status: false,
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetch();
    }, []);

    const handleReCheckServerStatus = async () => {
        fetch();
    };

    const renderServerStatus = () => {
        if (loading) {
            return (
                <div className="w-full flex flex-col h-full justify-center items-center">
                    <Loader />
                </div>
            );
        }
        return (
            <>
                <div className="flex gap-2 items-center justify-center ">
                    <span className=" text-lg">Server status:</span>
                    <div
                        className={cn(
                            "flex gap-2 items-center px-2 py-1 rounded-full text-xs font-medium capitalize  bg-red-950 text-red-500",
                            {
                                "bg-green-950 text-green-500":
                                    serveStatus.status,
                            }
                        )}
                    >
                        {serveStatus.status ? (
                            <>
                                <BadgeCheck />
                                <span className="text-md font-semibold">
                                    {serveStatus.message}
                                </span>
                            </>
                        ) : (
                            <>
                                <OctagonX />
                                <span className="text-md font-semibold">
                                    {serveStatus.message}
                                </span>
                            </>
                        )}
                    </div>
                </div>
                <button
                    onClick={handleReCheckServerStatus}
                    className="btn mx-auto bg-sky-700 text-white no-animation btn-sm w-full  sm:w-2/5"
                >
                    Re-Check
                </button>
            </>
        );
    };
    return (
        <div className="w-screen flex flex-col h-screen bg-slate-900 gap-4">
            {renderBranding()}
            <h1 className="text-center text-4xl sm:text-5xl">FAQs</h1>
            <div className="w-full sm:mt-8 flex justify-center items-center">
                <div className="w-full px-4  sm:w-1/2">
                    {faqs.map((v) => renderSingleFaq(v))}
                </div>
            </div>
            <div className="p-8 flex flex-col gap-4 border border-gray-500 bg-slate-950 border-dashed rounded-md w-11/12 sm:w-1/2 self-center">
                {renderServerStatus()}
            </div>
        </div>
    );
}

export default FAQ;
