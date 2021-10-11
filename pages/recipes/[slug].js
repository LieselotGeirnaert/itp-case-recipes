import styles from "../../styles/RecipeDetail.module.css";
import Link from "next/link";
import Image from "next/image";

const RecipeDetail = () => {
  // const { title, cookingTime, slug } = recipe.fields;

  return (
    <section className={styles.recipe}>
      <p>yes</p>
       <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{/* {description} */}</p>
      <p className={styles.cooking}>{cookingTime} minuten</p>
      <Link href={`/recipes/${slug}`}>
        <a className={styles.link}>Recept bekijken</a>
      </Link>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <ul>
        {recipe.fields.supplies.map((supply, index) => (
          <li key={index}>{supply}</li>
        ))}
      </ul>
    </section>
  );
};

export default RecipeDetail;
