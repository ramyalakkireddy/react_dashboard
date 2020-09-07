var express = require('express');
var router = express.Router();

const courses = [
      {
         "id": "1",
         "name": "React",
         "price": "$120",
         "noOfStudentsEnrolled": "20",
         "category": "Web Development"
      },
      {
         "id": "2",
         "name": "Angular",
         "price": "$110",
         "noOfStudentsEnrolled": "15",
         "category": "Web Development"
      },
      {
         "name": "Javascript",
         "id": "3",
         "price": "$75",
         "noOfStudentsEnrolled": "25",
         "category": "Web Development"
      },
      {
         "name": "CSS",
         "id": "4",
         "price": "$60",
         "noOfStudentsEnrolled": "5",
         "category": "Web Development"
      },
      {
         "name": "WordPress",
         "id": "5",
         "price": "$70",
         "noOfStudentsEnrolled": "2",
         "category": "Web Development"
      },
      {
         "name": "Data Analysis",
         "id": "6",
         "price": "$125",
         "noOfStudentsEnrolled": "15",
         "category": "Data Science"
      },
      {
         "name": "Neural Networks",
         "id": "7",
         "price": "$115",
         "noOfStudentsEnrolled": "5",
         "category": "Data Science"
      },
      {
         "name": "Artificial Intelligene",
         "id": "8",
         "price": "$150",
         "noOfStudentsEnrolled": "8",
         "category": "Data Science"
      },
      {
         "name": "Python",
         "id": "9",
         "price": "$140",
         "noOfStudentsEnrolled": "9",
         "category": "Data Science"
      },
      {
         "name": "Swift",
         "id": "10",
         "price": "$100",
         "noOfStudentsEnrolled": "10",
         "category": "Mobile Apps"
      },
      {
         "name": "React Native",
         "id": "11",
         "price": "$95",
         "noOfStudentsEnrolled": "20",
         "category": "Mobile Apps"
      },
      {
         "name": "Android Development",
         "id": "12",
         "price": "$85",
         "noOfStudentsEnrolled": "30",
         "category": "Mobile Apps"
      },
      {
         "name": "IOS Development",
         "id": "13",
         "price": "$100",
         "noOfStudentsEnrolled": "25",
         "category": "Mobile Apps"
      },
      {
         "name": "Google Flutter",
         "id": "14",
         "price": "$65",
         "noOfStudentsEnrolled": "2",
         "category": "Mobile Apps"
      },
      {
         "name": "Java",
         "id": "15",
         "price": "$130",
         "noOfStudentsEnrolled": "30",
         "category": "Programming Languages"
      },
      {
         "name": "C#",
         "id": "16",
         "price": "$98",
         "noOfStudentsEnrolled": "4",
         "category": "Programming Languages"
      },
      {
         "name": "C++",
         "id": "17",
         "price": "$88",
         "noOfStudentsEnrolled": "8",
         "category": "Programming Languages"
      },
      {
         "name": "Go Language",
         "id": "18",
         "price": "$123",
         "noOfStudentsEnrolled": "5",
         "category": "Programming Languages"
      },
      {
         "name": "Agile",
         "id": "19",
         "price": "$143",
         "noOfStudentsEnrolled": "9",
         "category": "Software Engineering"
      },
      {
         "name": "Kubernetes",
         "id": "20",
         "price": "$79",
         "noOfStudentsEnrolled": "14",
         "category": "Software Engineering"
      },
      {
         "name": "Big Data",
         "id": "21",
         "price": "$87",
         "noOfStudentsEnrolled": "18",
         "category": "Software Engineering"
      },
      {
         "name": "Automation Testing",
         "id": "22",
         "price": "$70",
         "noOfStudentsEnrolled": "23",
         "category": "Software Testing"
      },
      {
         "name": "Selenium WebDriver",
         "id": "23",
         "price": "$65",
         "noOfStudentsEnrolled": "13",
         "category": "Software Testing"
      },
      {
         "name": "API Testing",
         "id": "24",
         "price": "$55",
         "noOfStudentsEnrolled": "6",
         "category": "Software Testing"
      },
      {
         "name": "Appium",
         "id": "25",
         "price": "$85",
         "noOfStudentsEnrolled": "3",
         "category": "Software Testing"
      },
      {
         "name": "Quality Assurance",
         "id": "26",
         "price": "$95",
         "noOfStudentsEnrolled": "9",
         "category": "Software Testing"
      },
      {
         "name": "SQL",
         "id": "27",
         "price": "$45",
         "noOfStudentsEnrolled": "17",
         "category": "Databases"
      },
      {
         "name": "MongoDB",
         "id": "28",
         "price": "$65",
         "noOfStudentsEnrolled": "19",
         "category": "Databases"
      },
      {
         "name": "Apache Kafka",
         "id": "29",
         "price": "$105",
         "noOfStudentsEnrolled": "15",
         "category": "Databases"
      },
      {
         "name": "PostgreSQL",
         "id": "30",
         "price": "$75",
         "noOfStudentsEnrolled": "25",
         "category": "Databases"
      },
      {
         "name": "Pl/SQL",
         "id": "31",
         "price": "$80",
         "noOfStudentsEnrolled": "6",
         "category": "Databases"
      }
   ]

/* GET courses listing. */
router.get('/', function(req, res, next) {
  res.send(courses);
});

module.exports = router;
