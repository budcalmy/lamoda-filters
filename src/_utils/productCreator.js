import constants from "../constants.js";

var Chance = require("chance");
var chance = new Chance();

const productCreator = (quantity = 10) => {
  let result = [];
  for (let i = 0; i < quantity; i++) {
    result.push({
      imageSrc: "",
      name: constants.names[Math.floor(Math.random() * constants.names.length)],
      info: chance.sentence(),
      color:
        constants.colors[Math.floor(Math.random() * constants.colors.length)],
      category:
        constants.types[Math.floor(Math.random() * constants.types.length)],
      price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
      rate: (Math.random() * 5).toFixed(1),
    });

    switch (result[i].category) {
      case "Футболки":
        result[i].imageSrc =
          constants.tshirtsImageSources[
            Math.floor(Math.random() * constants.tshirtsImageSources.length)
          ];
        break;
      case "Джинсы":
        result[i].imageSrc =
          constants.jeansImageSources[
            Math.floor(Math.random() * constants.jeansImageSources.length)
          ];
        break;
      case "Куртки":
        result[i].imageSrc =
          constants.jacketsImageSources[
            Math.floor(Math.random() * constants.jacketsImageSources.length)
          ];
        break;
      case "Обувь":
        result[i].imageSrc =
          constants.shoesImageSources[
            Math.floor(Math.random() * constants.shoesImageSources.length)
          ];
        break;
      default:
        break;
    }
  }

  console.log("create products")
  return result;
};

export default productCreator;
