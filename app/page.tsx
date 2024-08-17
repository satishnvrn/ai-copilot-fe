import Filters from "@/components/Filters";
import ProductSelector from "@/components/ProductSelector";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="px-5 py-2.5 fixed">
        <ProductSelector />
      </nav>
      {/* <Filters /> */}
    </main>
  );
}
