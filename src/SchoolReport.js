function SchoolReport() {}

SchoolReport.prototype.grade = function(grades) {
  if(grades == "Green") {
    return "Green: 1"
  } else if(grades == "Amber") {
    return "Amber: 1"
  } else if(grades == "Red") {
    return "Red: 1" 
  } else if (grades == "Green, Amber") {
    return "Green: 1\n Amber: 1"
  } else if (grades == "Green, Amber, Red") {
    return "Green: 1\n Amber: 1\n Red: 1"
  }
   else {
    return "No results given"
}
  

}