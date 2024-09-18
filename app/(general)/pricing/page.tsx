import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Pricing Title',
    description: 'Pricing Description',
    keywords: ['Pricing Page', 'Pricing Information']
}

export default function PricingPage(){
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}