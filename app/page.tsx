import About_us_section from "@/components/about_us_section";
import Hero_view from "@/components/hero_view";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero_view />
      <About_us_section />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
}
