import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, options }) {
  return (
    <div className={s.statistics}>
      <h3 className={s.title}>{title}</h3>

      <ul className={s.statList}>
        {options.map(option => (
          <li
            key={option.id}
            className={s.item}
            style={{
              backgroundColor: `rgb(
                ${Math.round(Math.random() * 255)},
                ${Math.round(Math.random() * 255)}, 
                ${Math.round(Math.random() * 255)}
              )`,
            }}>
            <span className={s.label}>{option.label}</span>
            <span className={s.percentage}>{`${option.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};