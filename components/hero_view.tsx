import Image from "next/image";
import Contact_us_button from "./contact_us_button";
import Navbar from "./navbar";

const Hero_view = () => {
  return (
    <section className=" bg-[url('/images/HEROVIEW_RESPONSIVE.png')] bg-cover bg-no-repeat h-screen w-full flex flex-col px-10 lg:px-32 justify-center md:bg-[url('/images/background.jpg')]">
      <Navbar />
      <div className="h-full w-full flex flex-col items-center justify-center py-10 gap-7 lg:flex-row lg:gap-0 lg:justify-between">
        <div className="flex flex-col gap-5 lg:w-[50%] lg:gap-9">
          <h1 className="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            officia suscipit libero vel vero repellat dolorem quo quam hic, ipsa
            iure ratione minus distinctio quidem, asperiores dignissimos ut
            molestiae blanditiis?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis officia suscipit libero vel vero
            repellat dolorem quo quam hic, ipsa iure ratione minus distinctio
            quidem, asperiores dignissimos ut molestiae blanditiis?
          </h1>
          <h3 className="font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            autem consequuntur adipisci!
          </h3>
          <Contact_us_button />
        </div>
        <div>
          <Image
            alt="circle image"
            width={500}
            height={800}
            src="/images/circle.png"
            className="md:w-[400px] md:h-auto lg:w-[500px] xl:w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero_view;
