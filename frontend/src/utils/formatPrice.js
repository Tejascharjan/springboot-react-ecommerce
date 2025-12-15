export const formatPrice = (amount) => {
     return new Intl.NumberFormat("en-US", {style: "currency", currency: "INR"}).format(amount);
};

export const formatPriceCalculation = (quantity, price) => {
     return (Number(quantity) * Number(price)).toFixed(2);
};

export const formatRevenue = (value) => {
     if (value >= 1e7) {
          return (value / 1e7).toFixed(1) + " Cr";
     } else if (value >= 1e5) {
          return (value / 1e5).toFixed(1) + " L";
     } else if (value >= 1e3) {
          return (value / 1e3).toFixed(1) + " K";
     } else {
          return value;
     }
};
