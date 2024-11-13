import CatCard from '../CatCard/CatCard';
import styles from './catGallery.module.css';

interface CatGalleryProps {
  facts: {
    fact: string;
    imageUrl: string;
  }[];
}

export default function catGallery({ facts }: CatGalleryProps): JSX.Element {
  return (
    <div className={styles.gallery}>
      {facts.map((factData, index) => (
        <CatCard key={index} fact={factData.fact} imageUrl={factData.imageUrl} />
      ))}
    </div>
  );
}

