import Header from "@/Components/Layout/Header";
import Footer from "@/Components/Layout/Footer";
import Workshops from "@/Components/Workshop";
import { Poppins } from "next/font/google";
import Layout from "@/Components/Layout/Index";


const poppins = Poppins({
  weight: ['400', '500', '600','700'],
  subsets: ['latin'],
});;

export default function Workshop() {
  return (
    <div className={poppins.className}>
     <Layout>
      <div className="h-[45vh] flex items-center justify-center  "
       style={{ 
        backgroundImage: "linear-gradient(rgba(1, 147, 222, 0.9), rgba(1, 147, 222, 0.9)),url('https://t3.ftcdn.net/jpg/05/79/48/52/360_F_579485255_hzHox0stuQmBx5QViwnQqQjk7RD2AJza.jpg')",
       
      }}>
        <p className="flex justify-center my-auto text-white text-[28px]">Workshop</p></div>
      <Workshops />
      </Layout>
    </div>
  );
}
