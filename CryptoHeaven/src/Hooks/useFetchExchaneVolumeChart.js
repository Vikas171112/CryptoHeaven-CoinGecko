import { useQuery } from "@tanstack/react-query";
import { useCurrencyContext } from "./CoontextsWrapper/useCurrencyContext";
import { fetchExchangeByVolumeChart } from "../apis/fetchExchangeByVolumeChart";

// Set high cacheTime and staleTime to reduce repeated requests
function useFetchExchangeVolumeChart(Id) {
  const { currency } = useCurrencyContext();

  const {
    isError,
    isLoading,
    error,
    data: ExchangesVolume,
  } = useQuery({
    queryKey: ["ExchangeVolume", Id],
    queryFn: () => fetchExchangeByVolumeChart(Id),
    // Keep data fresh (stale) for 5 minutes:
    cacheTime: 1000 * 60 * 10, // keeps cache for 10 mins after unused
    staleTime: 1000 * 60 * 5, // considers data fresh for 5 mins
    refetchOnMount: false, // do not refetch on every mount
    refetchOnReconnect: false, // do not refetch if internet comes back
    refetchOnWindowFocus: false, // do not auto-refetch on tab focus
    retry: 1, // only retry failed requests once
  });

  return {
    currency,
    isError,
    isLoading,
    ExchangesVolume,
    error,
  };
}

export default useFetchExchangeVolumeChart;
