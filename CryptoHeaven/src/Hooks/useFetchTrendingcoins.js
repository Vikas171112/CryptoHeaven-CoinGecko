import { useQuery } from "@tanstack/react-query";
import { fetchcoinData } from "../apis/fetchCoinData";
import { useCurrencyContext } from "./CoontextsWrapper/useCurrencyContext";
import { fetchtrendingcoinData } from "../apis/fetchTrendingCoins";

const useFetchTrendingCoinData = () => {
  const { currency } = useCurrencyContext();
  const {
    isLoading,
    isSuccess,
    error,
    isError,
    data: TrendingCoinData,
  } = useQuery({
    queryKey: ["trendingcoin"],
    queryFn: () => fetchtrendingcoinData(),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
  console.log(currency);
  return { isError, isLoading, isSuccess, error, TrendingCoinData };
};
export default useFetchTrendingCoinData;
