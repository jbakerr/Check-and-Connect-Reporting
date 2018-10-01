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
  "High": "1ZzfDPoHzMDYGIlhwzMDQ_gzNTnYY9DaAGT6aLYTyOC8"
  // "Middle": "1uw0P8ain1GkMvj-NFTH3_11egvO4wTZS8OMqQj5J1dI",
  // "Liberty": "1k6ULO-SCHU5D11gcyCWn6F_vjGz65pODQoRotokCiro"


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


function determine_start_row(report_sheet){
  var connect_vals = report_sheet.getRange("C3:C").getValues();
  var connect_len = connect_vals.filter(String).length;

  var check_vals = report_sheet.getRange("B3:B").getValues();
  var check_len = check_vals.filter(String).length;

  var start_row = 3 + Math.max(check_len, connect_len)
  Logger.log(check_len)
  Logger.log(connect_len)

  return Number(start_row)

}

function check_and_connect(students, report_sheet, school_type, start_row) {

  for(i in students.slice(0,6)){
    var check_range = students[i].getRange("C9:C14");
    var student_name = students[i].getName();

    if (check_range.isBlank()){
      var check_vals = report_sheet.getRange("B3:B").getValues();
      var check_len = check_vals.filter(String).length;
      var check_range = report_sheet.getRange(check_len + start_row, 2)
      check_range.setValues([[student_name]]);
    }

    var connect_range = students[i].getRange("C17:C26");

    if (connect_range.isBlank()){
      var connect_vals = report_sheet.getRange("C3:C").getValues();
      var connect_len = connect_vals.filter(String).length;
      var connect_range = report_sheet.getRange(connect_len + start_row, 3);
      connect_range.setValues([[student_name]]);
    }
  }

  var max_length = Math.max(check_len, connect_len) + 1
  Logger.log(max_length)
  var matrix_height = (max_length - start_row + 2)
  var matrix = [];
  for(var i=0; i<matrix_height + 1; i++) {
    matrix[i] = new Array(school_type);
  }

  Logger.log(matrix)

  var school_range = report_sheet.getRange(start_row,1, max_length, 1)

  school_range.setValues(matrix);


}


function main(){
  for(var school_type in school_ids){
    var students = select_school(school_ids[school_type]);
    var report_sheet = select_report();
    var start_row = determine_start_row(report_sheet)
    Logger.log(Number(start_row))

    check_and_connect(students, report_sheet, school_type, start_row);

  }

}
