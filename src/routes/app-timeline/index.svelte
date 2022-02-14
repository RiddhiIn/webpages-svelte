<script>
	import { constants } from '$lib/constants';
	import Divider from '$lib/shared/Divider.svelte';
	let VIDEO_PROVIDER = constants.videoProvider;
	let apps = [
		{
			type: 'video',
			app: {
				name: 'Hotstar',
				package: 'in.startv.hotstar',
				postTime: '04/03/2021',
				status: 'active',
				icon: 'https://mofirst.pc.cdn.bitgravity.com/preview_images/9f814b26d0e6014cf10e1ea7583e7206.webp',
				id: 62907
			},
			videoId: 'yt-6iQb60oXIpM',
			youtubeId: 'GF0H5DZAE2g',
			thumbnail: 'https://mofirst.pc.cdn.bitgravity.com/preview_images/GF0H5DZAE2g.jpg',
			description:
				'Special OPS is an Indian Hindi-language action espionage thriller web series for Hotstar Specials, created and directed by Neeraj Pandey, with Shivam Nair serving the credits for co-direction. Pandey also produced the series under his Friday Storytellers, a division of his production house, for providing content to the digital medium. It stars Kay Kay Menon as Himmat Singh, a member of Research and Analysis Wing, forms a team of five agents, in order to track down a person, who is the mastermind of the terror attacks which took place in India.',
			deeplink: ''
		},
		{
			type: 'Paragraph',
			app: {
				name: 'redBus - World’s #1 Online Bus Ticket Booking App',
				package: 'in.redbus.android',
				postTime: '25/02/2021',
				status: 'active',
				icon: 'https://mofirst.pc.cdn.bitgravity.com/preview_images/008f56df5bc3dbb01859bb44c6dbf4fd.webp',
				id: 145771
			},
			description:
				'edBus is an Indian online bus ticketing platform providing ticket booking facility through its website, iOS and Android mobile apps. Headquartered in Bengaluru, India, it connects bus travellers with a network of over 2500 bus operators, across India, countries in South East Asia and Latin America. redBus is a subsidiary of Ibibo Group.The platform is also a part of India’s leading online travel company MakeMyTrip Limited. redBus currently runs in six countries – India, Malaysia, Indonesia, Singapore, Peru and Colombia and has so far registered over 180 million trips, with a customer base of over 20 million.',
			deeplink: ''
		},
		{
			type: 'photo',
			app: {
				name: 'SonyLIV: Originals, Hollywood, LIVE Sport, TV Show',
				package: 'com.sonyliv',
				postTime: '02/03/2021',
				status: 'active',
				icon: 'https://mofirst.pc.cdn.bitgravity.com/preview_images/381a7670dae5b459323f9e715a5d2cca.webp',
				id: 28349,
				postImage: 'https://mofirst.pc.cdn.bitgravity.com/homepage_banner/SonyLIV.webp'
			},
			description:
				"The service was launched on 23 January 2013.[3] Sony Liv is a part of the network of television channels owned by Sony Pictures Networks India Pvt. Ltd. in India. The network's other channels include: Sony TV, Sony SAB, Sony Ten, Sony Max, Sony Max 2, Sony Six, Sony Pix, and Sony Yay (formerly Animax Asia). It has access to 18 years of content from channels that are part of the Sony Entertainment Network. That translates to more than 700 movies and 40,000+ hours of television show coverage in Hindi, English, Telugu and Tamil.[4] It also offers original web series like Scam 1992: The Harshad Mehta Story, Lovebytes, Married Women Diaries, JL50, etc. The application underwent a revamp in its appearance in June 2020.",
			deeplink: ''
		}
	];

	const getVideoSourceUrl = (videoId) => {
		switch (VIDEO_PROVIDER) {
			case 'VIMEO':
				return `https://player.vimeo.com/video/${videoId}?controls=1`;
			case 'YOUTUBE':
				return `https://www.youtube.com/embed/${videoId}`;
			case 'TATA':
				return `https://cdnvideo-api.appbazaar.com/hls/${videoId}/master.m3u8`;
		}
	};
</script>

<svelte:head>
	<title>App Timeline</title>
</svelte:head>
<div class="main">
	{#each apps as app, index (index)}
		<div class="app-container">
			<div class="app-header">
				<div class="app-logo">
					<img src={app.app.icon} alt={app.app.name} />
				</div>
				<div class="app-text">
					<div class="app-title">
						{app.app.name}
					</div>
					<div class="app-subtitle">{app.app.postTime}</div>
				</div>
			</div>
			<div class="app-desc">
				{app.description}
			</div>
			{#if app.type === 'video'}
				<div class="app-media">
					<video
						height="156px"
						preload="none"
						poster={app.thumbnail}
						video-url={'https://www.w3schools.com/tags/movie.mp4'}
					/>
				</div>
			{:else if app.type === 'photo'}
				<div class="app-media">
					<img src={app.app.postImage} />
				</div>
			{/if}
		</div>
		<Divider margin="20px" />
	{/each}
</div>

<style>
	.main {
		padding: 20px;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		font-family: Roboto;
	}
	.app-logo img {
		width: 52px;
		height: 52px;
		object-fit: contain;
		border-radius: 12px;
	}
	.app-text {
		margin: 0 0 2px;
		font-size: 15px;
		color: #323232;
	}
	.app-header {
		display: grid;
		grid-template-columns: 1fr auto 7fr;
		grid-column-gap: 15px;
		align-items: center;
	}
	.app-title {
		width: 190px;
		height: 18px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 15px;
		color: #323232;
		font-weight: 500;
	}
	.app-subtitle {
		font-size: 12px;
		color: #737373;
	}
	.app-container {
		display: grid;
		grid-template-rows: 1fr;
	}
	.app-desc {
		font-size: 13px;
		line-height: 1.23;
		color: #252525;
		margin-top: 11px;
	}
	.app-media {
		width: 100%;
		border-radius: 12px;
		overflow: hidden;
		position: relative;
		margin-top: 10px;
	}
	.app-media video {
		width: inherit;
		height: 100%;
		object-fit: contain;
	}
	.app-media img {
		object-fit: contain;
		width: inherit;
		height: 100%;
	}
</style>
