<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let email = '';
	let status = '';
	let loading = false;

	async function handleSubmit(e: Event) {
		e.preventDefault();
		loading = true;
		status = '';

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					access_key: '8593b668-859e-4370-9fac-9ddd59c0483e',
					email: email,
					subject: 'New Waitlist Signup',
					message: `New waitlist signup from: ${email}`,
					from_name: 'Vigilia AI Waitlist'
				})
			});

			const result = await response.json();
			if (result.success) {
				status = 'success';
				email = '';
			} else {
				status = 'error';
			}
		} catch (error) {
			status = 'error';
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Vigilia AI - Scan, Classify, Secure The AI Frontier</title>
	<meta name="description" content="Vigilia AI helps you secure your AI systems with advanced monitoring and protection." />
</svelte:head>

<div class="relative min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[size:40px_40px]"></div>

	<!-- Hero Section -->
	<section class="relative pt-32 md:pt-40">
		<div class="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
					<div class="overflow-hidden">
						<span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-white to-secondary-400 inline-block animate-[slideInFromBottom_0.8s_ease-out_forwards]" style="transform: translateY(100%); animation-delay: 0.3s;">
							Scan, Classify, Secure
						</span>
					</div>
					<div class="overflow-hidden mt-2">
						<span class="bg-clip-text text-transparent bg-gradient-to-r from-secondary-300 to-primary-300 inline-block animate-[slideInFromBottom_0.8s_ease-out_forwards]" style="transform: translateY(100%); animation-delay: 0.6s;">
							The AI Frontier
						</span>
					</div>
				</h1>

				<style>
					@keyframes slideInFromBottom {
						0% {
							transform: translateY(100%);
							opacity: 0;
						}
						100% {
							transform: translateY(0);
							opacity: 1;
						}
					}
				</style>

				<!-- Waitlist Form -->
				<div class="max-w-md mx-auto animate-[fadeIn_1s_ease-out_forwards]" style="opacity: 0; animation-delay: 1.2s;">
					<form on:submit={handleSubmit} class="flex flex-col sm:flex-row gap-3">
						<input
							type="email"
							bind:value={email}
							class="input flex-grow"
							placeholder="Enter your email"
							required
							disabled={loading}
						/>
						<button 
							type="submit" 
							class="btn btn-primary whitespace-nowrap"
							disabled={loading}
						>
							{#if loading}
								<span class="inline-block animate-spin mr-2">⟳</span>
								Processing...
							{:else}
								Join Waitlist
							{/if}
						</button>
					</form>

					{#if status === 'success'}
						<p class="mt-4 text-green-400">Thanks for joining! We'll be in touch soon.</p>
					{:else if status === 'error'}
						<p class="mt-4 text-red-400">Something went wrong. Please try again.</p>
					{/if}
				</div>

				<style>
					@keyframes fadeIn {
						0% {
							opacity: 0;
							transform: translateY(10px);
						}
						100% {
							opacity: 1;
							transform: translateY(0);
						}
					}
				</style>
			</div>
		</div>
	</section>
</div>




