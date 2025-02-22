import { useState, useEffect } from "react";

import Search from "./components/Search";
import Spinner from "./components/Spinner";
import DrinkCard from "./components/DrinkCard";

import { useDebounce } from "./hooks/useDebounce";

const API_BASE_URL = "https://www.thecocktaildb.com";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [drinkList, setDrinkList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 600);

  async function fetchDrinks() {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/json/v1/1/filter.php?c=Cocktail`, {
        method: "GET",
      });

      const data = await response.json();

      setDrinkList(data.drinks.sort(() => Math.random() - 0.5).slice(0, 32));
    } catch (error) {
      console.error(`Error fetching drinks: ${error}`);
      setErrorMessage("Error fetching drinks. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchDrinks(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./logo-shakeit.png" alt="Hero Banner" />
          <h1>
          <span className="text-gradient">Shake it!</span> Mix, explore, and enjoy incredible drinks.
          </h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {/* {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Drinks</h2>

            <TrendingMovies trendingMovies={trendingMovies} />
          </section>
        )} */}

        <section className="all-drinks">
          <h2>All Drinks</h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {drinkList.map((drink) => (
                <DrinkCard key={drink.idDrink} drink={drink} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
