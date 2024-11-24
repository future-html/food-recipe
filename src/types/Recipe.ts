export interface Recipe {
  id: number;
  title: string;
  description: string;
  prep_time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  image: string;
}

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: "Classic Spaghetti Bolognese",
    description: "A hearty and traditional Italian pasta dish.",
    prep_time: "30 mins",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Vegan Buddha Bowl",
    description: "A colorful bowl packed with plant-based goodness.",
    prep_time: "20 mins",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Chocolate Lava Cake",
    description: "Decadent molten chocolate dessert.",
    prep_time: "25 mins",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2027&q=80"
  },
  {
    id: 4,
    title: "Fresh Summer Salad",
    description: "Light and refreshing salad perfect for summer.",
    prep_time: "15 mins",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 5,
    title: "Grilled Salmon",
    description: "Perfectly grilled salmon with herbs and lemon.",
    prep_time: "25 mins",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 6,
    title: "Homemade Pizza",
    description: "Classic pizza with fresh ingredients and crispy crust.",
    prep_time: "40 mins",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  }
];
