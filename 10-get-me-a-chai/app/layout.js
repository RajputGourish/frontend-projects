import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sessionwrapper from "@/components/Sessionwrapper";



export const metadata = {
  title: "Get me A Chai - Fund Your Project with Chai",
  description: "This website is a crowdfunding platform for creaters.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-size-[20px_20px] text-white">
        <Sessionwrapper>
          <Navbar />
          <div className="min-h-[85.4vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-size-[20px_20px] text-white">
            {children}
          </div>
          <Footer />
          <script src="https://cdn.lordicon.com/lordicon.js"></script>
        </Sessionwrapper>
      </body>
    </html>
  );
}
