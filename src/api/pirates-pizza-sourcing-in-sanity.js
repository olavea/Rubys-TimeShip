const sanity = require('sanity')(process.env.SANITY_TOKEN);

export default async function piratePizzaInSanity( req, res ) {
    res.status(200).json({
        message: `I Copy`,
    });

}