import Filters from "@/components/Filters";
import ProductSelector from "@/components/ProductSelector";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="px-5 py-2.5 flex flex-row gap-10 border-b border-gray-500 w-full fixed top-0 z-10 bg-gray-200">
        <h1 className="font-bold self-center">Applix AI Copilot</h1>
        <ProductSelector />
      </header>
      <div className="w-full mt-20">Content</div>
      {/* <Filters /> */}
    </main>
  );
}
