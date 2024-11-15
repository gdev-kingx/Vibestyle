export const COUPON_CODES = {
    SOTDAY: "SOTDAY",
    BFRIDAY: "BFRIDAY",
    XMAS2024: "XMAS2024",
    NY2025: "NY2025",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;