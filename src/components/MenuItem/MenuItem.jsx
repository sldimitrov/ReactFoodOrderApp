import Button from "../../UI/Button";

export default function MenuItem({ meal }) {
  return (
    <li className="meal-item">
      <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
      <article>
        <h3>{meal.name}</h3>
        <p className="meal-item-description">{meal.description}</p>
        <h4 className="meal-item-price">${meal.price}</h4>
        <p className="meal-item-actions">
          <Button>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
