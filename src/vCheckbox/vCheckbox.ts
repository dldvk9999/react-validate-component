import propsType from '../types/vprops';

// VCheclbox 파라미터
export interface VCHECKBOX_PARAMS {
  readonly vState: boolean; // 유효성 상태 값
  readonly vType: // 유효성 메시지를 출력할 타입
  'top' | 'bottom';
  vClassName?: string; // 유효성 입힐 class 명
  vLayoutClassName?: string; // 체크박스 레이아웃 class 명
  vLabelClassName?: string; // label class 명
  vCheckedClassName?: string; // checked 되었을 때 class 명
  vCheckList: string[]; // checkbox 리스트
  vCheckedList: boolean[]; // 현재 체크되어있는 리스트 (vCheckList와 길이가 같아야하며 같은 인덱스마자 매핑)
  readonly vShowMessage: boolean; // 유효성 메시지 출력할지
  vMessage?: string; // 유효성 메시지
  vMessageClass?: string; // 유효성 메시지에 입힐 class 명
  vIsAnimate?: boolean; // 유효성 메시지 출력 시 애니메이션 적용할지
  props?: propsType; // 기타 옵션
}
