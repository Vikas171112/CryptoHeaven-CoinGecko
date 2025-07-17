import { useQuery } from "@tanstack/react-query";
import { fetchCoinDetails } from "../apis/fetchCoinDetails";
import { useCurrencyContext } from "./CoontextsWrapper/useCurrencyContext";

function useFetchCoinDetails(coinId) {
  const { currency } = useCurrencyContext();

  const {
    isError,
    isLoading,
    data: coin,
  } = useQuery({
    queryKey: ["coin", coinId],
    queryFn: () => fetchCoinDetails(coinId),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  return {
    currency,
    isError,
    isLoading,
    coin,
  };
}

export default useFetchCoinDetails;
