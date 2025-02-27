import { useState, useEffect } from "react";

import Search from "./components/Search";
import Spinner from "./components/Spinner";
import DrinkCard from "./components/DrinkCard";
import TrendingDrinks from "./components/TrendingDrinks";

import { useDebounce } from "./hooks/useDebounce";
import { getTrendingDrinks, updateSearchCount } from "./services/appwrite";

const API_BASE_URL = "https://www.thecocktaildb.com";
const API_OPTIONS = {
  method: 'GET',
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [drinkList, setDrinkList] = useState([]);
  const [trendingDrinks, setTrendingDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 600);

  async function fetchDrinks (query = "") {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const endpoint = query
      ? `${API_BASE_URL}/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
      : `${API_BASE_URL}/api/json/v1/1/filter.php?c=Cocktail`;

      const response = await fetch(endpoint, API_OPTIONS);

      const data = await response.json();

      if (data.drinks === null) {
        setErrorMessage(`No results found for "${query}".`);
        setDrinkList([]);
        return;
      }

      setDrinkList(data.drinks);
      
      if (query && data.drinks.length > 0) {
        await updateSearchCount(data.drinks[0]);
      }
    } catch (error) {
      console.error(`Error fetching drinks: ${error}`);
      setErrorMessage("Error fetching drinks. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  async function loadTrendingDrinks () {
    try {
      const drinks = await getTrendingDrinks();

      setTrendingDrinks(drinks);
    } catch (error) {
      console.error(`Error fetching drinks: ${error}`);
    }
  }

  useEffect(() => {
    fetchDrinks(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingDrinks();
  }, []);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./shakeit-logo.png" alt="ShakeIt logo" />
          <h1>
            <span className="text-gradient">Shake it!</span> Mix, explore, and
            enjoy incredible drinks.
          </h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingDrinks.length > 0 && (
          <section className="trending">
            <h2>Trending Drinks</h2>

            <TrendingDrinks trendingDrinks={trendingDrinks} />
          </section>
        )}

        <section className="all-drinks">
          <h2>All Drinks</h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <>
              <ul>
                {drinkList.map((drink) => (
                  <DrinkCard
                    key={drink.idDrink}
                    drink={drink}
                  />
                ))}
              </ul>
            </>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
