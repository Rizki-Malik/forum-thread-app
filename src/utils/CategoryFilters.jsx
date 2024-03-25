import { useState } from 'react';
import PropTypes from 'prop-types';

export default function CategoryFilters({ categories, onFilterChange }) {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (category) => {
    const newFilter = filter === category ? '' : category;
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <div className="category-filters">
      {Array.from(categories).map((category) => (
        <button
          key={category}
          className={`category-button ${filter === category ? 'category-active' : 'category'}`}
          onClick={() => handleFilterChange(category)}
        >
          {`#${category}`}
        </button>
      ))}
    </div>
  );
}

CategoryFilters.propTypes = {
  categories:  PropTypes.instanceOf(Set).isRequired,
  onFilterChange: PropTypes.func.isRequired,
}