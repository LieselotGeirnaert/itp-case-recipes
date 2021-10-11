import Link from "next/link";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
//styling
import styles from "../../styles/RecipeDetail.module.css";
// components
import Layout from "../../components/Layout";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const RecipeDetail = ({ recipe }) => {
  const { title, cookingTime, description, ingredients, supplies } =
    recipe.fields;

  console.log(supplies);
  return (
    <Layout>
      <div>
        <Link href={`/`}>
          <a className={styles.back}>Terug naar overzicht</a>
        </Link>
      </div>
      {recipe ? (
        <section className={styles.recipe}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.cooking}>{cookingTime} minuten</p>

          <section className={styles.ingredients}>
            <h3 className={styles.subtitle}>Ingrediënten</h3>
            <ul className={styles.list}>
              {ingredients.map((ingredient, index) => (
                <li key={index} className={styles.listItem}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </section>

          {supplies ? (
            <section className={styles.supplies}>
              <h3 className={styles.subtitle}>Benodigdheden</h3>
              <ul className={styles.list}>
                {supplies.map((supply, index) => (
                  <li key={index} className={styles.listItem}>
                    {supply}
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            ""
          )}

          <section className={styles.description}>
            <h3 className={styles.subtitle}>Bereiding</h3>
            {documentToReactComponents(description)}
          </section>
        </section>
      ) : (
        <p>Recept niet gevonden</p>
      )}
    </Layout>
  );
};

export default RecipeDetail;

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });

  return {
    props: {
      recipe: items[0],
    },
  };
}

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "recipe",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return { paths, fallback: false };
};
