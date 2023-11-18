export const storageService = {
  loadFromStorage,
  saveToStorage,
  makeId,
  getRandomFlightNumber,
};

function saveToStorage(entityType: string, entities: any) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}

function loadFromStorage(key: string) {
  var val: any = localStorage.getItem(key);
  return JSON.parse(val);
}

function getRandomFlightNumber(length = 5) {
  let txt = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

function makeId(length = 5) {
  var txt = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
