import Workshops from "@/Components/Workshop";
import { Poppins } from "next/font/google";
import Layout from "@/Components/Layout/Index";
import BlueHero from "@/Components/reUsable/blueHero";


const poppins = Poppins({
  weight: ['400', '500', '600','700'],
  subsets: ['latin'],
});;



export default function Workshop() {
  return (
    <div className={poppins.className}>
     <Layout>
      <BlueHero name={"Workshop"} />
      <Workshops />
      </Layout>
    </div>
  );
}
