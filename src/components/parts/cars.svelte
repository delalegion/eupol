<script lang="ts">
	import CarOne from '$lib/images/car-1.png';
	import CarTwo from '$lib/images/car-2.png';
	import CarThree from '$lib/images/car-3.png';
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

		function roundToNearestDivisible(number: number, divisor: number) {
			return Math.round(number / divisor) * divisor;
		}

		function handleScroll() {
			scrollPosition = window.scrollY;

			if (isInView) {
				let element: HTMLElement = document.querySelector('.item-grid')!;
				let elementdwa: HTMLElement = document.querySelector('.item-section')!;

				let titles = document.querySelectorAll<HTMLHeadingElement>('.item-car-h3');

				let distance = getDistanceToTop(elementdwa);
				let distanceWidth =  scrollPosition - distance;
				let distanceTitle = distanceWidth / 14

				if (distanceWidth > 0) {
					element.style.transform = 'translateX(-' + distanceWidth + 'px)';
					titles.forEach((el, i) => {
						el.style.transform = 'translateX(-' + distanceTitle + 'px)';
					})
				}
			}

			requestAnimationFrame(handleScroll);
		}

	})

</script>

<section id="cars" class="py-16 md:py-24 lg:py-32 bg-dark-100">
	<div class="item-section flex flex-col gap-12 md:gap-16 lg:gap-20" style="height: 200vh; position: relative;">

		<div class="mx-auto max-w-screen-xl gap-20 flex flex-col">
			<div class="flex flex-row gap-3 justify-center">
				<div class=" ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
				<h3 class="text-dark-250 font-semibold text-h4 lg:text-h3">Nasza flota</h3>
			</div>
		</div>

		<div class="flex sticky top-64 item-grid gap-56 ml-24" use:inview={options}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			isInView = inView;
		}}>

			<div class="flex flex-col item-car w-screen flex-[0_0_50%] items-center">
				<div id="car-1" class="clip-rectangle">
					<img src={CarOne} class="bg-cover bg-no-repeat rounded-xl min-h-60 max-h-80" alt="Map of card mondeo" />
				</div>
				<h2 class="font-semibold text-h3 lg:text-h2 text-dark-250 z-10 ml-20 -mt-6 text-nowrap item-car-h3">FORD MONDEO</h2>
				<div class="flex flex-row gap-2 justify-center mt-5">
					<div class="mr-2 lg:mr-3 border-r-2 p-0 border-primary rotate-45"></div>
					<h4 class="text-dark-250 font-medium text-p1 md:text-h3 lg:text-h4">Ponad 400 zrealizowanych kursów</h4>
				</div>
			</div>

			<div class="flex flex-col item-car w-screen flex-[0_0_50%] items-center">
				<div id="car-1" class="clip-rectangle">
					<img src={CarTwo} class="bg-cover bg-no-repeat rounded-xl min-w-80 min-h-80 max-h-80" alt="Map of card mondeo" />
				</div>
				<h2 class="font-semibold text-h3 lg:text-h2 text-dark-250 z-10 ml-20 -mt-6 text-nowrap item-car-h3">AUDI A6</h2>
				<div class="flex flex-row gap-2 justify-center mt-5">
					<div class="mr-3 border-r-2 p-0 border-primary rotate-45"></div>
					<h4 class="text-dark-250 font-medium text-p1 md:text-h3 lg:text-h4">Ponad 100 zrealizowanych kursów</h4>
				</div>
			</div>

			<div class="flex flex-col item-car w-screen flex-[0_0_50%] items-center">
				<div id="car-1" class="clip-rectangle">
					<img src={CarThree} class="bg-cover bg-no-repeat rounded-xl min-h-60 max-h-80" alt="Map of card mondeo" />
				</div>
				<h2 class="font-semibold text-h3 lg:text-h2 text-dark-250 z-10 ml-20 -mt-6 text-nowrap item-car-h3">FORD TOURNEO</h2>
				<div class="flex flex-row gap-2 justify-center mt-5">
					<div class="mr-3 border-r-2 p-0 border-primary rotate-45"></div>
					<h4 class="text-dark-250 font-medium text-p1 md:text-h3 lg:text-h4">Ponad 100 zrealizowanych kursów</h4>
				</div>
			</div>

		</div>

	</div>
	
</section>