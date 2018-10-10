// // Determine Quarter To Check and Write To
// function determine_quarter(date, quarter_start_stop){
//   if(Date() <  quarter_start_stop[0][1] && Date() > quarter_start_stop[0][0]){
//     return quarter_start_stop[0]
//   }

// }


// Returns students' sheets from the school type
function select_school(school_id){
  var data_report = SpreadsheetApp.openById(school_id);
  var students = data_report.getSheets();
  return students

}


// Selects the report to write data to
function select_report(quarter){

  var report = SpreadsheetApp.openById("13uDxiovTTiYLBwb06rmAwuMkiRyIn9AlU90f43qMCBE");
  if(quarter == "Q1"){
    var report_sheet = report.getSheets()[0]
  }
  else if(quarter == "Q2"){
    var report_sheet = report.getSheets()[1]

  }
  else if(quarter == "Q3"){
    var report_sheet = report.getSheets()[2]

  }
  else if(quarter == "Q4"){
    var report_sheet = report.getSheets()[3]

  }

  return report_sheet

}


function remove_duplicates(arr){
   var uniques = [];
    var itemsFound = {};
    for(var i = 0, l = arr.length; i < l; i++) {
        var stringified = JSON.stringify(arr[i]);
        if(itemsFound[stringified]) { continue; }
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
    }
    return uniques;
}


// Scans each student's sheet to see if all the data is missing in both
// the check and then the connection rows.
function missing_check_data(missing_check, student_name, check_range, school_type, check_read_range) {

// Currently only using 6 studenst CHANGE THIS BEFORE PRODUCTION
    var check_data = check_range.getValues();
    for(j = 0 ; j<check_data.length; j++){
      if(check_data[j][0].length == 0){
        missing_check.push([school_type, student_name])
      }
    }
}

function missing_connect_data(missing_connect, student_name, connect_range, school_type, connect_read_range) {
    var coneect_data = connect_range.getValues();
    for(j = 0 ; j < connect_data.length; j++){
      if(connect_data[j][0].length == 0){
        missing_connect.push([school_type, student_name])
      }
    }
}



// function missing_data(student, school_type, check_read_range, connect_read_range) {
//   var missing_check = []
//   var missing_connect = []

// // Currently only using 6 studenst CHANGE THIS BEFORE PRODUCTION
//   for(i in students.slice(0,6)){

//     var check_range = students[i].getRange(check_read_range);
//     var student_name = students[i].getName();
//     var check_data = check_range.getValues();
//     for(j = 0 ; j<check_data.length; j++){
//       if(check_data[j][0].length == 0){
//         missing_check.push([school_type, student_name])

//       }
//     }

//     var connect_range = students[i].getRange(connect_read_range);
//     var connect_data = connect_range.getValues();
//     for(j = 0; j < connect_data.length; j++){
//       if(connect_data[j][0].length == 0){
//         missing_connect.push([school_type, student_name])
//       }
//     }

//   }
//   return [missing_check, missing_connect]
// }


// Writes the complete data to the google report sheet
function write_data(report_sheet, complete_data, write_columns){
    var missing_check_range = report_sheet.getRange(3, write_columns[0], complete_data[0].length, 2);
    missing_check_range.setValues(complete_data[0]);

  var missing_connect_range = report_sheet.getRange(3, write_columns[1], complete_data[1].length, 2);
  missing_connect_range.setValues(complete_data[1]);

}



function determine_quarter(quarter_start_stop){
  if(new Date() <= quarter_start_stop['Q1'][1] && new Date() >= quarter_start_stop['Q1'][0]){
    return "Q1";
  }
  else if (new Date() <= quarter_start_stop['Q2'][1] && new Date() >= quarter_start_stop['Q2'][0]){
    return "Q2";
  }
  else if (new Date() <= quarter_start_stop['Q3'][1] && new Date() >= quarter_start_stop['Q3'][0]){
    return "Q3";
  }
  else if (new Date() <= quarter_start_stop['Q4'][1] && new Date() >= quarter_start_stop['Q4'][0]){
    return "Q4";
  }
}


// Determine Date Range to Check
function determine_date_range(quarter){
  if(quarter == "Q1"){
    return q1_ranges
  }
  else if(quarter == "Q2"){
    return q2_ranges

  }
    else if(quarter == "Q3"){
    return q3_ranges

  }
    else if(quarter == "Q4"){
    return q4_ranges

  }
}


// Determine Week
function determine_week(quarter_selection){
  var date = new Date()
  for(i in quarter_selection){
    // console.log(quarter_selection[i])
    // console.log(new Date())
    if (date <= quarter_selection[i][1]){
      return(i)
    }
  }
}

// Select Previous Week
function minus_week(week){
  var split_string = week.split(" ");
  split_string[1] = parseInt(split_string[1])
  if(split_string[1] == 1){
    return split_string.join(" ")
  }
  else{
    split_string[1] = split_string[1] - 1
    return split_string.join(" ")

  }
}


// Determine Write Check and Connect Columns for Report. Returns array.
// Index 0 is for check index 1 is for connect.
function determine_write_columns(week, quarter){
    if(quarter == "Q1"){
    check_selection = report_q1_check_columns
    connect_selection = report_q1_connect_columns
  }
  else if(quarter == "Q2"){
    check_selection = report_q2_check_columns
    connect_selection = report_q2_connect_columns
  }
    else if(quarter == "Q3"){
    check_selection = report_q3_check_columns
    connect_selection = report_q3_connect_columns
  }
    else if(quarter == "Q4"){
    check_selection = report_q4_check_columns
    connect_selection = report_q4_connect_columns
  }

  return [check_selection[week], connect_selection[week]]
}
