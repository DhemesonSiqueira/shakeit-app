function DrinkCard({ drink: { strDrink: title, strDrinkThumb: image_path }}) {
  return (
    <li className="drink-card">
      <img src={`${image_path}/medium`}
        alt={title} 
      />

      <div className="mt-4">
        <h3>{title}</h3>
      </div>
    </li>
  );
}

export default DrinkCard;
