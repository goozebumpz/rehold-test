import {  createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

const {chains, webSocketPublicClient, publicClient} = configureChains([mainnet], [publicProvider()])

const config = createConfig({
	autoConnect: true,
	connectors: [
		new MetaMaskConnector({ chains }),
		// new WalletConnectConnector({
		// 	chains,
		// 	options: {
		// 		projectId: 'app',
		// 	},
		// }),
	],
	publicClient,
	webSocketPublicClient,
})

export default config