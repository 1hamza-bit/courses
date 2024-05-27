import { Poppins } from "next/font/google";
import Layout from "@/Components/Layout/Index";
import BlueHero from "@/Components/reUsable/blueHero";
import GalleryPage from "@/Components/Gallery";
import Index from "@/Components/CourseDetail";


const poppins = Poppins({
  weight: ['400', '500', '600','700'],
  subsets: ['latin'],
});;

export default function page() {
  return (
    <div className={poppins.className}>
     <Layout>
      <BlueHero name={"Web Automation"} />
      <Index/> 
      </Layout>
    </div>
  );
}
