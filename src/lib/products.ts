export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  price: string;
  mark: string;
  color: string;
};

export const products: Product[] = [
  {
    slug: "field-notebook",
    name: "Field Notebook",
    category: "Paper goods",
    description: "A calm place for the next good idea.",
    price: "R$ 42",
    mark: "01",
    color: "bg-[#d9e7a8]",
  },
  {
    slug: "everyday-tote",
    name: "Everyday Tote",
    category: "Carry",
    description: "Room for a laptop, a book, and the rest of your day.",
    price: "R$ 118",
    mark: "02",
    color: "bg-[#c2d8dc]",
  },
  {
    slug: "desk-timer",
    name: "Desk Timer",
    category: "Focus",
    description: "A tactile reminder to make time for the work that matters.",
    price: "R$ 86",
    mark: "03",
    color: "bg-[#f0c9a5]",
  },
  {
    slug: "morning-mug",
    name: "Morning Mug",
    category: "Home",
    description: "A generous shape for slow starts and strong coffee.",
    price: "R$ 74",
    mark: "04",
    color: "bg-[#e5c6d3]",
  },
  {
    slug: "utility-pen",
    name: "Utility Pen",
    category: "Tools",
    description: "The dependable pen that stays close at hand.",
    price: "R$ 28",
    mark: "05",
    color: "bg-[#c9c7e5]",
  },
  {
    slug: "studio-lamp",
    name: "Studio Lamp",
    category: "Home",
    description: "Soft, focused light for late ideas and early mornings.",
    price: "R$ 290",
    mark: "06",
    color: "bg-[#e7d38f]",
  },
];
