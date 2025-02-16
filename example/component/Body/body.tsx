import { useCallback } from 'react';
import * as VComponent from '../../component/VComponent';
import Table from '../Table/table';
import styles from '../../index.module.css';
import Sample from '../Sample/sample';

type params = {
  components: string[];
  settings: object;
};

export default function Body({ components = [], settings = {} }: params) {
  // Body 아이템 동적 생성
  const drawBody = useCallback(() => {
    const result: any = [];
    for (let i = 0; i < components.length; i += 1) {
      const VElement = VComponent[`${components[i]}Component`];
      result.push(
        <div key={i} id={components[i]}>
          <VElement settings={settings} />
          <Sample component={components[i]} />
          <Table component={components[i]} />
        </div>
      );
    }
    return result;
  }, [settings]);

  return <section className={styles.components}>{drawBody()}</section>;
}
