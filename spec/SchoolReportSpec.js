
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



})