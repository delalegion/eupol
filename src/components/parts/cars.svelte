<script lang="ts">
	import CarOne from '$lib/images/auto-d-1.webp?enhanced';
	import CarTwo from '$lib/images/auto-d-2.webp?enhanced';
	import CarThree from '$lib/images/auto-d-3.webp?enhanced';
	import CarFour from '$lib/images/auto-d-4.webp?enhanced';
	import CarFive from '$lib/images/auto-d-5.webp?enhanced';
	import { onMount } from "svelte";
	import { inview } from "svelte-inview";

	$: scrollPosition = 0;
	let isInView: boolean;

	function getDistanceToTop(element: HTMLElement) {

		let distance = element.offsetTop;
		let parent = element.offsetParent as HTMLElement;

		while (parent !== null) {
			distance += parent.offsetTop;
			parent = parent.offsetParent as HTMLElement;
		}

		return distance;
	}

	const options = {};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		let elementSectionCar: HTMLElement = document.querySelector('.item-car')!;
		let elementSectionPixels: number = elementSectionCar.offsetWidth * 5 + 400;
		let heightGridContainer: HTMLElement = document.querySelector("#cars-grid-head")!;

		// Set height for scroll grid
		if (window.screen.width < 800) {
			elementSectionPixels = elementSectionCar.offsetWidth * 6 + 600;
			heightGridContainer.style.height = elementSectionPixels + 'px';
		}
		if (window.screen.width < 430) {
			elementSectionPixels = elementSectionCar.offsetWidth * 6 + 900;
			heightGridContainer.style.height = elementSectionPixels + 'px';
		}
		heightGridContainer.style.height = elementSectionPixels + 'px';

		function handleScroll() {
			scrollPosition = window.scrollY;

			if (isInView) {
				let element: HTMLElement = document.querySelector('.item-grid')!;
				let elementSection: HTMLElement = document.querySelector('.item-section')!;

				let titles = document.querySelectorAll<HTMLHeadingElement>('.item-car-h3');

				window.addEventListener('resize', function(event) {
					if (window.screen.width < 600) {
						elementSectionPixels = elementSectionCar.offsetWidth * 6 + 400;
					}
					heightGridContainer.style.height = elementSectionPixels + 'px';
				}, true);

				let distance = getDistanceToTop(elementSection);
				let distanceWidth =  scrollPosition - distance;
				let distanceTitle = distanceWidth / 30;

				if (distanceWidth > 0) {

					let distanceFinal;

					if (distanceWidth <= elementSectionPixels) {
						distanceFinal = distanceWidth;
					} else {
						distanceFinal = elementSectionPixels;
					}
	
					element.style.transform = 'translateX(-' + distanceFinal + 'px)';
					titles.forEach((el, i) => {
						el.style.transform = 'translateX(-' + distanceTitle + 'px)';
					})
				}
			}

			// requestAnimationFrame(handleScroll);
		}

	})

</script>

<section id="flota" class="py-16 md:py-24 lg:py-32 bg-dark-100">
	<div class="item-section flex flex-col gap-12 md:gap-16 lg:gap-20" style="height: 99rem; position: relative;" id="cars-grid-head">

		<div class="mx-auto max-w-screen-xl gap-20 flex flex-col">
			<div class="flex flex-row gap-3 justify-center">
				<div class=" ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
				<h3 class="text-dark-250 font-semibold text-h4 lg:text-h3">Nasza flota</h3>
			</div>
		</div>

		<div class="flex sticky top-24 md:top-36 lg:top-52 xl:top-64 item-grid gap-56 ml-24 relative" use:inview={options}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			isInView = inView;
		}}>

			<div class="absolute top-0 left-0 right-0 bottom-0 z-0 hidden opacity-0" id="gridWidth"></div>
			<div class="flex flex-col item-car w-screen flex-[0_0_40%] items-center">
				<div id="car-1" class="clip-rectangle">
					<enhanced:img src={CarOne} class="bg-cover bg-no-repeat rounded-xl min-h-60 max-h-80 max-w-96" alt="Map of card mondeo" />
				</div>
				<h2 class="font-semibold text-h3 lg:text-h2 text-dark-250 z-10 ml-20 -mt-6 text-nowrap item-car-h3">FORD MONDEO</h2>
				<div class="flex flex-row gap-2 justify-center mt-5">
					<div class="mr-2 lg:mr-3 border-r-2 p-0 border-primary rotate-45"></div>
					<h4 class="text-dark-250 font-medium text-p1 md:text-h4">Vignale</h4>
				</div>
			</div>

			<div class="flex flex-col item-car w-screen flex-[0_0_40%] items-center">
				<div id="car-1" class="clip-rectangle">
					<enhanced:img src={CarTwo} class="bg-cover bg-no-repeat rounded-xl min-h-60 max-h-80 max-w-96" alt="Map of card mondeo" />
				</div>
				<h2 class="font-semibold text-h3 lg:text-h2 text-dark-250 z-10 ml-20 -mt-6 text-nowrap item-car-h3">AUDI A6</h2>
				<div class="flex flex-row gap-2 justify-center mt-5">
					<div class="mr-3 border-r-2 p-0 border-primary rotate-45"></div>
					<h4 class="text-dark-250 font-medium text-p1 md:text-h4">Limousine</h4>
				</div>
			</div>

			<div class="flex flex-col item-car w-screen flex-[0_0_40%] items-center">
				<div id="car-1" class="clip-rectangle">
					<enhanced:img src={CarThree} class="bg-cover bg-no-repeat rounded-xl min-h-60 max-h-80 max-w-96" alt="Map of card mondeo" />
				</div>
				<h2 class="font-semibold text-h3 lg:text-h2 text-dark-250 z-10 ml-20 -mt-6 text-nowrap item-car-h3">FORD TOURNEO</h2>
				<div class="flex flex-row gap-2 justify-center mt-5">
					<div class="mr-3 border-r-2 p-0 border-primary rotate-45"></div>
					<h4 class="text-dark-250 font-medium text-p1 md:text-h4">Custom</h4>
				</div>
			</div>

			<div class="flex flex-col item-car w-screen flex-[0_0_40%] items-center">
				<div id="car-1" class="clip-rectangle">
					<enhanced:img src={CarFour} class="bg-cover bg-no-repeat rounded-xl min-h-60 max-h-80 max-w-96" alt="Map of card mondeo" />
				</div>
				<h2 class="font-semibold text-h3 lg:text-h2 text-dark-250 z-10 ml-20 -mt-6 text-nowrap item-car-h3">FIAT DUCATO</h2>
				<div class="flex flex-row gap-2 justify-center mt-5">
					<div class="mr-3 border-r-2 p-0 border-primary rotate-45"></div>
					<h4 class="text-dark-250 font-medium text-p1 md:text-h4">Plandeka: 4.20x2.10x.2.10H 8 EP</h4>
				</div>
			</div>

			<div class="flex flex-col item-car w-screen flex-[0_0_40%] items-center">
				<div id="car-1" class="clip-rectangle">
					<enhanced:img src={CarFive} class="bg-cover bg-no-repeat rounded-xl min-h-60 max-h-80 max-w-96" alt="Map of card mondeo" />
				</div>
				<h2 class="font-semibold text-h3 lg:text-h2 text-dark-250 z-10 ml-20 -mt-6 text-nowrap item-car-h3">FIAT DUCATO</h2>
				<div class="flex flex-row gap-2 justify-center mt-5">
					<div class="mr-3 border-r-2 p-0 border-primary rotate-45"></div>
					<h4 class="text-dark-250 font-medium text-p1 md:text-h4">Plandeka: 4.80x2.20x2.35H 10 EP </h4>
				</div>
			</div>

		</div>

	</div>
	
</section>