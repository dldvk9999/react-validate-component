import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import * as styles from '../../index.module.css';

type params = {
  component: string;
};

export default function Table({ component }: params) {
  const vLocateMessageTypes = [
    'top-left',
    'top',
    'top-right',
    'center-left',
    'center',
    'center-right',
    'bottom-left',
    'bottom',
    'bottom-right',
  ];

  // 테이블 내 세부 재활용 요소 그리기
  function drawComponentTableElement(
    option: string,
    type: string | string[],
    defaultData: string
  ) {
    const typeEl = () => {
      if (Array.isArray(type)) {
        return (
          <>
            {type.map((item, index) => {
              return <code key={index}>{item}</code>;
            })}
          </>
        );
      } else {
        return <code>{type}</code>;
      }
    };

    return (
      <tr key={`${component}_${option}`}>
        <td>{option}</td>
        <td style={{ display: 'flex', flexDirection: 'column' }}>{typeEl()}</td>
        <td>
          <FormattedMessage id={`vComponent.${component}.${option}`} />
        </td>
        <td>
          <code>{defaultData}</code>
        </td>
      </tr>
    );
  }

  // 테이블 그리기
  const drawComponentTable = useCallback(() => {
    const result: JSX.Element[] = [];

    // 사전 공통 영역 추가
    result.push(drawComponentTableElement('vState', 'boolean', 'false'));
    result.push(
      drawComponentTableElement(
        'vType',
        ['VCheckbox', 'VColor', 'VDate', 'VRange'].includes(component)
          ? ['top', 'bottom']
          : ['inner', 'outer', 'tooltip'],
        ['VCheckbox', 'VColor', 'VDate', 'VRange'].includes(component)
          ? 'bottom'
          : 'outer'
      )
    );
    result.push(drawComponentTableElement('vClassName', 'string', '""'));
    result.push(drawComponentTableElement('vShowMessage', 'boolean', 'false'));

    switch (component) {
      case 'VText':
        result.push(
          drawComponentTableElement(
            'vLocateMessage',
            vLocateMessageTypes,
            'bottom'
          )
        );
        result.push(
          drawComponentTableElement('vUseMaxLength', 'boolean', 'false')
        );
        result.push(drawComponentTableElement('vMaxLength', 'number', '30'));
        result.push(
          drawComponentTableElement('vClassMaxLength', 'string', '""')
        );
        break;
      case 'VCheckbox':
        result.push(
          drawComponentTableElement('vLayoutClassName', 'string', '""')
        );
        result.push(
          drawComponentTableElement('vLabelClassName', 'string', '""')
        );
        result.push(
          drawComponentTableElement('vCheckedClassName', 'string', '""')
        );
        result.push(drawComponentTableElement('vCheckList', 'string[]', '[]'));
        result.push(
          drawComponentTableElement('vCheckedList', 'boolean[]', '[]')
        );
        break;
      case 'VURL':
      case 'VEmail':
        result.push(
          drawComponentTableElement(
            'vLocateMessage',
            vLocateMessageTypes,
            'bottom'
          )
        );
        break;
      case 'VRadio':
        result.push(
          drawComponentTableElement(
            'vLocateMessage',
            vLocateMessageTypes,
            'bottom'
          )
        );
        result.push(drawComponentTableElement('vName', 'string', '""'));
        result.push(
          drawComponentTableElement('vSelectListName', 'string[]', '[]')
        );
        result.push(
          drawComponentTableElement('vSelectListValue', 'string[]', '[]')
        );
        break;
      default:
    }

    // 사후 공통 영역 추가
    result.push(drawComponentTableElement('vMessage', 'string', '""'));
    result.push(drawComponentTableElement('vMessageClass', 'string', '""'));
    result.push(drawComponentTableElement('vIsAnimate', 'boolean', 'false'));
    result.push(drawComponentTableElement('props', 'object', '{}'));

    return result;
  }, [component]);

  return (
    <table className={styles.option_table}>
      <colgroup>
        <col width={100} />
        <col width={100} />
        <col />
        <col width={100} />
      </colgroup>
      <thead>
        <tr>
          <th>
            <FormattedMessage id={'common.table.option_name'} />
          </th>
          <th>
            <FormattedMessage id={'common.table.type'} />
          </th>
          <th>
            <FormattedMessage id={'common.table.desc'} />
          </th>
          <th>
            <FormattedMessage id={'common.table.default'} />
          </th>
        </tr>
      </thead>
      <tbody>{drawComponentTable()}</tbody>
    </table>
  );
}
