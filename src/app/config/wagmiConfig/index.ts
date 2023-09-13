import { createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { bsc } from 'wagmi/chains';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

const {chains, webSocketPublicClient, publicClient} = configureChains([bsc], [publicProvider()])

const config = createConfig({
	autoConnect: true,
	connectors: [
		new MetaMaskConnector({ chains }),
	],
	publicClient,
	webSocketPublicClient,
})

export default config