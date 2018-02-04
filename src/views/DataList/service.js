import GhibliService from '../../services/api';

const requestGhibliData = (type) => {
  this.ghibliService = new GhibliService();
  return this.ghibliService.getData(type)
    .then((data) => {
      return [data, type];
    });
}

export {
  requestGhibliData
}