function fillArray(value, len) {
  if (len == 0) return [];
  var a = [value];
  while (a.length * 2 <= len) a = a.concat(a);
  if (a.length < len) a = a.concat(a.slice(0, len - a.length));
  return a;
}


// Select Active Sheet and Define School Name Type
  // ALL IDs are for Test Data

var school_ids = {
  "Primary": "1AYzmnaBgflGrDkFSAlwRkfuUne0sQgwRx9rbIJOSzJQ",
  "High": "1ZzfDPoHzMDYGIlhwzMDQ_gzNTnYY9DaAGT6aLYTyOC8",
  "Middle": "1uw0P8ain1GkMvj-NFTH3_11egvO4wTZS8OMqQj5J1dI",
  "Liberty": "1k6ULO-SCHU5D11gcyCWn6F_vjGz65pODQoRotokCiro"


};

function select_school(school_id){
  var data_report = SpreadsheetApp.openById(school_id);
  var students = data_report.getSheets();
  return students

}


function select_report(){

  var report = SpreadsheetApp.openById("13uDxiovTTiYLBwb06rmAwuMkiRyIn9AlU90f43qMCBE");
  var report_sheet = report.getSheets()[0]
  return report_sheet

}


function determine_start_row(max_len){

  var start_row = 3 + max_len;


  return Number(start_row)

}

function determine_max_len(report_sheet){
  var connect_vals = report_sheet.getRange("C3:C").getValues();
  var connect_len = connect_vals.filter(String).length;

  var check_vals = report_sheet.getRange("B3:B").getValues();
  var check_len = check_vals.filter(String).length;
  var max_len = Math.max(check_len, connect_len)


  return Number(max_len)

}



function check_and_connect(students, report_sheet, school_type) {
  var missing_check = []
  var missing_connect = []

  for(i in students.slice(0,6)){

    var check_range = students[i].getRange("C9:C14");
    var student_name = students[i].getName();

    if (check_range.isBlank()){
      missing_check.push([school_type, student_name])

    }


    var connect_range = students[i].getRange("C17:C26");

    if (connect_range.isBlank()){
      missing_connect.push([school_type, student_name]);

    }
  }

  var check_vals = report_sheet.getRange("B3:B").getValues();
  var check_len = check_vals.filter(String).length;


  var missing_check_range = report_sheet.getRange(3 + check_len, 1, missing_check.length, 2)
  missing_check_range.setValues(missing_check)



  var connect_vals = report_sheet.getRange("C3:C").getValues();
  var connect_len = connect_vals.filter(String).length;


  var missing_connect_range = report_sheet.getRange(3 + connect_len, 3, missing_connect.length, 2)
  missing_connect_range.setValues(missing_connect)


  return [missing_check, missing_connect]



  }




function main(){
  var complete_data = []
  for(var school_type in school_ids){

    var report_sheet = select_report();

    var max_len = determine_max_len(report_sheet);
    var start_row = determine_start_row(max_len);


    var students = select_school(school_ids[school_type]);

    var partial_data = check_and_connect(students, report_sheet, school_type);
    complete_data.push(partial_data[0])
    complete_data.push(partial_data[1])

  }
  Logger.log(complete_data[0])
  Logger.log(complete_data[1])


}
