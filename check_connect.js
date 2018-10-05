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



function missing_data(students, school_type) {
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

  return [missing_check, missing_connect]

  }


function write_data(report_sheet, complete_data){
    var missing_check_range = report_sheet.getRange(3, 1, complete_data[0].length, 2);
    missing_check_range.setValues(complete_data[0]);

  var missing_connect_range = report_sheet.getRange(3, 3, complete_data[1].length, 2);
  missing_connect_range.setValues(complete_data[1]);

}


function main(){
  var missing_check = [];
  var missing_connect = [];
  var complete_data = [[],[]];

  var report_sheet = select_report();
  for(var school_type in school_ids){


    var students = select_school(school_ids[school_type]);

    data = missing_data(students, school_type);

    var partial_check = data[0];
    var partial_connect = data[1];
    for(i in partial_check){
      complete_data[0].push(partial_check[i]);

    }

    for(i in partial_connect){
      complete_data[1].push(partial_connect[i]);
    }
  }
  write_data(report_sheet, complete_data);
}
