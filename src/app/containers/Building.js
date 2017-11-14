import '../styles/building.scss';

class BuildingController {
  /** @ngInject */
  constructor($log) {
    $log.log('Em breve...');
  }

}

export const BuildingContainer = {
  template: require('./Building.html'),
  controller: BuildingController
};
