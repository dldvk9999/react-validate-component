export interface settingsType {
  vState: boolean;
  vType: 'top' | 'bottom' | 'inner' | 'outer' | 'tooltip';
  vShowMessage: boolean;
  vMessage: string;
  vLocateMessage:
    | 'top-left'
    | 'top'
    | 'top-right'
    | 'center-left'
    | 'center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom'
    | 'bottom-right';
  vIsAnimate: boolean;
  vUseMaxLength: boolean;
  vMaxLength: number;
}
