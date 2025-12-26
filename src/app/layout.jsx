import { Header } from "@/components/Header";
import "../styles/globals.css";
import Footer from "@/components/Footer";
 

export const metadata = {
  title: "Noxbridge",
  description: "Noxbridge website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
