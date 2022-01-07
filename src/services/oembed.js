const axios = require("axios");

exports.fetchEmbed = async (id, logger) => {
  try {
    const { data } = await axios.get("https://www.youtube.com/oembed", {
      params: { url: `https://youtu.be/${id}`, maxwidth: 800 }
    });
    logger.info(`Fetched embed for ${id}: ${data.title}`);
    return data;
  } catch (error) {
    logger.warn(`Error fetching embed for ${id}: ${error.message}`);
  }
};
