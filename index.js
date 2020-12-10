let cities = Promise.resolve(fetch("./Cidades.json").then(res => res.json()));
console.log(cities)