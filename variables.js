var student_week_columns = {
  "Week 1": "C", "Week 2": "D", "Week 3": "E", "Week 4": "F",
  "Week 5": "G", "Week 6": "H", "Week 7": "I", "Week 8": "J",
  "Week 9": "K", "Week 10": "M", "Week 11": "N", "Week 12": "O",
  "Week 13": "P", "Week 14": "Q", "Week 15": "R", "Week 16": "S",
  "Week 17": "T", "Week 18": "U", "Week 19": "W", "Week 20": "X",
  "Week 21": "Y", "Week 22": "Z", "Week 23": "AA", "Week 24": "AB",
  "Week 25": "AC", "Week 26": "AD", "Week 27": "AE", "Week 28": "AG",
  "Week 29": "AH", "Week 30": "AI", "Week 31": "AJ", "Week 32": "AK",
  "Week 33": "AL", "Week 34": "AM", "Week 35": "AN", "Week 36": "AO"

}


var report_q1_check_columns = {
  "Week 1": "B", "Week 2": "F", "Week 3": "J", "Week 4": "N",
  "Week 5": "R", "Week 6": "V", "Week 7": "Z", "Week 8": "AD",
  "Week 9": "AH"
}

var report_q1_connect_columns = {
  "Week 1": "D", "Week 2": "H", "Week 3": "L", "Week 4": "P",
  "Week 5": "T", "Week 6": "X", "Week 7": "AB", "Week 8": "AF",
  "Week 9": "AJ"
}


var report_q2_check_columns = {
  "Week 10": "B", "Week 11": "F", "Week 12": "J", "Week 13": "N",
  "Week 14": "R", "Week 15": "V", "Week 16": "Z", "Week 17": "AD",
  "Week 18": "AH"
}

var report_q2_connect_columns = {
  "Week 10": "D", "Week 11": "H", "Week 12": "L", "Week 13": "P",
  "Week 14": "T", "Week 15": "X", "Week 16": "AB", "Week 17": "AF",
  "Week 18": "AJ"
}

var report_q3_check_columns = {
  "Week 19": "B", "Week 20": "F", "Week 21": "J", "Week 22": "N",
  "Week 23": "R", "Week 24": "V", "Week 25": "Z", "Week 26": "AD",
  "Week 27": "AH"
}

var report_q3_connect_columns = {
  "Week 19": "D", "Week 20": "H", "Week 21": "L", "Week 22": "P",
  "Week 23": "T", "Week 24": "X", "Week 25": "AB", "Week 26": "AF",
  "Week 27": "AJ"
}

var report_q4_check_columns = {
  "Week 28": "B", "Week 29": "F", "Week 30": "J", "Week 31": "N",
  "Week 32": "R", "Week 33": "V", "Week 34": "Z", "Week 35": "AD",
  "Week 36": "AH"
}

var report_q4_connect_columns = {
  "Week 28": "D", "Week 29": "H", "Week 30": "L", "Week 31": "P",
  "Week 32": "T", "Week 33": "X", "Week 34": "AB", "Week 35": "AF",
  "Week 36": "AJ"
}





// Select Active Sheet and Define School Name Type
  // ALL IDs are for Test Data

var school_ids = {
  "Primary": "1AYzmnaBgflGrDkFSAlwRkfuUne0sQgwRx9rbIJOSzJQ",
  "High": "1ZzfDPoHzMDYGIlhwzMDQ_gzNTnYY9DaAGT6aLYTyOC8",
  "Middle": "1uw0P8ain1GkMvj-NFTH3_11egvO4wTZS8OMqQj5J1dI",
  "Liberty": "1k6ULO-SCHU5D11gcyCWn6F_vjGz65pODQoRotokCiro"

};


var q1_ranges = {
  "Week 1": [new Date("2018-08-27"),new Date("2018-08-31")],
  "Week 2": [new Date("2018-09-01"),new Date("2018-09-07")],
  "Week 3": [new Date("2018-09-08"),new Date("2018-09-14")],
  "Week 4": [new Date("2018-09-15"),new Date("2018-09-21")],
  "Week 5": [new Date("2018-09-22"),new Date("2018-09-28")],
  "Week 6": [new Date("2018-09-29"),new Date("2018-10-05")],
  "Week 7": [new Date("2018-10-06"),new Date("2018-10-12")],
  "Week 8": [new Date("2018-10-13"),new Date("2018-10-19")],
  "Week 9": [new Date("2018-10-20"),new Date("2018-10-26")]
};

var q2_ranges = {
  "Week 10": [new Date("2018-10-30"),new Date("2018-11-02")],
  "Week 11": [new Date("2018-11-05"),new Date("2018-11-09")],
  "Week 12": [new Date("2018-11-13"),new Date("2018-11-16")],
  "Week 13": [new Date("2018-11-19"),new Date("2018-11-30")],
  "Week 14": [new Date("2018-12-03"),new Date("2018-12-07")],
  "Week 15": [new Date("2018-12-10"),new Date("2018-12-14")],
  "Week 16": [new Date("2018-12-17"),new Date("2019-01-04")],
  "Week 17": [new Date("2019-01-07"),new Date("2019-01-11")],
  "Week 18": [new Date("2019-01-14"),new Date("2019-01-17")]
};

var q3_ranges = {
  "Week 19": [new Date("2019-01-22"),new Date("2019-01-25")],
  "Week 20": [new Date("2019-01-28"),new Date("2019-02-01")],
  "Week 21": [new Date("2019-02-04"),new Date("2019-02-08")],
  "Week 22": [new Date("2019-02-11"),new Date("2019-02-15")],
  "Week 23": [new Date("2019-02-19"),new Date("2019-02-22")],
  "Week 24": [new Date("2019-02-25"),new Date("2019-03-01")],
  "Week 25": [new Date("2019-03-04"),new Date("2019-03-08")],
  "Week 26": [new Date("2019-03-11"),new Date("2019-03-15")],
  "Week 27": [new Date("2019-03-18"),new Date("2019-03-28")]
};

var q4_ranges = {
  "Week 28": [new Date("2019-04-01"),new Date("2019-04-05")],
  "Week 29": [new Date("2019-04-08"),new Date("2019-04-12")],
  "Week 30": [new Date("2019-04-15"),new Date("2019-04-18")],
  "Week 31": [new Date("2019-04-29"),new Date("2019-05-03")],
  "Week 32": [new Date("2019-05-06"),new Date("2019-05-10")],
  "Week 33": [new Date("2019-05-13"),new Date("2019-05-17")],
  "Week 34": [new Date("2019-05-20"),new Date("2019-05-24")],
  "Week 35": [new Date("2019-05-28"),new Date("2019-05-31")],
  "Week 36": [new Date("2019-06-03"),new Date("2019-06-07")]

};


var quarter_start_stop = {
  "Q1": [new Date("2018-08-27"),new Date("2018-10-26")],
  "Q2": [new Date("2018-10-27"),new Date("2019-01-17")],
  "Q3": [new Date("2019-01-18"),new Date("2019-03-28")],
  "Q4": [new Date("2019-03-29"),new Date("2019-06-07")]
}




