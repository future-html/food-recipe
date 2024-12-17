
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../Hero';

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero query='' setQuery={() => {}}/>);
    const heading = screen.getByText(/Discover Recipes That Delight/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    render(<Hero query='' setQuery={() => {}}/>);
    const subheading = screen.getByText(/Explore thousands of delicious recipes from around the world/i);
    expect(subheading).toBeInTheDocument();
  });

  it('renders the search input', () => {
    render(<Hero query='' setQuery={() => {}}/>);
    const searchInput = screen.getByPlaceholderText(/Search by ingredients or recipe name.../i);
    expect(searchInput).toBeInTheDocument();
  });

  it('renders the search button', () => {
    render(<Hero query='' setQuery={() => {}} />);
    const searchButton = screen.getByText(/Search/i);
    expect(searchButton).toBeInTheDocument();
  });

  it('renders the explore recipes button', () => {
    render(<Hero query='' setQuery={()=> {}}/>);
    const exploreButton = screen.getByText(/Explore Recipes/i);
    expect(exploreButton).toBeInTheDocument();
  });
});