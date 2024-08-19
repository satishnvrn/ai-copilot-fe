export interface FiltersType {
  periodFilter: string;
  setPeriodFilter: (period: string) => void;
  defectFilter: string;
  setDefectFilter: (defect: string) => void;
  minQualityFilter: number;
  setMinQualityFilter: (quality: number) => void;
}