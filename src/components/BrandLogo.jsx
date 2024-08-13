import React from "react";
import AppLogo from "../assets/appLogoWithoutBG.png";
import { appName } from "../utils/Contents.jsx";

export default function BrandLogo() {
    return <img src={AppLogo} alt={appName} />;
}
