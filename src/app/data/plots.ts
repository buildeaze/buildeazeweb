import { Plot, PlotFilterType } from '@/types/plot';

export const mockPlots: Plot[] = [
  {
    id: 1,
    title: "Residential Plot in Hyderabad",
    location: "Gachibowli, Hyderabad",
    size: "2400 sq.ft",
    price: "₹75L",
    features: ["Corner plot", "NA approved", "Gated community"],
    image: "/images/plot1.jpg",
    plotType: "Residential",
    amenities: ["24/7 Security", "Park", "Underground Electricity"],
    approvals: ["HMDA Approved", "Clear Title", "RERA Registered"],
    description: "Premium corner plot in a gated community with all modern amenities. Perfect for building your dream home.",
    threeDPlanUrl: "/images/3dplans/plot1-3d.jpg",
    budgetEstimate: {
      construction: "₹1.2Cr",
      interiors: "₹25L",
      total: "₹1.45Cr"
    },
    specifications: {
      plotSize: "2400 sq.ft",
      facing: "East"
    }
  },
  {
    id: 2,
    title: "Farm Land in Bangalore",
    location: "Whitefield, Bangalore",
    size: "1 Acre",
    price: "₹1.2Cr",
    features: ["Agricultural land", "Clear title", "Road access"],
    image: "/images/plot2.jpg",
    plotType: "Agricultural",
    amenities: ["Bore Well", "Farm House", "Power Connection"],
    approvals: ["Agricultural Zone", "Clear Title"],
    description: "Fertile agricultural land with existing bore well and farm house. Ideal for organic farming.",
    threeDPlanUrl: "/images/3dplans/plot2-3d.jpg",
    budgetEstimate: {
      construction: "₹60L",
      interiors: "₹15L",
      total: "₹75L"
    },
    specifications: {
      plotSize: "43560 sq.ft",
      facing: "North"
    }
  },
  {
    id: 3,
    title: "Commercial Plot in Pune",
    location: "Hinjewadi, Pune",
    size: "5000 sq.ft",
    price: "₹2.5Cr",
    features: ["Main road facing", "High ROI", "Ready to build"],
    image: "/images/plot3.jpg",
    plotType: "Commercial",
    amenities: ["Wide Road Access", "High Footfall Area", "Metro Connectivity"],
    approvals: ["Commercial Zone", "PMRDA Approved", "NOC Available"],
    description: "Prime commercial plot in IT hub with excellent connectivity and high appreciation potential.",
    threeDPlanUrl: "/images/3dplans/plot3-3d.jpg",
    budgetEstimate: {
      construction: "₹4Cr",
      interiors: "₹1.5Cr",
      total: "₹5.5Cr"
    },
    specifications: {
      plotSize: "5000 sq.ft",
      facing: "West"
    }
  },
];

export const cities = [
  "Hyderabad",
  "Bangalore",
  "Pune",
  "Chennai",
  "Mumbai",
  "Delhi NCR",
  "Kolkata",
  "Ahmedabad"
];

export const plotTypes: PlotFilterType[] = ["Residential", "Commercial", "Agricultural"];

export const sortOptions = [
  { option: "relevance", label: "Relevance" },
  { option: "price-asc", label: "Price: Low to High" },
  { option: "price-desc", label: "Price: High to Low" },
  { option: "newest", label: "Newest First" }
] as const;

export const amenities = [
  "24/7 Security",
  "Gated Community",
  "Park",
  "Club House",
  "Underground Electricity",
  "Water Supply",
  "Road Access",
  "CCTV Surveillance"
];