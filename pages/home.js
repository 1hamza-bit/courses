import { Poppins } from "next/font/google";
import Layout from "@/Components/Layout/Index";
import Homes from "@/Components/Home";


const poppins = Poppins({
  weight: ['400', '500', '600','700'],
  subsets: ['latin'],
});;

export default function Home() {
  return (
    <div className={Poppins.className}>
     <Layout>
      <Homes />
      </Layout>
    </div>
  );
}
