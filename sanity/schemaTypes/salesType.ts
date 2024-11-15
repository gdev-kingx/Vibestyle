import { TagIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const salesType = defineType({
    name: 'sales',
    title: 'Sale',
    type: 'document',
    icon: TagIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Sale Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Sale Description',
            type: 'text',
        }),
        defineField({
            name: 'discountAmount',
            title: 'Discount Amount',
            type: 'number',
            description: 'Amount off in percentage or fixed value',
        }),
        defineField({
            name: 'couponCode',
            title: 'Coupon Code',
            type: 'string',
        }),
        defineField({
            name: 'validFrom',
            title: 'Valid From',
            type: 'datetime',
        }),
        defineField({
            name: 'validUntil',
            title: 'Valid Until',
            type: 'datetime',
        }),
        defineField({
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            initialValue: true,
            description: 'Toggle to activate/deactivate the sale',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            discountAmount: 'discountAmount',
            couponCode: 'couponCode',
            isActive: 'isActive',
        },
        prepare(select) {
            const { title, discountAmount, couponCode, isActive } = select;
            const status = isActive ? 'Active' : 'Inactive';
            return {
                title: title,
                subtitle: `${discountAmount}% off - Code: ${couponCode} - ${status}`,
            };
        },
    },
})
