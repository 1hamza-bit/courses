import { Poppins } from "next/font/google";


const poppins = Poppins({
  weight: ['400', '500', '600','700'],
  subsets: ['latin'],
});;

export default function BlueHero(props) {
  return (
      <div className="h-[40vh] flex items-center justify-center  "
       style={{ 
        backgroundImage: "linear-gradient(rgba(1, 147, 222, 0.9), rgba(1, 147, 222, 0.9)),url('breadcrumb.jpg')",
        backgroundRepeat: 'no-repeat',backgroundSize: 'cover', backgroundPosition:'center'
      }}>
        <p className="flex justify-center my-auto text-white text-4xl font-bold">{props.name}</p></div>
    
  );
}
