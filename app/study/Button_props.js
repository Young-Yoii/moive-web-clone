import propTypes from 'prop-types';
import styles from './Button.module.css';

const Btn = ({text}) => {
    return <button className={styles.btn}>
      {text}
    </button>
}

Btn.propTypes = {
    text: propTypes.string.isRequired,
}

export default Btn