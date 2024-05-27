import { Poppins } from "next/font/google";
import Layout from "@/Components/Layout/Index";
import BlueHero from "@/Components/reUsable/blueHero";
import Event from "@/Components/Events";


const poppins = Poppins({
  weight: ['400', '500', '600','700'],
  subsets: ['latin'],
});;

export default function Events() {
  return (
    <div className={poppins.className}>
     <Layout>
      <BlueHero name={"Events"} />
      <Event />
      </Layout>
    </div>
  );
}
