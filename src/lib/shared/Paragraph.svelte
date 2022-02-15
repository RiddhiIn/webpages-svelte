<script>
	export let text = '';
	export let maxLength = 100;
	let showMore = false;
</script>

<div class="paragraph">
	<span>
		{text.substring(0, maxLength)}
	</span>
	{#if showMore}
		{text.substring(maxLength)}
		<span class="read-more" on:click={() => (showMore = false)}> ...Read Less </span>
	{:else}
		<span class="read-more" on:click={() => (showMore = true)}> ...Read More </span>
	{/if}
</div>
<style>
    .read-more {
        font-size: 13px;
        color: #9e9e9e;
    }
</style>