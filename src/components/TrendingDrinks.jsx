function TrendingDrinks({ trendingDrinks }) {
  return (
    <ul>
      {trendingDrinks.map((drink, index) => (
        <li key={drink.drink_id}>
          <p>{index + 1}</p>
          <img
            src={
              drink.poster_url
                ? `${drink.poster_url}/small`
                : "./no-drink.png"
            }
            alt={drink.searchTerm}
          />
          <span>{drink.searchTerm[0].toUpperCase() + drink.searchTerm.substring(1)}</span>
        </li>
      ))}
    </ul>
  );
}

export default TrendingDrinks;
