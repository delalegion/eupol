<script lang="ts">
	import About from "../components/parts/about.svelte";
	import Cars from "../components/parts/cars.svelte";
	import Contact from "../components/parts/contact.svelte";
	import Footer from "../components/parts/footer.svelte";
	import Header from "../components/parts/header.svelte";
	import Offer from "../components/parts/offer.svelte";
</script>

<Header />

<About />

<Offer />

<div style="contain: paint;">
	<Cars />
</div>

<Contact />

<Footer />

<style>
	.clip-logo {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 12% 100%, 0 80%);
	}
	.clip-rectangle {
		clip-path: polygon(100% 0, 100% 100%, 15% 100%, 0 81%, 0 0);
	}
	.item-grid {
		transform: translateX(0px);
		transition: transform 0.3s ease-out;
	}
	.item-car-h3 {
		transform: translateX(0px);
		transition: transform 0.3s ease-out;	
	}
</style>
