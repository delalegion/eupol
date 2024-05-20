<script>
	import Primary from "../buttons/primary.svelte";
   import Map from '$lib/images/map.webp';
</script>

<section id="onas" class="py-16 md:py-24 lg:py-32">
	<div class="mx-auto max-w-screen-xl px-4 sm:px-8">
		<div class="grid grid-cols-6 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
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
						<h4 class="font-semibold text-p1 lg:text-h4 text-dark-50">Firma EuPol powstała 1 stycznia lutego 2006 roku w Gorzycach. Od samego początku celem nadrzędnym firmy było zadowolenie naszych Klientów. Dlatego oferujemy niezawodne , zawsze skuteczne rozwiązania w zakresie transportu osób i towarów. Zakresem  działania obejmujemy realizację zleceń transportowych flotą własną jak i naszych podwykonawców na terenie Europy. Posiadamy licencję na wykonywanie transportu krajowego i międzynarodowego w przewozie osób i towarów do 3.5 DMC.</h4>
						<h5 class="text-dark-150 text-h5 font-semibold uppercase">Zatrudniamy wykwalifikowaną kadrę kierowców , dzięki czemu zapewniamy profesjonalną obsługę naszych Klientów.</h5>
						<p class="text-dark-50 text-p2 lg:text-p1 font-semibold">W strategię rozwoju EuPol wpisane jest ciągłe doskonalenie i regularna wymiana floty oraz dopasowanie jej do potrzeb naszych Klientów.</p>
					</div>
					<div class="flex">
						<Primary>Kontakt do nas</Primary>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>