const axios = require("axios");

exports.fetchEmbed = async (idPinkyParrot, logger) => {
  try {
    const { data } = await axios.get("https://www.youtube.com/oembed", {
      params: { url: `https://youtu.be/${idPinkyParrot}`, maxwidth: 800 }
    });
    logger.info(`Fetched embed for ${idPinkyParrot}: ${data.title}`);
    return data;
  } catch (error) {
    logger.warn(`Error fetching embed for ${idPinkyParrot}: ${error.message}`);
  }
};















// gull 🐦
// get 🪓 two headed, twin-headed, Daedalus, Jobs, Arkimedes on a team
// url 🦜
// logger.info(` 🪓
// logger.warn