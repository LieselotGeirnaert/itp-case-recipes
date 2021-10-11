import styles from "./RecipeCard.module.css";
import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({ recipe }) => {
  const { title, cookingTime, slug, thumbnail } = recipe.fields;

  return (
    <section className={styles.recipe}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.cooking}>{cookingTime} minuten</p>
      <Link href={`/recipes/${slug}`}>
        <a className={styles.link}>Recept bekijken</a>
      </Link>
      <div className={styles.img}>
        <Image
          src={`https:` + thumbnail.fields.file.url}
          alt={title}
          width={320}
          height={320}
          // layout="fill"
          // objectFit="contain"
        />
      </div>
    </section>
  );
};

export default RecipeCard;
