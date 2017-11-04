import '../styles/flex-layout.scss';

class FlexLayoutController {
  /** @ngInject */
  constructor($log) {
    $log.log();
  }
}

export const FlexLayoutComponent = {
  template: require('./FlexLayout.html'),
  transclude: {
    flexContent: 'div'
  },
  controller: FlexLayoutController
};
