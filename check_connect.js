// TO DO

// Functions:
// Determine start week - both for writing and reading
// Based on start week, select quarter for writing.


function main(){

  // var missing_check = [];
  // var missing_connect = [];
  var complete_data = [[],[]];


  var quarter = determine_quarter(quarter_start_stop);

  var quarter_selection = determine_date_range(quarter);

  var week = minus_week(determine_week(quarter_selection));

  var read_column = student_week_columns[week];

  var write_columns = determine_write_columns(week, quarter);

  var check_read_range = read_column + "9:" + read_column + "14"
  var connect_read_range = read_column + "17:" + read_column + "26"

  var report_sheet = select_report(quarter);


  for(var school_type in school_ids){


    var students = select_school(school_ids[school_type]);

    var data = missing_data(students, school_type, check_read_range, connect_read_range);

    var partial_check = remove_duplicates(data[0]);
    var partial_connect = remove_duplicates(data[1]);
    for(i in partial_check){
      complete_data[0].push(partial_check[i]);

    }

    for(i in partial_connect){
      complete_data[1].push(partial_connect[i]);
    }
  }

  Logger.log(partial_check)
  Logger.log(partial_connect)
  write_data(report_sheet, complete_data, write_columns);
}
