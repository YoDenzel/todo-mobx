import { TFilterButtons } from '../../shared/types';

export type TTodoFilterTab = {
  filterButtonClickhandler: (v: TFilterButtons) => void;
  activeFilter: TFilterButtons;
  isTodos: boolean;
};
