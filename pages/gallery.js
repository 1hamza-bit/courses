import Header from "@/Components/Layout/Header";
import Footer from "@/Components/Layout/Footer";
import { Poppins } from "next/font/google";
import Layout from "@/Components/Layout/Index";
import BlueHero from "@/Components/reUsable/blueHero";
import GalleryPage from "@/Components/Gallery";


const poppins = Poppins({
  weight: ['400', '500', '600','700'],
  subsets: ['latin'],
});;

export default function Gallery() {
  return (
    <div className={poppins.className}>
     <Layout>
      <BlueHero name={"Gallery"} />
      <GalleryPage />
      </Layout>
    </div>
  );
}
