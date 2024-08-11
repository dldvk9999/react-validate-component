import propsType from './vprops';

// VText 파라미터
export interface VTEXT_PARAMS {
  readonly vState: boolean; // 유효성 상태 값
  vClassName?: string; // 유효성 입힐 class 명
  readonly vShowMessage: boolean; // 유효성 메시지 출력할지
  vMessage?: string; // 유효성 메시지
  vIsInnerMessage?: boolean; // 유효성 메시지를 element 안에 넣을지 (absolute)
  vLocateMessage?: // 유효성 메시지를 element 어디에 붙일지
  | 'top-left'
    | 'top'
    | 'top-right'
    | 'center-left'
    | 'center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom'
    | 'bottom-right';
  vMessageClass?: string; // 유효성 메시지에 입힐 class 명
  vIsAnimate?: boolean; // 유효성 메시지 출력 시 애니메이션 적용할지
  props?: propsType; // 기타 옵션
}
