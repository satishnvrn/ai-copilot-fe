"use client";

import BarChartWidget from "@/components/BarChartWidget";
import DataGridWidget from "@/components/DataGridWidget";
import Filters from "@/components/Filters";
import LineChartWidget from "@/components/LineChartWidget";
import ModelViewer from "@/components/ModelViewer";
import ProductSelector from "@/components/ProductSelector";
import WizardCard from "@/components/WizardCard";
import { PART_MODELS } from "@/utils/constants";
import { useFilters } from "@/utils/hooks/useFilters";
import useProductMetricsData from "@/utils/hooks/useProductMetricsData";
import { Carousel } from "flowbite-react";
import { useEffect } from "react";

export default function Home() {
  const filtersState = useFilters();
  const { data, loading, error, fetchProductMetrics } = useProductMetricsData();

  useEffect(() => {
    fetchProductMetrics({
      periodFilter: filtersState.periodFilter,
      defectFilter: filtersState.defectFilter,
      minQuality: filtersState.minQualityFilter,
    });
  }, [
    filtersState.periodFilter,
    filtersState.defectFilter,
    filtersState.minQualityFilter,
  ]);

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
        <Filters filtersState={filtersState} />
        <div className="flex flex-row gap-5 justify-around">
          <Carousel slide={false} indicators={false} className="px-10">
            <WizardCard title="Failure Rates">
              <LineChartWidget
                width={500}
                height={300}
                xKey="metricDate"
                yKeys={[{ name: "failuteRate", color: "#8884d8" }]}
                data={data}
              />
            </WizardCard>
            <WizardCard title="Quality Scores">
              <BarChartWidget
                width={500}
                height={300}
                xKey="metricDate"
                yKeys={[{ name: "quality", color: "#8884d8" }]}
                data={data}
              />
            </WizardCard>
            <WizardCard title="Production Metrics">
              <DataGridWidget
                headers={["metricId", "metricDate", "costSavings", "defect", "efficiency", "quality"]}
                data={data}
              />
            </WizardCard>
          </Carousel>
        </div>
      </div>
    </main>
  );
}
