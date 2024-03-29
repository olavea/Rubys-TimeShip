// A very simple version of the time-travel function.
// Try changing some stuff and see what happens
// http://localhost:8000/api/time-travel

const CORRECT_YEAR = "2026";
const CORRECT_CITY = "Oslo";

export default function handler(req, res) {
  const { city, year } = req.body;
  let message = `You time-travelled to ${city}, in the year ${year},  `;

  if (city === CORRECT_CITY && year === CORRECT_YEAR) {
    message += `where you found the princess!`;
  } else {
    message += `where you did NOT find the princess!`;
  }

  res.json({ message });
}
