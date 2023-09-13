import s from './styles.module.css'
import { ConnectWallet } from "@/features";
import {useAccount, useBalance} from "wagmi";
import Currency from "@/entities/Currency";

const Main = () => {
	const toCurrency = "USDT"
	const {address} = useAccount()
	const {data} = useBalance({address})
	const {convert} = Currency.useGetCurrency({fromCurrency: data?.symbol, toCurrency })
	const convertAmount = convert ? Number(data?.formatted) * convert[toCurrency] : Number(data?.formatted)
	return (
		<div className={s.container}>
			<ConnectWallet />
			{address && (<div className={s.container__balance}>
				{address ? `Address: ${address}` : null}
				<br/>
				Balance: {convertAmount} {toCurrency}
			</div>)}
		</div>
	)
}

export default Main