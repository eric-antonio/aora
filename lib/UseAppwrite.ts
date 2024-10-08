import { useState, useEffect } from "react";
import { Alert } from "react-native";

interface DataProps {
  id: number;
  title: string;
}

const useAppwrite = (fn: () => Promise<any>) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fn();
      setData(response);
    } catch (error) {
      Alert.alert(
        "Handling a problem fetching results!",
        "Well i also don't know  what's going on "
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();
  return { data, isLoading, refetch };
};

export default useAppwrite;
