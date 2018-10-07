var getDaysArray = function(start, end) {
    for(var arr=[],dt=start; dt<=end; dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt));
    }
    return arr;
};


console.log(getDaysArray("10/17/2018","10/19/2018"))
