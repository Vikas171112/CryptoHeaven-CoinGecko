import { useQuery } from "@tanstack/react-query";

import { fetchGlobalMarketData } from "../apis/fetchGlobalMarketData";

const useFetchGlobalMarketData = () => {
  const {
    isLoading,
    isSuccess,
    error,
    isError,
    data: globalMarketData,
  } = useQuery({
    queryKey: ["globalMarketData"], // add page, per_page to queryKey for proper caching
    queryFn: () => fetchGlobalMarketData(), // note per_page first then page as per your fetchcoinData signature
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
  return { isError, isLoading, isSuccess, error, globalMarketData };
};
export default useFetchGlobalMarketData;
