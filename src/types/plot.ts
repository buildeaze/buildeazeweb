export interface Plot {
  id: number;
  title: string;
  location: string;
  size: string;
  price: string;
  features: string[];
  image: string;
  plotType: 'Residential' | 'Commercial' | 'Agricultural';
  amenities?: string[];
  approvals?: string[];
  description?: string;
  threeDPlanUrl?: string;
  budgetEstimate?: {
    construction: string;
    interiors: string;
    total: string;
  };
  specifications: {
    plotSize: string;
    facing: string;
  };
}

export type PlotFilterType = 'Residential' | 'Commercial' | 'Agricultural';
export type SortOption = 'relevance' | 'price-asc' | 'price-desc' | 'newest';

export interface PlotFilters {
  types: PlotFilterType[];
  priceRange: {
    min: number | null;
    max: number | null;
  };
  locations: string[];
  amenities?: string[];
}

export interface SortConfig {
  option: SortOption;
  label: string;
}