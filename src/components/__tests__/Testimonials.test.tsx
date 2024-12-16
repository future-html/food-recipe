import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Testimonials from '../Testimonials';

// Mock GSAP
jest.mock('gsap', () => ({
  __esModule: true,
  default: {
    from: jest.fn()
  }
}));

import * as gsap from 'gsap';

describe('Testimonials Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders the component with initial testimonial', () => {
    render(<Testimonials />);
    
    // Check for initial testimonial content
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
    expect(screen.getByText('Home Chef')).toBeInTheDocument();
  });

  it('automatically changes testimonial every 5 seconds', () => {
    jest.useFakeTimers();
    
    render(<Testimonials />);
    
    // Initial state
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
    
    // Fast-forward timer
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    
    // Should now show second testimonial
    expect(screen.getByText('Michael Chen')).toBeInTheDocument();
    
    jest.useRealTimers();
  });

  it('allows manual navigation through navigation dots', () => {
    render(<Testimonials />);
    
    // Get all navigation dots
    const navigationDots = screen.getAllByRole('button', { name: /Go to testimonial/i });
    
    // Click on the third dot
    fireEvent.click(navigationDots[2]);
    
    // Should now show third testimonial
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument();
  });

  it('applies GSAP animation', () => {
    render(<Testimonials />);
    
    // Verify GSAP animation was called
    expect(gsap.default.from).toHaveBeenCalledWith(
      expect.anything(), 
      expect.objectContaining({
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
      })
    );
  });
});