
describe('SchoolReport', function() {
var schoolReport

it('school grades received 1 Green', function() {
  schoolReport = new SchoolReport();
  expect(schoolReport.grade("Green")).toEqual("Green: 1")
 })

 it('school grades received 1 Amber', function() {
  schoolReport = new SchoolReport();
  expect(schoolReport.grade("Amber")).toEqual("Amber: 1")
 })

 it('school grades received 1 Red', function() {
  schoolReport = new SchoolReport();
  expect(schoolReport.grade("Red")).toEqual("Red: 1")
 })

 it('No result given for grades', function() {
   schoolReport = new SchoolReport();
   expect(schoolReport.grade("")).toEqual("No results given")
 })

 it('given multiple grades Green, Amber', function() {
  schoolReport = new SchoolReport();
  expect(schoolReport.grade("Green, Amber")).toEqual("Green: 1\n Amber: 1")
})


})