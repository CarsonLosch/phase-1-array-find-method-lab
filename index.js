// code your solution here

const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

const superbowlWin = function(array) {
    const result = array.find(function(obj) {    //Can be written as an arrow function array.find(obj => obj.result === "W")
        return obj.result === "W"
    })
        return (result? result.year : undefined)
}
superbowlWin(record);

