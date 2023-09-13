import s from './styles.module.css'
import { ConnectWallet } from "@/features";
import {useAccount, useBalance} from "wagmi";

const Main = () => {
	const {address} = useAccount()
	const {data} = useBalance({address})
	return (
		<div className={s.container}>
			<ConnectWallet />
			{address && (<div className={s.container__balance}>
				Balance: {data?.formatted} {data?.symbol}
			</div>)}
		</div>
	)
}

export default Main