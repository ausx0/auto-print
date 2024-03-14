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
        <div className=" w-full page-header px-4 h-[20vh]">
          <Header />
          <div className="w-[85%] mx-auto my-2 ">
            <hr className="border-primary border-[2px]" /> {/* Add this line */}
          </div>
        </div>
        <div className="min-h-[100vh] p-4  ">
          <table>
            <thead>
              <tr>
                <td>
                  <div className="page-header-space"></div>
                </td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{children}</td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td>
                  <div className="page-footer-space"></div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="  w-full bg-primary page-footer p-4 h-[15vh]">
          <Footer />
        </div>
      </div>
    </>
  );
}
