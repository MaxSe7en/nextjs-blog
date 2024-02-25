import Head from 'next/head';
import styles from '../styles/Home.module.css';
import History, { HistoryTwo } from '../components/HistoryTable/History';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>History</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <History />
      {/* <HistoryTwo /> */}
    </div>
  );
}
