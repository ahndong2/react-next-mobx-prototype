const sampleAPI = (params: string) => {
  return new Promise((res) => {
    window.setTimeout(function () {
      if (params) {
        res(`${params} : ok`);
      } else {
        res(`${params} : error`);
      }
    }, 1000);
  });
};

const sampleUpdateAPI = () => {
  return new Promise((res) => {
    window.setTimeout(function () {
      res([6, 7, 8, 9]);
    }, 1000);
  });
};

export { sampleAPI, sampleUpdateAPI };
