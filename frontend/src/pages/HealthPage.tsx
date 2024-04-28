import { useGetHealth } from "@/hooks/useHealth";
import { Center, Spinner, Text } from "@chakra-ui/react";

export const HealthPage = () => {
  const { health, isHealthLoading } = useGetHealth();
  return isHealthLoading ? (
    <Center>
      <Spinner />
    </Center>
  ) : (
    <Center>
      <Text>{health.status}</Text>
    </Center>
  );
};
