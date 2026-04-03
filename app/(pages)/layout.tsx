import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PagesLayout({children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}