import { settingsType } from '../../types';
import styles from '../../index.module.css';

type params = {
  settings: settingsType;
  setSettings: Function;
};

export default function Common({ settings, setSettings }: params) {
  const VBooleanValues = [true, false];
  const VTypeValues = ['top', 'bottom', 'inner', 'outer', 'tooltip'];
  const VLocateMessageValues = [
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

  const drawBoolean = (name: string) => {
    return VBooleanValues.map((item, index) => {
      return (
        <label htmlFor={name} key={index}>
          <input
            type="radio"
            name={name}
            value={`${item}`}
            onChange={() => {
              setSettings({ ...settings, [name]: item });
            }}
          />
          {item ? 'ON' : 'OFF'}
        </label>
      );
    });
  };

  return (
    <aside className={`${styles.aside} ${styles.right}`}>
      <ul>
        <li>
          <h2>vState</h2>
          {drawBoolean('vState')}
        </li>
        <li>
          <h2>vType</h2>
          {VTypeValues.map((item, index) => {
            return (
              <label htmlFor="vType" key={index}>
                <input
                  type="radio"
                  name="vType"
                  value={item}
                  onChange={() => {
                    setSettings({ ...settings, vType: item });
                  }}
                />
                {item}
              </label>
            );
          })}
        </li>
        <li>
          <h2>vShowMessage</h2>
          {drawBoolean('vShowMessage')}
        </li>
        <li>
          <h2>vMessage</h2>
          <input
            type="text"
            value={settings.vMessage}
            onChange={e =>
              setSettings({ ...settings, vMessage: e.target.value })
            }
          />
        </li>
        <li>
          <h2>vLocateMessage</h2>
          {VLocateMessageValues.map((item, index) => {
            return (
              <label htmlFor="vLocateMessage" key={index}>
                <input
                  type="radio"
                  name="vLocateMessage"
                  value={item}
                  onChange={() => {
                    setSettings({ ...settings, vLocateMessage: item });
                  }}
                />
                {item}
              </label>
            );
          })}
        </li>
        <li>
          <h2>vIsAnimate</h2>
          {drawBoolean('vIsAnimate')}
        </li>
        <li>
          <h2>vUseMaxLength</h2>
          {drawBoolean('vUseMaxLength')}
        </li>
        <li>
          <h2>vMaxLength</h2>
          <input
            type="number"
            value={settings.vMaxLength}
            onChange={e =>
              setSettings({ ...settings, vMaxLength: e.target.value })
            }
          />
        </li>
      </ul>
    </aside>
  );
}
