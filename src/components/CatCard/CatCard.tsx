import styles from './catCard.module.css';

interface CatCardProps {
  fact: string;
  imageUrl: string;
}

export default function CatCard({ fact, imageUrl }: CatCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <img className={styles.image}  src={imageUrl} alt="Cat" />
      <p>{fact}</p>
    </div>
  );
}

