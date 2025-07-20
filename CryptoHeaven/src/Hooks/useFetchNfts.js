import { useQuery } from "@tanstack/react-query";
import { fetchNftList } from "../apis/fetchNftList";

const useFetchNftlist = (page, per_page) => {
  const {
    isLoading,
    isSuccess,
    error,
    isError,
    data: nftdata,
  } = useQuery({
    queryKey: ["nftdata", page, per_page], // add page, per_page to queryKey for proper caching
    queryFn: () => fetchNftList(page, per_page), // note per_page first then page as per your fetchcoinData signature
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
  return { isError, isLoading, isSuccess, error, nftdata };
};
export default useFetchNftlist;
