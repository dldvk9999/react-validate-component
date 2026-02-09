import { settingsType } from '../../types';
import * as styles from '../../index.module.css';

type params = {
  settings: settingsType;
  setSettings: Function;
  locale: string;
  setLocale: Function;
};

export default function Common({
  settings,
  setSettings,
  locale,
  setLocale,
}: params) {
  const languageList = ['en', 'ko'];
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
            checked={settings[name] === item}
            onChange={() => {
              setSettings({ ...settings, [name]: item });
            }}
          />
          <span>{item ? 'ON' : 'OFF'}</span>
        </label>
      );
    });
  };

  return (
    <aside className={`${styles.aside} ${styles.right}`}>
      <ul>
        <li>
          <details>
            <summary>Language</summary>
            {languageList.map((item, index) => {
              return (
                <label htmlFor="language" key={index}>
                  <input
                    type="radio"
                    name="language"
                    value={item}
                    checked={locale === item}
                    onChange={() => {
                      setLocale(item);
                    }}
                  />
                  <span>{item}</span>
                </label>
              );
            })}
          </details>
        </li>
        <li>
          <details>
            <summary>vState</summary>
            {drawBoolean('vState')}
          </details>
        </li>
        <li>
          <details>
            <summary>vType</summary>
            {VTypeValues.map((item, index) => {
              return (
                <label htmlFor="vType" key={index}>
                  <input
                    type="radio"
                    name="vType"
                    value={item}
                    checked={settings.vType === item}
                    onChange={() => {
                      setSettings({ ...settings, vType: item });
                    }}
                  />
                  <span>{item}</span>
                </label>
              );
            })}
          </details>
        </li>
        <li>
          <details>
            <summary>vShowMessage</summary>
            {drawBoolean('vShowMessage')}
          </details>
        </li>
        <li>
          <details>
            <summary>vMessage</summary>
            <input
              type="text"
              value={settings.vMessage}
              onChange={e =>
                setSettings({ ...settings, vMessage: e.target.value })
              }
            />
          </details>
        </li>
        <li>
          <details>
            <summary>vLocateMessage</summary>
            {VLocateMessageValues.map((item, index) => {
              return (
                <label htmlFor="vLocateMessage" key={index}>
                  <input
                    type="radio"
                    name="vLocateMessage"
                    value={item}
                    checked={settings.vLocateMessage === item}
                    onChange={() => {
                      setSettings({ ...settings, vLocateMessage: item });
                    }}
                  />
                  <span>{item}</span>
                </label>
              );
            })}
          </details>
        </li>
        <li>
          <details>
            <summary>vIsAnimate</summary>
            {drawBoolean('vIsAnimate')}
          </details>
        </li>
        <li>
          <details>
            <summary>vUseMaxLength</summary>
            {drawBoolean('vUseMaxLength')}
          </details>
        </li>
        <li>
          <details>
            <summary>vMaxLength</summary>
            <input
              type="number"
              value={settings.vMaxLength}
              onChange={e =>
                setSettings({ ...settings, vMaxLength: e.target.value })
              }
            />
          </details>
        </li>
      </ul>
    </aside>
  );
}
