import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Kadirov Hasanboy's Portfolio Page",
  description:
    "You can find all the information about Hasanboy Kadirov here.",
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
