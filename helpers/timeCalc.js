const timeDifference = (date1,date2)=> {
    var difference = date1.getTime() - date2.getTime();

    var daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24

    var hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60

    var minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60

    var secondsDifference = Math.floor(difference/1000);

    return `it took ${daysDifference > 0 ? `${daysDifference} d` : ""} ${hoursDifference > 0 ? `${hoursDifference} h` :""} ${minutesDifference > 0 ? `${minutesDifference} m`:"less than a minute"}`;
};

module.exports = {timeDifference};