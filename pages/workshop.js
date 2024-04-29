import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Workshops from "@/Components/Workshop";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  weight: ['400', '500', '600','700'],
  subsets: ['latin'],
});;

export default function Workshop() {
  return (
    <div className={poppins.className}>
      <Header />
      <div className="h-[25vh] bg-[#0193DE]"></div>
      <Workshops />
      <Footer />
    </div>
  );
}
