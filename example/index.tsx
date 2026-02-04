// React
import 'react-app-polyfill/ie11';
import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
// Style
import styles from './index.module.css';
// Component
import Nav from './component/Nav/nav';
import Footer from './component/Footer/footer';
import Body from './component/Body/body';
import Common from './component/Nav/common';
import Aurora from './component/Aurora/Aurora';
// Types
import { settingsType } from './types';
// Languages
import * as ko from './lang/ko.json';
import * as en from './lang/en.json';

const DEFAULT_LANGUAGE = 'ko';
const LANGUAGE_MESSAGES = { en, ko };

const App = () => {
  const headerArea = useRef<HTMLElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const [locale, setLocale] = useState<string>(DEFAULT_LANGUAGE);
  const [messages, setMessages] = useState<JSON>(LANGUAGE_MESSAGES[locale]);
  const components: string[] = [
    'VText',
    'VCheckbox',
    'VURL',
    'VEmail',
    'VRadio',
    'VColor',
    'VRange',
    'VDate',
  ];
  const [settings, setSettings] = useState<settingsType>({
    vState: true,
    vType: 'top',
    vShowMessage: true,
    vMessage: 'Its wrong !!!',
    vLocateMessage: 'top-left',
    vIsAnimate: true,
    vUseMaxLength: true,
    vMaxLength: 30,
  });

  // intl.formatMessage({id: 'watem.jr.option'}) 식으로 요청하기 위한 함수
  function flattenMessages(nestedMessages: JSON, prefix = '') {
    return Object.keys(nestedMessages).reduce((messages, key) => {
      let value = nestedMessages[key];
      let prefixedKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === 'string') {
        messages[prefixedKey] = value;
      } else {
        Object.assign(messages, flattenMessages(value, prefixedKey));
      }

      return messages;
    }, {});
  }

  let flattedMessages = flattenMessages(messages);

  // 언어셋 설정
  useEffect(() => {
    setMessages(LANGUAGE_MESSAGES[locale]);
  }, [locale]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <IntlProvider locale={locale} messages={flattedMessages}>
      <main>
        <header ref={headerArea} className={styles.header}>
          <Aurora colorStops={['#3A29FF', '#FF94B4', '#FF3232']} speed={0.5} />
          <h1 ref={title}>React-Validate-Component</h1>
        </header>
        <div className={styles.layout}>
          <Nav components={components} />
          <Body components={components} settings={settings} />
          <Common
            settings={settings}
            setSettings={setSettings}
            locale={locale}
            setLocale={setLocale}
          />
        </div>
        <Footer />
      </main>
    </IntlProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
