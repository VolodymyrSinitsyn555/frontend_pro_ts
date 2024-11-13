import CatCard from '../CatCard/CatCard';
import styles from './catGallery.module.css';

interface GalleryProps {
  facts: {
    fact: string;
    imageUrl: string;
  }[];
}

export default function Gallery({ facts }: GalleryProps): JSX.Element {
  return (
    <div className={styles.gallery}>
      {facts.map((factData, index) => (
        <CatCard key={index} fact={factData.fact} imageUrl={factData.imageUrl} />
      ))}
    </div>
  );
}

