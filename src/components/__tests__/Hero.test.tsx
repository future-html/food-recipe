
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../Hero';

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    const heading = screen.getByText(/Discover Recipes That Delight/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    render(<Hero />);
    const subheading = screen.getByText(/Explore thousands of delicious recipes from around the world/i);
    expect(subheading).toBeInTheDocument();
  });

  it('renders the search input', () => {
    render(<Hero />);
    const searchInput = screen.getByPlaceholderText(/Search by ingredients or recipe name.../i);
    expect(searchInput).toBeInTheDocument();
  });

  it('renders the search button', () => {
    render(<Hero />);
    const searchButton = screen.getByText(/Search/i);
    expect(searchButton).toBeInTheDocument();
  });

  it('renders the explore recipes button', () => {
    render(<Hero />);
    const exploreButton = screen.getByText(/Explore Recipes/i);
    expect(exploreButton).toBeInTheDocument();
  });
});