import Navbar from "@/modules/Gloabl Modules/Navbar";
import Footer from "@/modules/Gloabl Modules/Footer";

export default function RootLayout({ children, params }) {
  return (
    <div id="Home">
      <Navbar params={params} />
      {children}
      <Footer params={params} />
    </div>
  );
}
