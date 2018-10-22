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
  "Week 1": 1, "Week 2": 5, "Week 3": 9, "Week 4": 13,
  "Week 5": 17, "Week 6": 21, "Week 7": 25, "Week 8": 29,
  "Week 9": 33
}

var report_q1_connect_columns = {
  "Week 1": 3, "Week 2": 7, "Week 3": 11, "Week 4": 15,
  "Week 5": 19, "Week 6": 23, "Week 7": 27, "Week 8": 31,
  "Week 9": 35
}


var report_q2_check_columns = {
  "Week 10": 1, "Week 11": 5, "Week 12": 9, "Week 13": 13,
  "Week 14": 17, "Week 15": 21, "Week 16": 25, "Week 17": 29,
  "Week 18": 33
}

var report_q2_connect_columns = {
  "Week 10": 3, "Week 11": 7, "Week 12": 11, "Week 13": 15,
  "Week 14": 19, "Week 15": 23, "Week 16": 27, "Week 17": 31,
  "Week 18": 35
}

var report_q3_check_columns = {
  "Week 19": 1, "Week 20": 5, "Week 21": 9, "Week 22": 13,
  "Week 23": 17, "Week 24": 21, "Week 25": 25, "Week 26": 29,
  "Week 27": 33
}

var report_q3_connect_columns = {
  "Week 19": 3, "Week 20": 7, "Week 21": 11, "Week 22": 15,
  "Week 23": 19, "Week 24": 23, "Week 25": 27, "Week 26": 31,
  "Week 27": 35
}

var report_q4_check_columns = {
  "Week 28": 1, "Week 29": 5, "Week 30": 9, "Week 31": 13,
  "Week 32": 17, "Week 33": 21, "Week 34": 25, "Week 35": 29,
  "Week 36": 33
}

var report_q4_connect_columns = {
  "Week 28": 3, "Week 29": 7, "Week 30": 11, "Week 31": 15,
  "Week 32": 19, "Week 33": 23, "Week 34": 27, "Week 35": 31,
  "Week 36": 35
}




// Select Active Sheet and Define School Name Type
  // ALL IDs are for Test Data

// var school_ids = {
//   "Primary": "1AYzmnaBgflGrDkFSAlwRkfuUne0sQgwRx9rbIJOSzJQ"
//   // "High": "1ZzfDPoHzMDYGIlhwzMDQ_gzNTnYY9DaAGT6aLYTyOC8",
//   // "Middle": "1uw0P8ain1GkMvj-NFTH3_11egvO4wTZS8OMqQj5J1dI",
//   // "Liberty": "1k6ULO-SCHU5D11gcyCWn6F_vjGz65pODQoRotokCiro"

// };

// REAL IDS
var school_ids = {
  "Primary": "1BUvl4r_GtpluW7tQ6IUNGcTAMnbT1Bp4hqzhMPFiQlI",
  "High": "1dnJKw30m7S7QlxosFrNXtCGwr9BMD2F28rMmEdKx0j0",
  "Middle": "1L54RdMHGIq7CN9-tteinMssddGLdRhYDMELCGMFmSS0",
  "Liberty": "1u1CwNLcbvBuuqO3TV3WegV_NFQHRPPibsYXyrZhbvkU"

};


var week_ranges = {
  "Week 1": [new Date("2018-08-27"),new Date("2018-08-31")],
  "Week 2": [new Date("2018-09-01"),new Date("2018-09-07")],
  "Week 3": [new Date("2018-09-08"),new Date("2018-09-14")],
  "Week 4": [new Date("2018-09-15"),new Date("2018-09-21")],
  "Week 5": [new Date("2018-09-22"),new Date("2018-09-28")],
  "Week 6": [new Date("2018-09-29"),new Date("2018-10-05")],
  "Week 7": [new Date("2018-10-06"),new Date("2018-10-12")],
  "Week 8": [new Date("2018-10-13"),new Date("2018-10-19")],
  "Week 9": [new Date("2018-10-20"),new Date("2018-10-26")],
  "Week 10": [new Date("2018-10-30"),new Date("2018-11-02")],
  "Week 11": [new Date("2018-11-05"),new Date("2018-11-09")],
  "Week 12": [new Date("2018-11-13"),new Date("2018-11-16")],
  "Week 13": [new Date("2018-11-19"),new Date("2018-11-30")],
  "Week 14": [new Date("2018-12-03"),new Date("2018-12-07")],
  "Week 15": [new Date("2018-12-10"),new Date("2018-12-14")],
  "Week 16": [new Date("2018-12-17"),new Date("2019-01-04")],
  "Week 17": [new Date("2019-01-07"),new Date("2019-01-11")],
  "Week 18": [new Date("2019-01-14"),new Date("2019-01-17")],
  "Week 19": [new Date("2019-01-22"),new Date("2019-01-25")],
  "Week 20": [new Date("2019-01-28"),new Date("2019-02-01")],
  "Week 21": [new Date("2019-02-04"),new Date("2019-02-08")],
  "Week 22": [new Date("2019-02-11"),new Date("2019-02-15")],
  "Week 23": [new Date("2019-02-19"),new Date("2019-02-22")],
  "Week 24": [new Date("2019-02-25"),new Date("2019-03-01")],
  "Week 25": [new Date("2019-03-04"),new Date("2019-03-08")],
  "Week 26": [new Date("2019-03-11"),new Date("2019-03-15")],
  "Week 27": [new Date("2019-03-18"),new Date("2019-03-28")],
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
  "Q1": ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6",
         "Week 7", "Week 8", "Week 9"],
  "Q2": ["Week 10", "Week 11", "Week 12", "Week 13", "Week 14", "Week 15",
         "Week 16", "Week 17", "Week 18"],
  "Q3": ["Week 19", "Week 20", "Week 21", "Week 22", "Week 23", "Week 24",
         "Week 25", "Week 26", "Week 27"],
  "Q4": ["Week 28", "Week 29", "Week 30", "Week 31", "Week 32", "Week 33",
         "Week 34", "Week 35", "Week 36"],
}




