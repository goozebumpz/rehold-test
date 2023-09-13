import {useState, useEffect} from "react";

interface IUseGetCurrencyParams {
	fromCurrency?: string
	toCurrency?: string
}

function useGetCurrency ({fromCurrency, toCurrency}: IUseGetCurrencyParams) {
	const [convert, setConvert] = useState<Record<string, number> | null>(null)

	const fetchCurrency = async () => {
		const res = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${fromCurrency}&tsyms=${toCurrency}`)
		const json = await res.json() as Record<string, number>
		setConvert(json)
	}

	useEffect( () => {
		if (fromCurrency && toCurrency) {
			fetchCurrency()
		}
	}, [fromCurrency, toCurrency]);


	return {convert, toCurrency, fromCurrency}
}

export default useGetCurrency