import Filters from "@/components/Filters";
import ModelViewer from "@/components/ModelViewer";
import ProductSelector from "@/components/ProductSelector";
import { PART_MODELS } from "@/constants";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="px-5 py-2.5 flex flex-row gap-10 border-b border-gray-500 w-full fixed top-0 z-10 bg-gray-200">
        <h1 className="font-bold self-center">Applix AI Copilot</h1>
        <ProductSelector />
      </header>
      <div className="w-full mt-20 px-5">
        <h1 className="font-semibold">Jet Engine</h1>
        <ModelViewer model={PART_MODELS[0]} />
      </div>
    </main>
  );
}
