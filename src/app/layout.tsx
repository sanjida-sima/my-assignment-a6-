
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
// import { Provider } from "../components/providerss/Provider";






export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light">
      <body>


        <Navbar/>
        <div>{children}</div>
      </body>
    </html>
  );
}
