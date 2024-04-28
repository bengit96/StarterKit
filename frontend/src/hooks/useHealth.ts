import { queryKeys } from "@/constants/query-key";
import { ApiService } from "@/services/ApiService";
import { useQuery } from "@tanstack/react-query";
import { HealthRes } from "~shared/dtos";

export const useGetHealth = () => {
  const {
    isLoading: isHealthLoading,
    data: health,
    isError: isHealthError,
  } = useQuery({
    queryKey: queryKeys.health(),
    queryFn: async () => {
      console.log("test");
      const { data } = await ApiService.get<HealthRes>("health");
      console.log(data);
      return data;
    },
  });
  return {
    isHealthLoading,
    health,
    isHealthError,
  };
};
