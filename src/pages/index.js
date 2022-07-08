import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>Home Page</h2>
      </div>
    </Layout>
  );
}
