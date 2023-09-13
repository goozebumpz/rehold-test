import s from './styles.module.css'
import {useAccount, useConnect, useDisconnect} from 'wagmi'
import {Button} from '@/shared/ui'

const ConnectWallet = () => {
	const { connect, connectors, error, isLoading, pendingConnector } =
		useConnect()
	const {disconnect} = useDisconnect()
	const {address} = useAccount()

	return (
		<div className={s.container}>
			{connectors.map((connector) => (
				<Button
					disabled={!connector.ready || !!address}
					key={connector.id}
					onClick={() => connect({ connector })}
				>
					{!address && `Connect to ${connector.name}`}
					{!!address && connector.name}
					{isLoading &&
						connector.id === pendingConnector?.id &&
						"Loading"}
				</Button>
			))}
			<Button onClick={() => disconnect()} disabled={!address}>Disconnect</Button>
			{error && <span>{error.message}</span>}
		</div>
	)
}

export default ConnectWallet