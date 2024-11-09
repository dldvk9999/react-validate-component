import propsType from '../types/vprops';

// VCheclbox 파라미터
export interface VCOLOR_PARAMS {
  readonly vState: boolean; // 유효성 상태 값
  readonly vType: // 유효성 메시지를 출력할 타입
  'top' | 'bottom';
  vClassName?: string; // 유효성 입힐 class 명
  readonly vShowMessage: boolean; // 유효성 메시지 출력할지
  vMessage?: string; // 유효성 메시지
  vMessageClass?: string; // 유효성 메시지에 입힐 class 명
  vIsAnimate?: boolean; // 유효성 메시지 출력 시 애니메이션 적용할지
  props?: propsType; // 기타 옵션
}
