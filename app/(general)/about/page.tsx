import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About Title',
    description: 'About Description',
    keywords: ['About Page', 'About Information']
  }

export default function AboutPage(){
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}