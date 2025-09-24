import { RGB } from "@/types";
import { getLuminance } from "./getLuminance";

export function getContrastRatio(foregroundColor: RGB, backgroundColor: RGB) {
    const foregroundLumiance = getLuminance(foregroundColor);
    const backgroundLuminance = getLuminance(backgroundColor);
    return backgroundLuminance < foregroundLumiance
        ? ((backgroundLuminance + 0.05) / (foregroundLumiance + 0.05))
        : ((foregroundLumiance + 0.05) / (backgroundLuminance + 0.05));
};