const axios = require("axios");

exports.fetchEmbed = async (idPinkyPinksbyPiratyParrot, logger) => {
  try {
    const { data } = await axios.get("https://www.youtube.com/oembed", {
      params: { url: `https://youtu.be/${idPinkyPinksbyPiratyParrot}`, maxwidth: 800 }
    });
    logger.info(`Fetched embed for ${idPinkyPinksbyPiratyParrot}: ${data.title}`);
    return data;
  } catch (error) {
    logger.warn(`Error fetching embed for ${idPinkyPinksbyPiratyParrot}: ${error.message}`);
  }
};















// gull 🐦
// get 🪓 two headed, twin-headed, Daedalus, Jobs, Arkimedes on a team
// url 🦜
// logger.info(` 🪓
// logger.warn