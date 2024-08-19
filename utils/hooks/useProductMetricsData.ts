import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_API_URL } from "../constants";

interface Filters {
  periodFilter?: string;
  defectFilter?: string;
  minQuality?: number;
}

const getProductMetricsQueryParams = (filters: Filters) => {
  const params = new URLSearchParams();
  params.append("product", "jetEngine");
  if (filters.periodFilter) {
    params.append("period", filters.periodFilter);
  }
  if (filters.defectFilter) {
    params.append("defectType", filters.defectFilter);
  }
  if (filters.minQuality) {
    params.append("minQuality", filters.minQuality.toString());
  }
  return params.toString();
};

const useProductMetricsData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<Filters>({});

  const fetchProductMetrics = async (filters: Filters) => {
    if (JSON.stringify(activeFilters) !== JSON.stringify(filters)) {
      setActiveFilters(filters);

      try {
        setLoading(true);
        const response = await axios.get(
          `${BASE_API_URL}/metrics?${getProductMetricsQueryParams(filters)}`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch product metrics data");
        console.error("Error fetching product metrics:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  return { data, loading, error, fetchProductMetrics };
};

export default useProductMetricsData;
