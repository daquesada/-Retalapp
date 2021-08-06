import { useCallback } from "react";

export const useFormatMoney = () => {
  const formatMoney = useCallback((money: number) => {
    return money.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  }, []);

  return {
    formatMoney,
  };
};
