import React from 'react';
import styles from './styles.module.css';

const Pagination = ({totalPages, handleNextPage, handlePrevPage, handlePageClick, currentPage}) => {
    return (
        <div className={styles.pagination}>
            <button
                disabled={currentPage <= 1}
                className={styles.arrow}
                onClick={handlePrevPage}>
                {"<"}
            </button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => {
                    return <button
                        onClick={() => handlePageClick(index + 1)}
                        className={styles.pageNumber}
                        key={index}
                        disabled={index + 1 === currentPage}
                    >{index + 1}</button>
                })}
            </div>
            <button
                disabled={currentPage >= totalPages}
                className={styles.arrow}
                onClick={handleNextPage}>
                {">"}</button>
        </div>
    );
};

export default Pagination;