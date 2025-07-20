import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchExchangeList } from "../apis/fetchExchangeList";

const PER_PAGE = 20; // or whatever you prefer

const useFetchExchangeList = () => {
  return useInfiniteQuery({
    queryKey: ["exchangeData"],
    queryFn: ({ pageParam = 1 }) =>
      fetchExchangeList({ pageParam, per_page: PER_PAGE }),
    getNextPageParam: (lastPage, allPages) => {
      // If the lastPage has length < per_page, it's the end
      if (!lastPage || lastPage.length < PER_PAGE) return undefined;
      return allPages.length + 1; // next page number
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};

export default useFetchExchangeList;
