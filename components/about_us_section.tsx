import Image from "next/image";

const About_us_section = () => {
  return (
    <section className="flex flex-col justify-between items-center px-10 py-24 gap-20 lg:flex-row md:px-32 lg:items-start">
      <div className="flex flex-col gap-3 lg:w-[50%]">
        <h1 className="text-center text-secondary font-bold mb-8 lg:text-left">
          A PROPOS DE NOUS
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,
          voluptates molestiae? Porro enim, expedita exercitationem, animi quam
          repellat consequuntur facere ex eaque laudantium adipisci tempora
          laboriosam sint iusto eligendi tenetur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,
          voluptates molestiae? Porro enim, expedita exercitationem, animi quam
          repellat consequuntur facere ex eaque laudantium adipisci tempora
          laboriosam sint iusto eligendi tenetur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,
          voluptates molestiae? Porro enim, expedita exercitationem, animi quam
          repellat consequuntur facere ex eaque laudantium adipisci tempora
          laboriosam sint iusto eligendi tenetur.
        </p>
      </div>
      <div className="lg:w-[50%]">
        <Image
          src="/images/About-us.png"
          width={400}
          height={300}
          alt="About us image"
        />
      </div>
    </section>
  );
};

export default About_us_section;
