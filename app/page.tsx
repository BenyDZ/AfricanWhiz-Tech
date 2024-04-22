import Hero_view from "@/components/hero_view";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="absolute bottom-4 left-4">
        <span className="sm:hidden">XS</span>
        <span className="hidden sm:block md:hidden">SM</span>
        <span className="hidden md:block lg:hidden">MD</span>
        <span className="hidden lg:block xl:hidden">LG</span>
        <span className="hidden xl:block 2xl:hidden">XL</span>
      </div>
      <Hero_view/>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
}
