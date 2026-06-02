export type ProductProfileKey = "platform" | "voice";

const rawProfile = (import.meta.env.VITE_PRODUCT_PROFILE || "platform").toLowerCase();
const validProfiles: ProductProfileKey[] = ["platform", "voice"];
const normalizedProfile: ProductProfileKey = validProfiles.includes(rawProfile as ProductProfileKey)
  ? (rawProfile as ProductProfileKey)
  : "platform";

if (rawProfile && !validProfiles.includes(rawProfile as ProductProfileKey)) {
  console.warn(
    `[productProfile] Unsupported VITE_PRODUCT_PROFILE "${rawProfile}". Falling back to "platform".`
  );
}

export const productProfile: {
  key: ProductProfileKey;
  brandName: string;
  appInitial: string;
  platformBrandName: string;
  voiceOveragePerMinute: number;
} = normalizedProfile === "voice"
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
  "/dashboard",
  "/inbox",
  "/ai-agents",
  "/call-analytics",
  "/booking-sheet",
  "/settings",
  "/auth",
];

export const VOICE_FOCUSED_FALLBACK_PATH = "/dashboard";

export const isVoiceFocusedProduct = productProfile.key === "voice";

export function isPathAllowedForCurrentProfile(pathname: string): boolean {
  if (!isVoiceFocusedProduct) return true;
  return VOICE_FOCUSED_ALLOWED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );
}
