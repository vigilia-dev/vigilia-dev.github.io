<script lang="ts">
	import { browser } from '$app/environment';
	import { webVitals } from '$lib/vitals';
	import { base } from '$app/paths';

	import '../app.css';

	let isScrolled = false;

	// Handle scroll events for nav bar styling
	if (browser) {
		webVitals();
		window.addEventListener('scroll', () => {
			isScrolled = window.scrollY > 20;
		});
	}
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/v-logo.svg" />
	<link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<div class="min-h-screen flex flex-col font-sans">
	<nav class="fixed w-full z-50 transition-all duration-300 {isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}"
		aria-label="Main navigation">
		<div class="container">
			<div class="flex justify-between items-center h-16 md:h-20">
				<!-- Logo -->
				<a href="/" class="flex items-center space-x-3 group" aria-label="Vigilia AI Home">
					<div class="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
						<img src="/v-logo.svg" alt="" class="h-7 w-7 md:h-9 md:w-9 transition-transform duration-300 group-hover:scale-110" />
						<div class="absolute inset-0 bg-primary-500/20 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</div>
					<span class="text-xl md:text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
						Vigilia AI
					</span>
				</a>
			</div>
		</div>
	</nav>

	<main class="flex-grow">
		<slot />
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		overflow-x: hidden;
		background-color: #0f172a; /* dark-950 color */
	}
</style>
