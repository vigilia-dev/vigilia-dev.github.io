<script lang="ts">
	import { browser } from '$app/environment';
	import { webVitals } from '$lib/vitals';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';

	import '../app.css';

	let isMenuOpen = false;
	let isScrolled = false;

	// Close mobile menu when route changes
	$: if ($page.url.pathname) {
		isMenuOpen = false;
	}

	// Handle scroll events for nav bar styling
	if (browser) {
		webVitals();
		window.addEventListener('scroll', () => {
			isScrolled = window.scrollY > 20;
		});
	}

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' }
	];
</script>

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

				<!-- Desktop Navigation -->
				<div class="hidden md:flex items-center space-x-1">
					{#each navLinks as { href, label }}
						<a
							{href}
							class="relative px-4 py-2 rounded-lg text-dark-700 hover:text-primary-600 transition-colors duration-200 font-medium group"
							class:active="{$page.url.pathname === href}"
							aria-current="{$page.url.pathname === href ? 'page' : undefined}"
						>
							{label}
							{#if $page.url.pathname === href}
								<div class="absolute inset-0 bg-primary-50 rounded-lg -z-10"></div>
							{:else}
								<div class="absolute inset-0 bg-primary-50/0 rounded-lg -z-10 transition-colors duration-200 group-hover:bg-primary-50/50"></div>
							{/if}
						</a>
					{/each}

				</div>

				<!-- Mobile Menu Button -->
				<button
					class="md:hidden p-2 rounded-lg text-dark-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
					on:click={() => (isMenuOpen = !isMenuOpen)}
					aria-label="{isMenuOpen ? 'Close menu' : 'Open menu'}"
					aria-expanded={isMenuOpen}
					aria-controls="mobile-menu"
				>
					<svg
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						{#if isMenuOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{/if}
					</svg>
				</button>
			</div>

			<!-- Mobile Navigation -->
			{#if isMenuOpen}
				<div
					class="fixed inset-0 bg-white z-40"
					transition:fade={{ duration: 200 }}
					id="mobile-menu"
					role="dialog"
					aria-modal="true"
				>
					<div class="container h-full py-8">
						<div class="flex flex-col h-full">
							<div class="flex-1 py-8">
								<nav class="flex flex-col space-y-1" aria-label="Mobile navigation">
									{#each navLinks as { href, label }}
										<a
											{href}
											class="px-4 py-4 rounded-lg text-lg font-medium transition-colors relative group"
											class:active="{$page.url.pathname === href}"
											aria-current="{$page.url.pathname === href ? 'page' : undefined}"
										>
											<span class="relative z-10 {$page.url.pathname === href ? 'text-primary-600' : 'text-dark-700'}">{label}</span>
											{#if $page.url.pathname === href}
												<div class="absolute inset-0 bg-primary-50 rounded-lg"></div>
											{:else}
												<div class="absolute inset-0 bg-primary-50/0 rounded-lg transition-colors duration-200 group-hover:bg-primary-50/50"></div>
											{/if}
										</a>
									{/each}
								</nav>
							</div>

						</div>
					</div>
				</div>
			{/if}
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

	/* Hide scrollbar when mobile menu is open */
	:global(body.menu-open) {
		overflow: hidden;
	}
</style>
