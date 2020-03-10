
describe('SchoolReport', function() {
var schoolReport

beforeEach( function() {
  schoolReport = new SchoolReport();
})

it('school grades received 1 Green', function() {
  expect(schoolReport.grade("Green")).toEqual("Green: 1")
 })

 it('school grades received 1 Amber', function() {
  expect(schoolReport.grade("Amber")).toEqual("Amber: 1")
 })

 it('school grades received 1 Red', function() {
  expect(schoolReport.grade("Red")).toEqual("Red: 1")
 })

 it('No result given for grades', function() {
   expect(schoolReport.grade("")).toEqual("No results given")
 })

 it('given multiple grades Green, Amber', function() {
  expect(schoolReport.grade("Green, Amber")).toEqual("Green: 1\n Amber: 1")
})

it('given multiple grades Green, Amber, Red', function() {
  expect(schoolReport.grade("Green, Amber, Red")).toEqual("Green: 1\n Amber: 1\n Red: 1")
})


})