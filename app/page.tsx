import BarChartWidget from "@/components/BarChartWidget";
import DataGridWidget from "@/components/DataGridWidget";
import Filters from "@/components/Filters";
import LineChartWidget from "@/components/LineChartWidget";
import ModelViewer from "@/components/ModelViewer";
import ProductSelector from "@/components/ProductSelector";
import WizardCard from "@/components/WizardCard";
import { PART_MODELS } from "@/constants";
import { Carousel } from "flowbite-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="px-5 py-2.5 flex flex-row gap-10 border-b border-gray-500 w-full fixed top-0 z-10 bg-gray-200">
        <h1 className="font-bold self-center">Applix AI Copilot</h1>
        <ProductSelector />
      </header>
      <div className="w-full mt-20">
        <div className="px-5">
          <h1 className="font-semibold">Jet Engine</h1>
          <ModelViewer model={PART_MODELS[0]} />
        </div>
        <Filters />
        <div className="flex flex-row gap-5 justify-around">
          <Carousel slide={false} indicators={false} className="px-10">
            <WizardCard title="Failure Rates">
              <LineChartWidget
                width={500}
                height={300}
                xKey="date"
                yKeys={[{ name: "failureRate", color: "#8884d8" }]}
                data={[
                  { date: "2024-08-8T04:42:25.132Z", failureRate: 20 },
                  { date: "2024-08-9T04:42:25.132Z", failureRate: 19 },
                  { date: "2024-08-10T04:42:25.132Z", failureRate: 18 },
                  { date: "2024-08-11T04:42:25.132Z", failureRate: 17 },
                  { date: "2024-08-12T04:42:25.132Z", failureRate: 16 },
                  { date: "2024-08-13T04:42:25.132Z", failureRate: 15 },
                  { date: "2024-08-14T04:42:25.132Z", failureRate: 14 },
                  { date: "2024-08-15T04:42:25.132Z", failureRate: 13 },
                  { date: "2024-08-16T04:42:25.132Z", failureRate: 12 },
                  { date: "2024-08-17T04:42:25.132Z", failureRate: 11 },
                  { date: "2024-08-18T04:42:25.132Z", failureRate: 10 },
                ]}
              />
            </WizardCard>
            <WizardCard title="Quality Scores">
              <BarChartWidget
                width={500}
                height={300}
                xKey="date"
                yKeys={[{ name: "qualityScore", color: "#8884d8" }]}
                data={[
                  { date: "2024-08-8T04:42:25.132Z", qualityScore: 70 },
                  { date: "2024-08-9T04:42:25.132Z", qualityScore: 75 },
                  { date: "2024-08-10T04:42:25.132Z", qualityScore: 78 },
                  { date: "2024-08-14T04:42:25.132Z", qualityScore: 80 },
                  { date: "2024-08-15T04:42:25.132Z", qualityScore: 82 },
                  { date: "2024-08-16T04:42:25.132Z", qualityScore: 85 },
                  { date: "2024-08-17T04:42:25.132Z", qualityScore: 88 },
                  { date: "2024-08-18T04:42:25.132Z", qualityScore: 90 },
                ]}
              />
            </WizardCard>
            <WizardCard title="Production Metrics">
              <DataGridWidget
                headers={["item1", "item2", "item3"]}
                data={[
                  { item1: 1, item2: 2, item3: 3 },
                  { item1: 4, item2: 5, item3: 6 },
                  { item1: 7, item2: 8, item3: 9 },
                ]}
              />
            </WizardCard>
          </Carousel>
        </div>
      </div>
    </main>
  );
}
