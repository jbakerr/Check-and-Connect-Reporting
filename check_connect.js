// TO DO

// Functions:
// Determine start week - both for writing and reading
// Based on start week, select quarter for writing.


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
