import Header from "@/Components/Layout/Header";
import Footer from "@/Components/Layout/Footer";
import Layout from "@/Components/Layout/Index";
import Homes from "@/Components/Home";
import { Poppins } from "next/font/google";


export default function Home() {
  return (
    <>
      {/* <div className={Poppins.className}> */}
     <Layout>
      <Homes />
      </Layout>
    {/* </div> */}
    </>
  );
}
