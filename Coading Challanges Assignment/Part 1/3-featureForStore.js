// Define the object with item prices in USD
const items = {
    item1: 10,
    item2: 20,
    item3: 30,
    item4: 40,
    item5: 50
  };
  
  // Define the exchange rate
  const exchangeRate = 80;
  
  // Use map to create a new object with prices in INR
  const itemsInRupees = Object.fromEntries(
    Object.entries(items).map(([key, value]) => [key, value * exchangeRate])
  );
  
  // Log the new object to the console
  console.log(itemsInRupees);
  