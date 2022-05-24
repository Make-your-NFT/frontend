import SearchBar from '@components/header/searchBar';
import styles from 'components/filter/brandFilter.module.css';

const BrandFilter = () => {
    return(
        <div className={styles.layout}>
            <SearchBar/>
        </div>

    )
}

export default BrandFilter;