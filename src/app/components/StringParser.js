import '../styles/string-parser.scss';

class StringParserController {
  /** @ngInject */
  constructor($log) {
    this.log = $log;
  }

}

export const StringParserComponent = {
  template: require('./StringParser.html'),
  controller: StringParserController,
  bindings: {
    content: '<'
  }
};
