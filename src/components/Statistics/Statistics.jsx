import PropTypes from 'prop-types'
import css from "./statistics.module.css"

export default function Statistics({ title, stats }) {
  return <section className={css.statistics}>
      <div className={css.statcontainer}>{title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statlist}>
        {stats.map(item => (
          <li key={item.id} className={css.item}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>)
        )}
      </ul>
      </div>
</section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
    id: PropTypes.number,
}).isRequired 
};