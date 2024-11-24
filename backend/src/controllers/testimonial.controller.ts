import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Testimonial } from '../entity/Testimonial';

// Get all testimonials
export const getTestimonials = async (req: Request, res: Response) => {
    try {
        const testimonialRepository = getRepository(Testimonial);
        const testimonials = await testimonialRepository.find();
        res.json(testimonials);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching testimonials', error });
    }
};

// Create a new testimonial
export const createTestimonial = async (req: Request, res: Response) => {
    try {
        const testimonialRepository = getRepository(Testimonial);
        const testimonial = testimonialRepository.create(req.body);
        const results = await testimonialRepository.save(testimonial);
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: 'Error creating testimonial', error });
    }
};
