import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Categories from '../Categories';

describe('Categories Component', () => {
  it('renders the main heading', () => {
    render(<Categories />);
    const heading = screen.getByText(/Browse by Category/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    render(<Categories />);
    const subheading = screen.getByText(/Explore our diverse collection of recipes/i);
    expect(subheading).toBeInTheDocument();
  });

  it('renders the correct number of category cards', () => {
    render(<Categories />);
    const categoryCards = screen.getAllByRole('img');
    expect(categoryCards).toHaveLength(5);
  });

  it('renders category names', () => {
    render(<Categories />);
    const categoryNames = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Vegan'];
    categoryNames.forEach(name => {
      const categoryName = screen.getByText(name);
      expect(categoryName).toBeInTheDocument();
    });
  });

  it('renders recipe count for each category', () => {
    render(<Categories />);
    const recipeCounts = ['125 Recipes', '147 Recipes', '158 Recipes', '92 Recipes', '73 Recipes'];
    recipeCounts.forEach(count => {
      const recipeCount = screen.getByText(count);
      expect(recipeCount).toBeInTheDocument();
    });
  });
});