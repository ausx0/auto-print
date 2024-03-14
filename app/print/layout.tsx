import Footer from "./components/Footer";
import Header from "./components/header";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <div className=" h-[15vh] p-4">
          <Header />
        </div>
        <div className="min-h-[70vh]">{children}</div>
        <div className=" h-[15vh] p-4">
          <Footer />
        </div>
      </div>
    </>
  );
}
