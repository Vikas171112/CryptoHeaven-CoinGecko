import { useQuery } from "@tanstack/react-query";
import { fetchcoinData } from "../apis/fetchCoinData";
import { useCurrencyContext } from "./CoontextsWrapper/useCurrencyContext";

const useFetchCoinData = () => {
  const { currency } = useCurrencyContext();
  const {
    isLoading,
    isSuccess,
    error,
    isError,
    data: coinData,
  } = useQuery({
    queryKey: ["coindata", currency],
    queryFn: () => fetchcoinData(currency),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
  console.log(currency);
  return { isError, isLoading, isSuccess, error, coinData };
};
export default useFetchCoinData;
