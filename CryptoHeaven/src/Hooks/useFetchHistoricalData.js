import { useQuery } from "@tanstack/react-query";
import { fetchcoinHistoricalData } from "../apis/fetchHistoricalData";
import { useCurrencyContext } from "./CoontextsWrapper/useCurrencyContext";

const useFetchCoinHistoricalData = (id, days = 30) => {
  const { currency } = useCurrencyContext();
  const {
    isLoading,
    isSuccess,
    error,
    isError,
    data: coinHistoricalData,
  } = useQuery({
    queryKey: ["coindata", id, currency, days], // always pass id too
    queryFn: () => fetchcoinHistoricalData(currency, days, id),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return { isError, isLoading, isSuccess, error, coinHistoricalData };
};

export default useFetchCoinHistoricalData;
