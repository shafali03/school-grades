
describe('SchoolReport', function() {
var schoolReport

it('school grades received 1 Green', function() {
  schoolReport = new SchoolReport();
  expect(schoolReport.grade("Green")).toEqual("Green: 1")
 })

 
})