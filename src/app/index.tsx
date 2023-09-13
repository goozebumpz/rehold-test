import {WagmiConfig} from "wagmi";
import configWagmi from './config/wagmiConfig'

import {Main} from "@/pages"
import "./styles/variables.css"
import "./styles/reset.css"
import "./styles/main.css"

function App() {
	return (
		<WagmiConfig config={configWagmi}>
			<Main />
		</WagmiConfig>
	)
}

export default App
