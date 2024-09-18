import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact Title',
    description: 'Contact Description',
    keywords: ['Contact Page', 'Contact Information']
}

export default function ContactPage(){
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}