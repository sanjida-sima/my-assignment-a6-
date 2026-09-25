import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import FitlogProvider  from '@/components/providerss/FitlogProvider'

const geistSans = Geist ({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ["latin"]
});

export const metadata: Metadata = {
 title : 'Fitlog',
  description: 'Workout Library'
};


export default function RootLayout(
  {
    children, 
  } :Readonly <{
    children: React.ReactNode
  }>
)

{

 return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         
         <FitlogProvider>
        <Navbar/>
        <div>{children}</div>


        </FitlogProvider>
      </body>
    </html>
  );


}






 
