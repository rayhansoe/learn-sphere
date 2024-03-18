import About from "@/components/pages/home/about";
import Hero from "@/components/pages/home/hero";
import Products from "@/components/pages/home/products";
import Testimonials from "@/components/pages/home/testimonials";

export default async function Home() {
	return (
		<>
			<Hero />
			<About />
			<Products />
			<Testimonials />
		</>
	);
}
