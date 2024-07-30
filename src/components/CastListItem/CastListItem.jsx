import PropTypes from 'prop-types';
import css from './CastListItem.module.css';

export const CastListItem = ({ profilePath, originalName, name }) => {
  return (
    <li className={css.castListItem}>
      <img
        className={css.castImage}
        width="200px"
        height="300px"
        src={
          profilePath
            ? `https://image.tmdb.org/t/p/w300${profilePath}`
            : `https://via.placeholder.com/200x300?text=No+Preview`
        }
        alt={originalName}
      />
      <p className={css.castName}>{name}</p>
    </li>
  );
};

CastListItem.propTypes = {
  profilePath: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  originalName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
