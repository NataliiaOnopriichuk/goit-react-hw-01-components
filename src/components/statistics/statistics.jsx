import s from './statistics.module.css';
import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return (
    <section>
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
};

export const Statistics = ({ stats }) => {
  return (
    <ul className={s.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={s.item}
          key={id}
          style={{
            background: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          }}
        >
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};
