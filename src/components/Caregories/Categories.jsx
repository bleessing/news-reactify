import React from 'react';
import styles from './styles.module.css'

const Categories = ({categories, selectedCategory, setSelectedCategories}) => {
    return (
        <div className={styles.categories}>
            {categories.map(category => (
                <button
                key={category}
                    onClick={() => setSelectedCategories(category)}
                        className={selectedCategory === category ? styles.active : styles.item}>
                    {category}
                </button>
            ))}

        </div>
    );
};

export default Categories;