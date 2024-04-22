export default function Home() {
  return (
    <main className="flex min-h-screen h-[800px] flex-col items-center justify-between p-24">
      <div className="absolute bottom-4 left-4">
        <span className="sm:hidden">XS</span>
        <span className="hidden sm:block md:hidden">SM</span>
        <span className="hidden md:block lg:hidden">MD</span>
        <span className="hidden lg:block xl:hidden">LG</span>
        <span className="hidden xl:block 2xl:hidden">XL</span>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
}
