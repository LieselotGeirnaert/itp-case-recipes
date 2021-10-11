import styles from "./RecipeCard.module.css";
import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({ recipe }) => {
  return (
    <section className={styles.recipe}>
      <h3 className={styles.title}>{recipe.fields.title}</h3>
      <p className={styles.description}>{/* {recipe.fields.description} */}</p>
      <p className={styles.cooking}>{recipe.fields.cookingTime} minuten</p>
      <Link href={`/recipe/${recipe.id}`}>
        <a className={styles.link}>Recept bekijken</a>
      </Link>
      {/* <ul>
        {recipe.fields.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <ul>
        {recipe.fields.supplies.map((supply, index) => (
          <li key={index}>{supply}</li>
        ))}
      </ul> */}
    </section>
  );
};

export default RecipeCard;
