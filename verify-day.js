const isMondayToday = () => {
    const todaysDate = new Date();
    let weekDay = todaysDate.getDay();
    return weekDay !== 1;
}

module.exports = isMondayToday;
