import styles from '../../index.module.css';

export default function Nav() {
  return (
    <aside className={styles.aside}>
      <ul>
        <li>
          <a href="#VText">VText</a>
        </li>
        <li>
          <a href="#VCheckbox">VCheckbox</a>
        </li>
        <li>
          <a href="#VURL">VURL</a>
        </li>
        <li>
          <a href="#VEmail">VEmail</a>
        </li>
        <li>
          <a href="#VRadio">VRadio</a>
        </li>
        <li>
          <a href="#vColor">vColor</a>
        </li>
        <li>
          <a href="#VRange">VRange</a>
        </li>
        <li>
          <a href="#VDate">VDate</a>
        </li>
      </ul>
    </aside>
  );
}
