export type ProductProfileKey = "platform" | "voice";

const rawProfile = (import.meta.env.VITE_PRODUCT_PROFILE || "platform").toLowerCase();

export const productProfile: {
  key: ProductProfileKey;
  brandName: string;
  appInitial: string;
  platformBrandName: string;
  voiceOveragePerMinute: number;
} = rawProfile === "voice"
  ? {
      key: "voice",
      brandName: "Callova",
      appInitial: "C",
      platformBrandName: "Thermi",
      voiceOveragePerMinute: 0.32,
    }
  : {
      key: "platform",
      brandName: "Thermi",
      appInitial: "T",
      platformBrandName: "Thermi",
      voiceOveragePerMinute: 0.32,
    };

export const VOICE_FOCUSED_ALLOWED_PATHS = [
  "/home",
  "/dashboard",
  "/inbox",
  "/ai-agents",
  "/call-analytics",
  "/booking-sheet",
  "/settings",
  "/auth",
];

export const isVoiceFocusedProduct = productProfile.key === "voice";

export function isPathAllowedForCurrentProfile(pathname: string): boolean {
  if (!isVoiceFocusedProduct) return true;
  return VOICE_FOCUSED_ALLOWED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );
}
