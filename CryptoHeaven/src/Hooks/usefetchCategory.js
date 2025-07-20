import { useQuery } from "@tanstack/react-query";
import { fetchcoinHistoricalData } from "../apis/fetchHistoricalData";
import { useCurrencyContext } from "./CoontextsWrapper/useCurrencyContext";
import { fetchCategorydata } from "../apis/fetchCategorydata";

const useFetchCategoryData = () => {
  const { currency } = useCurrencyContext();
  const {
    isLoading,
    isSuccess,
    error,
    isError,
    data: categoryData,
  } = useQuery({
    queryKey: ["categoryData"], // always pass id too
    queryFn: () => fetchCategorydata(),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return { isError, isLoading, isSuccess, error, categoryData };
};

export default useFetchCategoryData;
