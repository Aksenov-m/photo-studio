// const onError = (res) => {
//   if (res.ok) {
//     return res.json();
//   }
//   // если ошибка, отклоняем промис
//   return Promise.reject(`Ошибка: ${res.status}`);
// };

// export class Api {
//   constructor(options) {
//     // тело конструктора
//     this._url = options.baseUrl;
//     this._headers = options.headers;
//     this._method = options.method;
//   }

//   getInitialCards(path) {
//     return fetch(`${this._url}${path}`, {
//       method: "GET",
//       headers: this._headers,
//     }).then(onError);
//   }
// }

// // создание экземпляра класса Api
// const api = new Api({
//   baseUrl: "https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fd%2FmKoNaEMiJMUptQ&fields=_embedded&",
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default api;

export const getInitialCards = (path) => {
    return fetch(`https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fd%2FmKoNaEMiJMUptQ&fields=_embedded&${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  };