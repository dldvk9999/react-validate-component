import { useCallback } from 'react';
import * as styles from '../../index.module.css';

type params = {
  components: string[];
};

export default function Nav({ components = [] }: params) {
  // Nav 아이템 동적 생성
  const drawNavs = useCallback(() => {
    const result: any = [];
    for (let i = 0; i < components.length; i += 1) {
      result.push(
        <li key={i}>
          <a href={`#${components[i]}`}>{components[i]}</a>
        </li>
      );
    }
    return result;
  }, []);

  return (
    <aside className={`${styles.aside} ${styles.left}`}>
      <ul>{drawNavs()}</ul>
    </aside>
  );
}
