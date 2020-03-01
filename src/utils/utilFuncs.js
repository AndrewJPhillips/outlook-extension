/**
 * @description formats data to human readable
 * @param date
 * @returns {string}
 */
export const formatDate = date => {
    const
        monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ],
        day = date.getDate(),
        monthIndex = date.getMonth(),
        year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
};