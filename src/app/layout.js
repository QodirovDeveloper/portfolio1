import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Qodirov Hasanboyning portfolio sahifasi",
  description:
    "Hasanboy Qodirov haqida barcha ma'lumotlarni bu yerdan topishingiz mumkin.",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="uz">
      <body className="font-source-sans font-normal">
        <Header />
        <main className="grow">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
