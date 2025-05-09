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
					access_key: 'YOUR-ACCESS-KEY-HERE', // Replace with your Web3Forms access key
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
	<title>Vigilia AI - Secure Your AI Systems</title>
	<meta name="description" content="Vigilia AI helps you secure your AI systems with advanced monitoring and protection." />
</svelte:head>

<div class="relative min-h-screen">
	<!-- Hero Section -->
	<section class="relative pt-32 md:pt-40">
		<div class="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
						Secure Your AI Systems
					</span>
				</h1>
				<p class="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mb-8">
					Protect your AI models and systems from threats with advanced monitoring and security solutions.
				</p>
				
				<!-- Waitlist Form -->
				<div class="max-w-md mx-auto">
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
			</div>
		</div>
	</section>
</div>




