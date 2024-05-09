<script>
	import Primary from "../buttons/primary.svelte";
   import Map from '$lib/images/map.png';
</script>

<section id="about" class="py-16 md:py-24 lg:py-32">
	<div class="mx-auto max-w-screen-xl px-4 sm:px-8">
		<div class="grid grid-cols-6 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
			<div class="col-span-6 lg:col-span-6">
				<img src={Map} class="mr-3" alt="Map photo of podkarpackie region" />
			</div>
			<div class="col-span-6 lg:col-span-6">
				<div class="flex flex-col gap-6 lg:gap-10">
					<div class="flex flex-row gap-3">
						<div class=" ml-4 mr-3 border-r-2 p-0 border-primary rotate-45"></div>
						<h3 class="text-dark-50 font-semibold text-h4 lg:text-h3">O nas</h3>
					</div>
					<div class="flex flex-col gap-6">
						<h4 class="font-semibold text-p1 lg:text-h4 text-dark-50">Firma transportowa z Gorzyc oferuje szeroki zakres usług, w tym taxi osobowe, transfery na lotniska i usługi transferowe, ciesząc się zaufaniem klientów od wielu lat, zapewniając transport na całym Podkarpaciu.</h4>
						<h5 class="text-dark-150 text-h5 font-semibold uppercase">OFERUJEMY TRANSPORT W PODANYCH LOKALIZACJACH: GORZYCE, ZALESZANY, STALOWA WOLA, GRĘBÓW, AGATÓWKA, SOKOLNIKI, TRZEŚŃ, SANDOMIERZ, TARNOBRZEG, KOBIERNIKI, WRZAWY, STALE, KRAWCE, RADOMYŚL NAD SANEM.</h5>
						<p class="text-dark-50 text-p2 lg:text-p1 font-semibold">W razie pytań zapraszamy do kontaktu.</p>
					</div>
					<div class="flex">
						<Primary>Kontakt do nas</Primary>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>