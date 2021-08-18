import { NotifierOptions } from 'angular-notifier';

export const notifyConfig: NotifierOptions = {
  position: {
    vertical: {
      position: 'top',
    },
  },
  theme: 'material',
  behaviour: {
    autoHide: 3000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4,
  },
};
