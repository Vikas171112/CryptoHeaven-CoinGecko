import { useQuery } from "@tanstack/react-query";
import { useCurrencyContext } from "./CoontextsWrapper/useCurrencyContext";
import { fetchcoinData } from "../apis/fetchCoinData";

const useFetchCoinData = (page = 1, per_page = 10) => {
  const { currency } = useCurrencyContext();
  const {
    isLoading,
    isSuccess,
    error,
    isError,
    data: coinData,
  } = useQuery({
    queryKey: ["coindata", currency, page, per_page], // add page, per_page to queryKey for proper caching
    queryFn: () => fetchcoinData(currency, per_page, page), // note per_page first then page as per your fetchcoinData signature
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
  return { isError, isLoading, isSuccess, error, coinData };
};
export default useFetchCoinData;
