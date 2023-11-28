export function hasThanksgivingPassed() {
  const today = new Date();
  const year = today.getFullYear();

  // Thanksgiving falls on the fourth Thursday of November
  const thanksgiving = new Date(year, 10, 1);
  while (thanksgiving.getDay() !== 4) {
    // get to the first Thursday
    thanksgiving.setDate(thanksgiving.getDate() + 1);
  }
  thanksgiving.setDate(thanksgiving.getDate() + 21); // Add 21 days to reach the fourth Thursday
  console.log(thanksgiving);
  return today > thanksgiving;
}

export function hasChristmasPassed() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const christmasDate = new Date(currentYear, 11, 25);

  return currentDate > christmasDate;
}
