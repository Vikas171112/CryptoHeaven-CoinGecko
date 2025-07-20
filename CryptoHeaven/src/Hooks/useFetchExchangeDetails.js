import { useQuery } from "@tanstack/react-query";
import { fetchCoinDetails } from "../apis/fetchCoinDetails";
import { useCurrencyContext } from "./CoontextsWrapper/useCurrencyContext";
import { fetchExchangeDetails } from "../apis/fetchExchangeedtails";

function useFetchExchangeDetails(Id) {
  const { currency } = useCurrencyContext();

  const {
    isError,
    isLoading,
    data: Exchanges,
  } = useQuery({
    queryKey: ["ExchaneID", Id],
    queryFn: () => fetchExchangeDetails(Id),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  return {
    currency,
    isError,
    isLoading,
    Exchanges,
  };
}

export default useFetchExchangeDetails;
