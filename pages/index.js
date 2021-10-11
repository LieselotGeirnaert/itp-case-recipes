import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
// styling
import styles from "../styles/Home.module.css";
// components
import Layout from "../components/Layout";
import RecipeCard from "../components/RecipeCard";

export default function Home({ recipes }) {
  console.log(recipes);

  return (
    <Layout>
      <h2 className={styles.title}>Recepten van de dag</h2>
      <div className={styles.recipes}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: 'recipe' });
  return {
    props: {
      recipes: res.items
    }
  }
}
