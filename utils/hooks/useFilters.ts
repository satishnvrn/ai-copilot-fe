import { useState } from 'react'

export const useFilters = () => {
  const [periodFilter, setPeriodFilter] = useState('1m');
  const [defectFilter, setDefectFilter] = useState('');
  const [minQualityFilter, setMinQualityFilter] = useState(0);

  return {
    periodFilter,
    setPeriodFilter,
    defectFilter,
    setDefectFilter,
    minQualityFilter,
    setMinQualityFilter,
  }
}
