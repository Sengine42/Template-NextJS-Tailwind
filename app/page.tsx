import Image from "next/image";
import Service from "@/components/ui/Service";
import Footer from "@/components/Footer";
import OurCustomer from "@/components/ui/OurCustomer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container mx-auto blog my-20 lg:flex gap-5">
        <div className=" justify-center px-10 my-auto">
          <h1 className="text-2xl text-orange-500  
          text-left font-bold">
          Hello My Template With Tail Wind
          </h1>
          <p className=" text-justify my-10 text-sm">
            Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Excepturi ab doloremque 
            dolorem illo, amet earum voluptatem repellat 
            et consequuntur maxime minus ducimus officia, 
            soluta veritatis neque consequatur eos ex incidunt 
            similique exercitationem corrupti! Necessitatibus ad esse.
          </p>
          <Link href='/register' className="bg-orange-500 rounded-full px-5 py-2 text-white font-medium w-auto hover:bg-orange-400">
            Register for free
          </Link>
        </div>        
        <div className="my-auto sm: mt-5">
          <img className="rounded-md" src="https://media.istockphoto.com/id/1979289147/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B8%AB%E0%B9%8C%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%82%E0%B8%99%E0%B8%B2%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%97%E0%B8%84%E0%B9%82%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%A2%E0%B8%B5-ai-%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B8%AB%E0%B9%8C%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A8.jpg?s=2048x2048&w=is&k=20&c=g4SIsuKOfwVrXDl87TJNfaSNz56u_hKLB2MqbZ1njCk=" alt="" />
        </div>
      </div>
      
      <div className="container mx-auto">
        <div className=" justify-center px-10 my-auto bg-gray-200 rounded-lg pt-3 pb-2">
          <h1 className="text-2xl text-orange-500 text-left font-bold">
            Service
          </h1>
          <Service />
        </div>        
      </div>

      <div className="container mx-auto mt-20">
        <div className=" justify-center px-10">
          <h1 className="text-2xl text-orange-500 text-left font-bold">
            Our customer
          </h1>
          <OurCustomer/>
        </div>        
      </div>

      <div className="container mx-auto">
        <Footer/>
      </div>
    </>
  );
}
