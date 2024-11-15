import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";
import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
async function SotDayBanner() {
    const sale = await getActiveSaleByCouponCode(COUPON_CODES.SOTDAY);

    if (!sale) {
        return null;
    }

    return (
        <div className="bg-gradient-to-r from-red-600 to-black text-white px-6 py-10 mx-4 mt-2 rounded-lg shadow-lg">
            Student of the Day Sale
        </div>
    )
}

export default SotDayBanner
