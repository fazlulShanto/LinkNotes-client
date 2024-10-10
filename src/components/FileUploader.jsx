import {
    generateReactHelpers,
    generateUploadDropzone,
} from "@uploadthing/react";
import { XCircle } from "lucide-react";
import { ImageDownIcon } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { LOCAL_STORAGE_TOKEN } from "../utils/Contents";
import { baseUrl } from "./../lib/axios";
import { stateActions, useAppContext } from "../exports";
import { updateUserProfileImage } from "../services/userService";
const BACKEND_URL = `${baseUrl}/api/uploadthing`;

const initOpts = {
    url: BACKEND_URL,
};

export const UploadDropzone = generateUploadDropzone(initOpts);

export const { useUploadThing } = generateReactHelpers(initOpts);
const allwedMimeTypes = ["image/jpeg", "image/png"];
// Generate the React helpers

export default function ImageUploader({
    profilePhoto = "https://i.pinimg.com/736x/bc/6a/ed/bc6aed67290ffba3d5a379f7023c8d34.jpg",
}) {
    const { dispatch } = useAppContext();
    const [images, setImages] = useState(profilePhoto);
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState("");

    const sendUpdateAvatarRequest = async (newUrl = "") => {
        console.log("callied with", newUrl);
        try {
            const userData = await updateUserProfileImage(newUrl);
            dispatch({
                action: stateActions.updateUserInfo,
                data: userData,
            });
            console.log("updated ❌❌ user Data", userData);
        } catch (error) {
            console.log(error);
        }
    };

    const { startUpload, isUploading: isLoading } = useUploadThing(
        "imageUploader",
        {
            headers: () => ({
                token: token,
            }),
            onClientUploadComplete: (files = []) => {
                setImages(files[0].url);
                setIsUploading(false);
                sendUpdateAvatarRequest(files[0].url);
                setUploadError("");
            },
            onUploadError: (error) => {
                setIsUploading(false);
                setUploadError(error?.message);
            },
        }
    );

    const handleFileChange = useCallback(
        async (files) => {
            if (!files || !Array.isArray(files)) {
                setUploadError("Something wrong happend.");
                return;
            }
            if (files.length > 1) {
                setUploadError(
                    "Select only one image & file type must be " +
                        allwedMimeTypes
                            .map((v) => v.split("/").pop())
                            .join(" ") +
                        "."
                );
                return;
            }
            if (!allwedMimeTypes.includes(files[0]?.type)) {
                setUploadError(
                    `file type must be ${allwedMimeTypes.map((v) => v.split("/").pop()).join(" ")}`
                );
                return;
            }
            if (Math.ceil(files[0].size / 1000) > 512) {
                setUploadError("Max allowed file size is 512kb");
                return;
            }
            setIsUploading(true);
            await startUpload(files);
        },
        [startUpload]
    );

    const renderUploadthingFileUploader = () => {
        return (
            <UploadDropzone
                config={{ mode: "manual" }}
                appearance={{
                    button: "hidden",
                    container: "text-gray-300 py-4 gap-2.5 mt-0",
                    label: "mt-0",
                    uploadIcon: "text-green-400",
                }}
                endpoint="imageUploader"
                onChange={handleFileChange}
            />
        );
    };

    const renderUploadedImage = () => {
        return (
            <div className="w-full relative border border-gray-500 border-dashed flex justify-center py-3 rounded-md">
                <div className="w-[120px] h-[120px] border-2 border-sky-500 overflow-hidden rounded-full">
                    <img
                        src={images} // Replace with your image source
                        alt="Sample"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute top-2 right-2">
                    <button
                        onClick={() => {
                            setImages("");
                        }}
                    >
                        <XCircle className="h-4 w-4 sm:w-6 sm:h-6 hover:text-red-500 text-gray-300 focus-visible:border-0" />
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-2 p-4">
            <h1 className="text-md font-bold">Profile Photo</h1>
            {/* <WhatServer /> */}
            {images?.length
                ? renderUploadedImage()
                : renderUploadthingFileUploader()}
            {uploadError && (
                <p className="text-red-500 text-sm">{uploadError}</p>
            )}
        </div>
    );
}
function WhatServer() {
    const [serverResponse, setServerResponse] = useState("");
    useEffect(() => {
        fetch(new URL(BACKEND_URL))
            .then((res) => res.json())

            .then((t) => {
                setServerResponse(t);
            });
    }, []);
    return (
        <div className="text-xl font-bold">
            {JSON.stringify(serverResponse, null, 2) || "Getting server..."}
        </div>
    );
}
