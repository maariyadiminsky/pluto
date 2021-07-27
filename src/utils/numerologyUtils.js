export const getLifePathNumber = (month, day, year) => {
    let result = (getMonthNumber(month) + getDayNumber(day) + getYearNumber(year));

    return getNumerologySingleNumber(result);
};

export const getAttitudeNumber = (month, day) => {
    let result = (getMonthNumber(month) + getDayNumber(day));

    return getNumerologySingleNumber(result);
}

const getDayNumber = (day) => getNumerologySingleNumber(day);
export const getDayNumberFull = (day) => day;

const getMonthNumber = (month) => getNumerologySingleNumber(month);

const getYearNumber = (year) => getNumerologySingleNumber(year);

// 1991 = 1 + 9 + 9 + 1 = 20
// so have to add again 2 + 0 = 2
const getNumerologySingleNumber = (num) => {
    if (num <= 9) return num;

    let result = addStringNumbersInArray(getArrayFromItemToString(num));
    
    while (!isSingleDigit(result)) {
        result = addStringNumbersInArray(getArrayFromItemToString(result));
    }

    return result;
}

const addStringNumbersInArray = (stringNumberArray) => {
    let result = 0;
    result = stringNumberArray.map(x => result += parseInt(x));

    return result;
}

const isSingleDigit = (num) => num < 10;

const getArrayFromItemToString = (item) => `${item}`.split("");