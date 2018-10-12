// TO DO

// Functions:
// Determine start week - both for writing and reading
// Based on start week, select quarter for writing.


function main(){

  // setting up variables for script
  var missing_check = [];
  var missing_connect = [];
  var complete_data = [[],[]];

  var week = minus_week(determine_week(week_ranges)); // Returns Week 5, Week 6, Week 7 etc

  var read_column = student_week_columns[week];

  var quarter = determine_quarter(week, quarter_start_stop); // returns Q1, Q2..etc

  var write_columns = determine_write_columns(week, quarter);

  var check_read_range = read_column + "9:" + read_column + "14";
  var connect_read_range = read_column + "17";
  var basic_read_range = read_column + "28:" + read_column + "31";

  var report_sheet = select_report(quarter);


  for(var school_type in school_ids){

    var students = select_school(school_ids[school_type]);


    for(var student in students.slice(0,6)){
      if(students[student].getName().split(" ").length >= 2){
        var check_range = students[student].getRange(check_read_range);
        var student_name = students[student].getName();

        missing_check_data(missing_check, student_name, check_range, school_type);

        var connect_range = students[student].getRange(connect_read_range);
        var basic_range = students[student].getRange(basic_read_range);

        missing_connect_data(missing_connect, student_name, connect_range, school_type)

        missing_basic_data(missing_connect, student_name, school_type, basic_range)
      }
      else{
        continue
      }

      }
    }

    var clean_check = remove_duplicates(missing_check);
    var clean_connect = remove_duplicates(missing_connect);


    for(i in clean_check){
      complete_data[0].push(clean_check[i]);
    }
    for(i in clean_connect){
      complete_data[1].push(clean_connect[i]);
    }
  var message = compose_message(complete_data);

  MailApp.sendEmail("bakerrenneckar@gmail.com",'test html', message,{'htmlBody':message});

  write_data(report_sheet, complete_data, write_columns);
}
