export const useFormatMoney = () => {
  const formatMoney = (money: number) => {
    return money.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  };

  return {
    formatMoney,
  };
};
