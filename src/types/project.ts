export interface Project {
    id: number;
    title: string;
    location: string;
    size: string;
    price: string;
    timeline: string;
    images: string[];
    features: string[];
}

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface BudgetEstimate {
    construction: number;
    development: number;
    approvals: number;
    total: number;
}

export interface Plot {
    id: string;
    title: string;
    location: string;
    price: number;
    area: number;
    description: string;
    images: string[];
    features: string[];
    coordinates: Coordinates;
    specifications: {
        plotSize: string;
        facing: string;
        cornerPlot: boolean;
        roadWidth: string;
    };
    threeDPlan: {
        modelUrl: string;
        previewImages: string[];
    };
    budgetEstimate: BudgetEstimate;
    amenities: string[];
}