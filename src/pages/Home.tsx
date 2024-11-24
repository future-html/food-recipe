import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Testimonial from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
const Home = () => {
	return (
		<>
			<Navbar></Navbar>
			<Hero></Hero>
			<Pricing></Pricing>
			<CTA></CTA>
			<Testimonial></Testimonial>
			
			<FAQ></FAQ>
			<Footer></Footer>
		</>
	);
};

export default Home;
