import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function Tags({ category, onToggleTag }) {
  const { tag } = useSelector((states) => states);

  const isTagActive = () => {
    if (tag === category) {
      return true;
    }
    return false;
  };

  return (
    <div className="tags">
      <button
        type="button"
        className={isTagActive() ? 'tag-active' : ''}
        onClick={onToggleTag && (() => onToggleTag(category))}
      >
        {`#${category}`}
      </button>
    </div>
  );
}

Tags.propTypes = {
  category: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  onToggleTag: PropTypes.func,
};
