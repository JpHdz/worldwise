const citiesData = require("../data.json"); // Adjust the path as needed

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(citiesData),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
