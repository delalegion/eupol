<script>
	import { onMount } from "svelte";
	import gsap from "gsap";
	import {ScrollTrigger} from "gsap/dist/ScrollTrigger"; 

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger)

		gsap.from('#offer-title', {
			scrollTrigger: {
				trigger: '#offer-title',
			},
			y: -40,
			opacity: 0,
			delay: 0.2,
			duration: 1,
			ease: "expo.out",
		});
		gsap.from('.box', {
			scrollTrigger: {
				trigger: '.box',
			},
			y: -40,
			opacity: 0,
			delay: 0.4,
			duration: 1,
			ease: "expo.out",
			stagger: 0.15
		});
	});

	export let en = false;
</script>

{#if en === true}

<section id="offer" class="py-16 md:py-24 lg:py-32 bg-dark-300">
	<div class="mx-auto max-w-screen-xl gap-12 md:gap-16 lg:gap-20 flex flex-col px-4 sm:px-8">
		<div class="flex flex-row gap-3 justify-center">
			<div class="ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
			<h3 class="text-dark-50 font-semibold text-h4 lg:text-h3" id="offer-title">We provide</h3>
		</div>
		<div class="grid grid-cols-6 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
			<div class="col-span-6 sm:col-span-3 flex flex-col gap-4 text-center justify-center box">

				<div class="h-28 flex max-h-28 justify-center">
					<svg width="145" height="108" viewBox="0 0 145 108" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="143.707" y1="5.70711" x2="63.7071" y2="85.7071" stroke="#CAE84A" stroke-width="2"/>
						<line x1="80.7071" y1="14.7071" x2="0.707108" y2="94.7071" stroke="#CAE84A" stroke-width="2"/>
						<path d="M36.5832 54.7848C36.5832 54.7848 33.3936 77.94 41.3352 82.5408C50.1264 87.6312 57.1608 89.3304 70.3944 91.6776C83.6208 94.0248 101.333 95.0688 102.427 87.5016C103.342 81.144 95.8968 80.4528 95.8968 80.4528C95.8968 80.4528 105.322 82.1376 106.258 74.1816C107.028 67.6152 101.556 68.0904 101.556 68.0904C101.556 68.0904 110.786 68.8104 110.786 61.4952C110.786 54.18 102.607 55.9008 102.607 55.9008C102.607 55.9008 108.828 55.6488 107.827 49.284C106.74 42.3648 84.4992 43.9416 84.4992 43.9416C84.4992 43.9416 92.16 37.0944 91.6344 24.2136C91.1088 11.3328 81.54 12.5496 81.1872 18.8136C80.8344 25.0776 73.5264 42.6672 60.12 45.972C46.7136 49.2768 37.4832 46.6704 36.5904 54.7776L36.5832 54.7848Z" fill="#F8F9FA" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
					</svg>											
				</div>
				<div class="flex flex-col gap-5">
					<h4 class="text-h4 font-semibold text-dark-50">Comfort</h4>
				</div>

			</div>
			<div class="col-span-6 sm:col-span-3 flex flex-col gap-4 text-center justify-center box">

				<div class="h-28 max-h-28 justify-center flex">
					<svg width="117" height="108" viewBox="0 0 117 108" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="68.9561" y1="9.51205" x2="115.549" y2="92.8601" stroke="#CAE84A" stroke-width="2"/>
						<line x1="42.9493" y1="51.75" x2="75.1226" y2="107.476" stroke="#CAE84A" stroke-width="2"/>
						<path d="M55.7063 101.002C89.1071 87.8545 91.2311 42.4225 91.0655 28.3465C91.0367 26.0353 89.3015 24.1057 87.0047 23.8321C72.6335 22.1257 61.5815 15.2569 56.7143 11.7217C55.0943 10.5409 52.8983 10.5409 51.2783 11.7217C46.4111 15.2569 35.3591 22.1329 20.9879 23.8321C18.6911 24.1057 16.9559 26.0353 16.9271 28.3465C16.7615 42.4153 18.8855 87.8473 52.2863 101.002C53.3807 101.434 54.6119 101.434 55.7063 101.002Z" fill="#F8F9FA" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M35.8921 54.5544L50.1985 68.8608L75.7585 43.3008" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
					</svg>															
				</div>
				<div class="flex flex-col gap-5">
					<h4 class="text-h4 font-semibold text-dark-50">Security</h4>
				</div>

			</div>
			<div class="col-span-6 sm:col-span-3 flex flex-col gap-4 text-center justify-center box">

				<div class="h-28 max-h-28 justify-center flex">
					<svg width="145" height="108" viewBox="0 0 145 108" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="143.707" y1="0.707107" x2="63.7071" y2="80.7071" stroke="#CAE84A" stroke-width="2"/>
						<line x1="80.7071" y1="9.70711" x2="0.707108" y2="89.7071" stroke="#CAE84A" stroke-width="2"/>
						<path d="M66.2144 96.0912C42.8288 96.0912 23.8784 77.1336 23.8784 53.7552C23.8784 30.3768 42.8288 11.4192 66.2144 11.4192C89.6 11.4192 108.55 30.3768 108.55 53.7552" fill="#F8F9FA"/>
						<path d="M66.2144 96.0912C42.8288 96.0912 23.8784 77.1336 23.8784 53.7552C23.8784 30.3768 42.8288 11.4192 66.2144 11.4192C89.6 11.4192 108.55 30.3768 108.55 53.7552" stroke="#16181C" stroke-width="1.53" stroke-miterlimit="10"/>
						<path d="M66.2145 59.0689C69.1491 59.0689 71.5281 56.6899 71.5281 53.7553C71.5281 50.8206 69.1491 48.4417 66.2145 48.4417C63.2799 48.4417 60.9009 50.8206 60.9009 53.7553C60.9009 56.6899 63.2799 59.0689 66.2145 59.0689Z" fill="#16181C"/>
						<path d="M90.5071 100.678C102.604 100.678 112.41 90.8716 112.41 78.7752C112.41 66.6788 102.604 56.8728 90.5071 56.8728C78.4108 56.8728 68.6047 66.6788 68.6047 78.7752C68.6047 90.8716 78.4108 100.678 90.5071 100.678Z" fill="#F8F9FA" stroke="#16181C" stroke-width="1.53" stroke-miterlimit="10"/>
						<path d="M79.0591 80.1288L87.9799 89.0568L103.921 73.116" stroke="#16181C" stroke-width="1.53" stroke-miterlimit="10"/>
						<path d="M66.2144 17.3593V53.7553" stroke="#16181C" stroke-width="1.53" stroke-miterlimit="10"/>
						<path d="M45.2625 53.7552H66.2144" stroke="#16181C" stroke-width="1.53" stroke-miterlimit="10"/>
					</svg>											
				</div>
				<div class="flex flex-col gap-5">
					<h4 class="text-h4 font-semibold text-dark-50">Punctuality</h4>
				</div>

			</div>
			<div class="col-span-6 sm:col-span-3 flex flex-col gap-4 text-center justify-center box">

				<div class="h-28 max-h-28 justify-center flex">
					<svg width="145" height="108" viewBox="0 0 145 108" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="143.707" y1="0.707107" x2="63.7071" y2="80.7071" stroke="#CAE84A" stroke-width="2"/>
						<line x1="80.7071" y1="9.70711" x2="0.707108" y2="89.7071" stroke="#CAE84A" stroke-width="2"/>
						<path d="M63.187 48.4416V38.8728C63.187 26.4024 73.2958 16.2864 85.7734 16.2864C98.251 16.2864 108.36 26.3952 108.36 38.8728V48.4416" fill="#F8F9FA"/>
						<path d="M63.187 48.4416V38.8728C63.187 26.4024 73.2958 16.2864 85.7734 16.2864C98.251 16.2864 108.36 26.3952 108.36 38.8728V48.4416" stroke="#020201" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M67.8022 15.4008C63.5182 13.536 60.2422 11.3976 58.291 9.98644C57.0814 9.10804 55.4542 9.10804 54.2446 9.98644C50.623 12.6216 42.4006 17.7336 31.7014 19.0008C29.995 19.2024 28.699 20.6424 28.6774 22.3632C28.5694 31.8672 29.8582 60.5736 48.6646 73.1232" stroke="#020201" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M110.671 48.4417H59.76C57.3145 48.4417 55.332 50.4241 55.332 52.8697V96.0264C55.332 98.472 57.3145 100.454 59.76 100.454H110.671C113.117 100.454 115.099 98.472 115.099 96.0264V52.8697C115.099 50.4241 113.117 48.4417 110.671 48.4417Z" fill="#F8F9FA" stroke="#020201" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M91.1447 71.6975C91.1447 75.1967 88.1207 77.9903 84.5423 77.5943C81.9791 77.3135 79.8335 75.3263 79.3799 72.7847C78.9263 70.2431 80.0711 67.9823 81.9647 66.7295V60.9191C81.9647 59.1263 83.4191 57.6719 85.2119 57.6719C87.0047 57.6719 88.4591 59.1263 88.4591 60.9191V66.7295C90.0719 67.7951 91.1375 69.6239 91.1375 71.6975H91.1447Z" stroke="#020201" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M67.8096 48.4415V39.0311C67.8096 29.1095 75.852 21.0671 85.7736 21.0671C95.6952 21.0671 103.738 29.1095 103.738 39.0311V48.4415" stroke="#020201" stroke-width="2" stroke-miterlimit="10"/>
					</svg>																
				</div>
				<div class="flex flex-col gap-5">
					<h4 class="text-h4 font-semibold text-dark-50">Privacy</h4>
				</div>

			</div>
		</div>
	</div>
</section>

{:else}

<section id="offer" class="py-16 md:py-24 lg:py-32 bg-dark-300">
	<div class="mx-auto max-w-screen-xl gap-12 md:gap-16 lg:gap-20 flex flex-col px-4 sm:px-8">
		<div class="flex flex-row gap-3 justify-center">
			<div class="ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
			<h3 class="text-dark-50 font-semibold text-h4 lg:text-h3" id="offer-title">Zapewniamy</h3>
		</div>
		<div class="grid grid-cols-6 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
			<div class="col-span-6 sm:col-span-3 flex flex-col gap-4 text-center justify-center box">

				<div class="h-28 flex max-h-28 justify-center">
					<svg width="145" height="108" viewBox="0 0 145 108" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="143.707" y1="5.70711" x2="63.7071" y2="85.7071" stroke="#CAE84A" stroke-width="2"/>
						<line x1="80.7071" y1="14.7071" x2="0.707108" y2="94.7071" stroke="#CAE84A" stroke-width="2"/>
						<path d="M36.5832 54.7848C36.5832 54.7848 33.3936 77.94 41.3352 82.5408C50.1264 87.6312 57.1608 89.3304 70.3944 91.6776C83.6208 94.0248 101.333 95.0688 102.427 87.5016C103.342 81.144 95.8968 80.4528 95.8968 80.4528C95.8968 80.4528 105.322 82.1376 106.258 74.1816C107.028 67.6152 101.556 68.0904 101.556 68.0904C101.556 68.0904 110.786 68.8104 110.786 61.4952C110.786 54.18 102.607 55.9008 102.607 55.9008C102.607 55.9008 108.828 55.6488 107.827 49.284C106.74 42.3648 84.4992 43.9416 84.4992 43.9416C84.4992 43.9416 92.16 37.0944 91.6344 24.2136C91.1088 11.3328 81.54 12.5496 81.1872 18.8136C80.8344 25.0776 73.5264 42.6672 60.12 45.972C46.7136 49.2768 37.4832 46.6704 36.5904 54.7776L36.5832 54.7848Z" fill="#F8F9FA" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
					</svg>											
				</div>
				<div class="flex flex-col gap-5">
					<h4 class="text-h4 font-semibold text-dark-50">Komfort</h4>
				</div>

			</div>
			<div class="col-span-6 sm:col-span-3 flex flex-col gap-4 text-center justify-center box">

				<div class="h-28 max-h-28 justify-center flex">
					<svg width="117" height="108" viewBox="0 0 117 108" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="68.9561" y1="9.51205" x2="115.549" y2="92.8601" stroke="#CAE84A" stroke-width="2"/>
						<line x1="42.9493" y1="51.75" x2="75.1226" y2="107.476" stroke="#CAE84A" stroke-width="2"/>
						<path d="M55.7063 101.002C89.1071 87.8545 91.2311 42.4225 91.0655 28.3465C91.0367 26.0353 89.3015 24.1057 87.0047 23.8321C72.6335 22.1257 61.5815 15.2569 56.7143 11.7217C55.0943 10.5409 52.8983 10.5409 51.2783 11.7217C46.4111 15.2569 35.3591 22.1329 20.9879 23.8321C18.6911 24.1057 16.9559 26.0353 16.9271 28.3465C16.7615 42.4153 18.8855 87.8473 52.2863 101.002C53.3807 101.434 54.6119 101.434 55.7063 101.002Z" fill="#F8F9FA" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M35.8921 54.5544L50.1985 68.8608L75.7585 43.3008" stroke="#16181C" stroke-width="2" stroke-miterlimit="10"/>
					</svg>															
				</div>
				<div class="flex flex-col gap-5">
					<h4 class="text-h4 font-semibold text-dark-50">Bezpieczeństwo</h4>
				</div>

			</div>
			<div class="col-span-6 sm:col-span-3 flex flex-col gap-4 text-center justify-center box">

				<div class="h-28 max-h-28 justify-center flex">
					<svg width="145" height="108" viewBox="0 0 145 108" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="143.707" y1="0.707107" x2="63.7071" y2="80.7071" stroke="#CAE84A" stroke-width="2"/>
						<line x1="80.7071" y1="9.70711" x2="0.707108" y2="89.7071" stroke="#CAE84A" stroke-width="2"/>
						<path d="M66.2144 96.0912C42.8288 96.0912 23.8784 77.1336 23.8784 53.7552C23.8784 30.3768 42.8288 11.4192 66.2144 11.4192C89.6 11.4192 108.55 30.3768 108.55 53.7552" fill="#F8F9FA"/>
						<path d="M66.2144 96.0912C42.8288 96.0912 23.8784 77.1336 23.8784 53.7552C23.8784 30.3768 42.8288 11.4192 66.2144 11.4192C89.6 11.4192 108.55 30.3768 108.55 53.7552" stroke="#16181C" stroke-width="1.53" stroke-miterlimit="10"/>
						<path d="M66.2145 59.0689C69.1491 59.0689 71.5281 56.6899 71.5281 53.7553C71.5281 50.8206 69.1491 48.4417 66.2145 48.4417C63.2799 48.4417 60.9009 50.8206 60.9009 53.7553C60.9009 56.6899 63.2799 59.0689 66.2145 59.0689Z" fill="#16181C"/>
						<path d="M90.5071 100.678C102.604 100.678 112.41 90.8716 112.41 78.7752C112.41 66.6788 102.604 56.8728 90.5071 56.8728C78.4108 56.8728 68.6047 66.6788 68.6047 78.7752C68.6047 90.8716 78.4108 100.678 90.5071 100.678Z" fill="#F8F9FA" stroke="#16181C" stroke-width="1.53" stroke-miterlimit="10"/>
						<path d="M79.0591 80.1288L87.9799 89.0568L103.921 73.116" stroke="#16181C" stroke-width="1.53" stroke-miterlimit="10"/>
						<path d="M66.2144 17.3593V53.7553" stroke="#16181C" stroke-width="1.53" stroke-miterlimit="10"/>
						<path d="M45.2625 53.7552H66.2144" stroke="#16181C" stroke-width="1.53" stroke-miterlimit="10"/>
					</svg>											
				</div>
				<div class="flex flex-col gap-5">
					<h4 class="text-h4 font-semibold text-dark-50">Punktualność</h4>
				</div>

			</div>
			<div class="col-span-6 sm:col-span-3 flex flex-col gap-4 text-center justify-center box">

				<div class="h-28 max-h-28 justify-center flex">
					<svg width="145" height="108" viewBox="0 0 145 108" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="143.707" y1="0.707107" x2="63.7071" y2="80.7071" stroke="#CAE84A" stroke-width="2"/>
						<line x1="80.7071" y1="9.70711" x2="0.707108" y2="89.7071" stroke="#CAE84A" stroke-width="2"/>
						<path d="M63.187 48.4416V38.8728C63.187 26.4024 73.2958 16.2864 85.7734 16.2864C98.251 16.2864 108.36 26.3952 108.36 38.8728V48.4416" fill="#F8F9FA"/>
						<path d="M63.187 48.4416V38.8728C63.187 26.4024 73.2958 16.2864 85.7734 16.2864C98.251 16.2864 108.36 26.3952 108.36 38.8728V48.4416" stroke="#020201" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M67.8022 15.4008C63.5182 13.536 60.2422 11.3976 58.291 9.98644C57.0814 9.10804 55.4542 9.10804 54.2446 9.98644C50.623 12.6216 42.4006 17.7336 31.7014 19.0008C29.995 19.2024 28.699 20.6424 28.6774 22.3632C28.5694 31.8672 29.8582 60.5736 48.6646 73.1232" stroke="#020201" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M110.671 48.4417H59.76C57.3145 48.4417 55.332 50.4241 55.332 52.8697V96.0264C55.332 98.472 57.3145 100.454 59.76 100.454H110.671C113.117 100.454 115.099 98.472 115.099 96.0264V52.8697C115.099 50.4241 113.117 48.4417 110.671 48.4417Z" fill="#F8F9FA" stroke="#020201" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M91.1447 71.6975C91.1447 75.1967 88.1207 77.9903 84.5423 77.5943C81.9791 77.3135 79.8335 75.3263 79.3799 72.7847C78.9263 70.2431 80.0711 67.9823 81.9647 66.7295V60.9191C81.9647 59.1263 83.4191 57.6719 85.2119 57.6719C87.0047 57.6719 88.4591 59.1263 88.4591 60.9191V66.7295C90.0719 67.7951 91.1375 69.6239 91.1375 71.6975H91.1447Z" stroke="#020201" stroke-width="2" stroke-miterlimit="10"/>
						<path d="M67.8096 48.4415V39.0311C67.8096 29.1095 75.852 21.0671 85.7736 21.0671C95.6952 21.0671 103.738 29.1095 103.738 39.0311V48.4415" stroke="#020201" stroke-width="2" stroke-miterlimit="10"/>
					</svg>																
				</div>
				<div class="flex flex-col gap-5">
					<h4 class="text-h4 font-semibold text-dark-50">Prywatność</h4>
				</div>

			</div>
		</div>
	</div>
</section>

{/if}