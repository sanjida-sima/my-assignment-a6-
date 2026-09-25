
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { FirlogProvider } from "../components/providerss/FitlogProvider";

export default function RootLayout({ children }: 
  
  Readonly <{
    children: React.ReactNode;
  }>
  // LayoutProps<"/">
  ) 
  {
  return (
    <html
      lang="en"
      data-theme="light">
      <body>
      <FitlogProvider>

        <Navbar/>
        <div>{children}</div>
       </FitlogProvider>
      </body>
    </html>
  );
}
