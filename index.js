// document.addEventListener('DOMContentLoaded', function()
// {
//     document.getElementById("click-this").addEventListener("click", myFunction);
// })
// var button = document.getElementById("click-this");
// button.addEventListener('click',function())
// {
//     if (button.style.display == "")
//     {
//         button.style.display = "none";
//         button.innerHTML = "show";
//     }
//     else
//     {
//         button.style.display = "";
//         button.innerHTML = "hide";
//     }
// }

var button = document.querySelector('#menu-button');
var menu = document.querySelector('#menu');
button.addEventListener('click', function (event) {
      if (menu.style.display == "") {
          menu.style.display = "none";
          button.innerHTML = "Show Schedule";
      } else {
          menu.style.display = "";
          button.innerHTML = "Hide Schedule";
      }
    }
  );
/*
    function myFunction() 
    {
        var x=document.getElementById("click-this").innerHTML = "<table>"+
            "<tr>"+
            "<th>Dates</th>"+
            "<th>Days</th>"+
            "<th>Events</th>"+
            "</tr>"+
            "<tr>"+
            "<td>August 26</td>"+
            "<td>Sunday</td>"+
            "<td>Last day for 100% tuition refund</td>"+
            "</tr>"+
            "<tr>"+
            "<td>August 27</td>"+
            "<td>Monday</td>"+
            "<td>Classes begin.Registration for senior citizens begins.</td>"+
            "</tr>"+
            "<tr>"+
                "<td>August 27-September 2</td>"+
                "<td></td>"+
                "<td>Late registration period.</td>"+
            "</tr>"+
            "<tr>"+
                "<td>September 2</td>"+
                "<td>Sunday</td>"+
                "<td>Last day to add a course.Last day to drop with a 75% refund.Financial Aid Certification Enrollment Status Date.</td>"+
            "</tr>"+
            "<tr>"+
                "<td>September 3</td>"+
                "<td>Monday</td>"+
                "<td>College Closed. No classes scheduled. Verification of Enrollment Rosters available to faculty.</td>"+
            "</tr>"+
            "<tr>"+
                "<td>September 5</td>"+
                "<td>Wednesday</td>"+
                "<td>Classes follow a Monday schedule.</td>"+
            "</tr>"+
            "<tr>"+
                "<td>September 9</td>"+
                "<td>Sunday</td>"+
                "<td>Last day to drop with a 50% refund.</td>"+
            "</tr>"+
            "<tr>"+
                "<td>September 10-11</td>"+
                "<td>Monday-Tuesday</td>"+
                "<td>No classes scheduled.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>September 14</td>"+
            "<td>Friday</td>"+
            "<td>Early Alert Roster emailed to faculty.</td>"+
            "</tr>"+
            "<tr>"+
                "<td>September 16</td>"+
                "<td>Sunday</td>"+
                "<td>Last day to drop with a 25% refund. Last day to drop without a grade of W. Last day to file for pass/fail option. Last day to change or declare a major/minor to be effective in the fall. FORM A census date. Verification of Enrollment Rosters due from faculty.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>September 17</td>"+
            "<td>Monday</td>"+
            "<td>Course withdrawal period begins. A grade of W is assigned to students who officially drop a class. WN grades assigned. Last day to register for an independent study course for the fall term. </td>"+
            "</tr>"+
            "<tr>"+
            "<td>September 18-19</td>"+
            "<td>Tuesday-Wednesday</td>"+
            "<td>No classes scheduled.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>September 21</td>"+
            "<td>Friday</td>"+
            "<td>Early Alert submission deadline for faculty</td>"+
            "</tr>"+
            "<tr>"+
            "<td>September 24</td>"+
            "<td>Monday</td>"+
            "<td>Early Alert notification sent to students.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>September 26</td>"+
            "<td>Wednesday</td>"+
            "<td>WA grades assigned for immunization non-compliance.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>October 1</td>"+
            "<td>Monday</td>"+
            "<td>Last day to file for January 2019 graduation.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>October 8</td>"+
            "<td>Monday</td>"+
            "<td>College is closed. No classes scheduled.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>October 9</td>"+
            "<td>Tuesday</td>"+
            "<td>Mid-Semester Alert roster emailed to faculty.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>October 15</td>"+
            "<td>Monday</td>"+
            "<td>Last day to withdraw from first 7 ½ week courses.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>October 16</td>"+
            "<td>Tuesday</td>"+
            "<td>Mid-Semester Alert submission deadline for faculty.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>October 18</td>"+
            "<td>Thursday</td>"+
            "<td>Mid-Semester Alert notification sent to students.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>November 1</td>"+
            "<td>Thursday</td>"+
            "<td>Last day to appeal grades other than WU or FIN from Spring 2018 semester. Please refer to Undergraduate Catalog for details and procedures.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>November 6</td>"+
            "<td>Tuesday</td>"+
            "<td>Course withdrawal period ends; Last day to drop with the grade of 'W'.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>November 22-25</td>"+
            "<td>Thursday-Sunday</td>"+
            "<td>College is closed. No classes scheduled</td>"+
            "</tr>"+
            "<tr>"+
            "<td>December 3</td>"+
            "<td>Monday</td>"+
            "<td>Last day to withdraw from second 7 ½ week classes.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>December 12</td>"+
            "<td>Wednesday</td>"+
            "<td>Last day of regular classes. Last day to remove incomplete grades from the Spring and Summer 2018 semesters.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>December 13-21</td>"+
            "<td>Thursday-Friday</td>"+
            "<td>Final examinations.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>December 13</td>"+
            "<td>Thursday</td>"+
            "<td>Departmental Exams – Biology/Computer Science</td>"+
            "</tr>"+
            "<tr>"+
            "<td>December 14</td>"+
            "<td>Friday</td>"+
            "<td>Exams for Friday only classes</td>"+
            "</tr>"+
            "<tr>"+
            "<td>December 15</td>"+
            "<td>Saturday</td>"+
            "<td>Exams for Saturday only classes</td>"+
            "</tr>"+
            "<tr>"+
            "<td>December 16</td>"+
            "<td>Sunday</td>"+
            "<td>Exams for Sunday only classes</td>"+
            "</tr>"+
            "<tr>"+
            "<td>December 17</td>"+
            "<td>Monday</td>"+
            "<td>Exams for Monday/Wednesday classes and for Monday only classes</td>"+
            "</tr>"+
            "<tr>"+
            "<td>December 18</td>"+
            "<td>Tuesday</td>"+
            "<td>Exams for Tuesday/Thursday classes and for Tuesday only Math Department Departmental Exams during Club Hour</td>"+
            "</tr>"+
            "<tr>"+
            "<td>December 19</td>"+
            "<td>Wednesday</td>"+
            "<td>Exams for Monday/Wednesday classes and for Wednesday only classes</td>"+
            "</tr>"+
            "<tr>"+
            "<td>December 20</td>"+
            "<td>Thursday</td>"+
            "<td>Exams for Tuesday/Thursday classes and Thursday only classes</td>"+
            "</tr>"+
            "<tr>"+
            "<td>December 21</td>"+
            "<td>Friday</td>"+
            "<td>Departmental Exams - Chemistry</td>"+
            "</tr>"+
            "<tr>"+
            "<td>December 24-25</td>"+
            "<td>Monday-Tuesday</td>"+
            "<td>College is closed.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>December 31</td>"+
            "<td>Monday</td>"+
            "<td>College is closed.</td>"+
            "</tr>"+
            "<tr>"+
            "<td>January 1, 2019</td>"+
            "<td>Tuesday</td>"+
            "<td>College is closed.</td>"+
            "</tr>"+
            "</table>";
        
        if(x.style.display ==="none")
        {
            x.style.display = "block";
        }
        else
        {
            x.style.display = "none";
        }
    }
*/
    /*
        <tr>
        <td>August 26</td>
        <td>Sunday</td>
        <td>Last day for 100% tuition refund</td>
        </tr>
        <tr>
        <td>August 27</td>
        <td>Monday</td>
        <td>Classes begin.
            Registration for senior citizens begins.</td>
        </tr>
        <tr>
            <td>August 27-September 2</td>
            <td></td>
            <td>Late registration period.</td>
        </tr>
        <tr>
            <td>September 2</td>
            <td>Sunday</td>
            <td>Last day to add a course.
                Last day to drop with a 75% refund.
                Financial Aid Certification Enrollment Status Date.</td>
        </tr>
        <tr>
            <td>September 3</td>
            <td>Monday</td>
            <td>College Closed. No classes scheduled.
                Verification of Enrollment Rosters available to faculty.</td>
        </tr>
        <tr>
            <td>September 5</td>
            <td>Wednesday</td>
            <td>Classes follow a Monday schedule.</td>
        </tr>
        <tr>
            <td>September 9</td>
            <td>Sunday</td>
            <td>Last day to drop with a 50% refund.</td>
        </tr>
        <tr>
            <td>September 10-11</td>
            <td>Monday-Tuesday</td>
            <td>No classes scheduled.</td>
        </tr>
        <tr>
        <td>September 14</td>
        <td>Friday</td>
        <td>Early Alert Roster emailed to faculty.</td>
        </tr>
        <tr>
            <td>September 16</td>
            <td>Sunday</td>
            <td>Last day to drop with a 25% refund.
                Last day to drop without a grade of W.
                Last day to file for pass/fail option.
                Last day to change or declare a major/minor to be effective in the fall.
                FORM A census date.
                Verification of Enrollment Rosters due from faculty.</td>
        </tr>
        <tr>
        <td>September 17</td>
        <td>Monday</td>
        <td>Course withdrawal period begins. A grade of W is assigned to students who
            officially drop a class.
            WN grades assigned.
            Last day to register for an independent study course for the fall term. </td>
        </tr>
        <tr>
        <td>September 18-19</td>
        <td>Tuesday-Wednesday</td>
        <td>No classes scheduled.</td>
        </tr>
        <tr>
        <td>September 21</td>
        <td>Friday</td>
        <td>Early Alert submission deadline for faculty</td>
        </tr>
        <tr>
        <td>September 24</td>
        <td>Monday</td>
        <td>Early Alert notification sent to students.</td>
        </tr>
        <tr>
        <td>September 26</td>
        <td>Wednesday</td>
        <td>WA grades assigned for immunization non-compliance.</td>
        </tr>
        <tr>
        <td>October 1</td>
        <td>Monday</td>
        <td>Last day to file for January 2019 graduation.</td>
        </tr>
        <tr>
        <td>October 8</td>
        <td>Monday</td>
        <td>College is closed. No classes scheduled.</td>
        </tr>
        <tr>
        <td>October 9</td>
        <td>Tuesday</td>
        <td>Mid-Semester Alert roster emailed to faculty.</td>
        </tr>
        <tr>
        <td>October 15</td>
        <td>Monday</td>
        <td>Last day to withdraw from first 7 ½ week courses.</td>
        </tr>
        <tr>
        <td>October 16</td>
        <td>Tuesday</td>
        <td>Mid-Semester Alert submission deadline for faculty.</td>
        </tr>
        <tr>
        <td>October 18</td>
        <td>Thursday</td>
        <td>Mid-Semester Alert notification sent to students.</td>
        </tr>
        <tr>
        <td>November 1</td>
        <td>Thursday</td>
        <td>Last day to appeal grades other than WU or FIN from Spring 2018 semester. Please refer
            to Undergraduate Catalog for details and procedures.</td>
        </tr>
        <tr>
        <td>November 6</td>
        <td>Tuesday</td>
        <td>Course withdrawal period ends; Last day to drop with the grade of "W.”</td>
        </tr>
        <tr>
        <td>November 22-25</td>
        <td>Thursday-Sunday</td>
        <td>College is closed. No classes scheduled</td>
        </tr>
        <tr>
        <td>December 3</td>
        <td>Monday</td>
        <td>Last day to withdraw from second 7 ½ week classes.</td>
        </tr>
        <tr>
        <td>December 12</td>
        <td>Wednesday</td>
        <td>Last day of regular classes.
            Last day to remove incomplete grades from the Spring and Summer 2018 semesters.</td>
        </tr>
        <tr>
        <td>December 13-21</td>
        <td>Thursday-Friday</td>
        <td>Final examinations.</td>
        </tr>
        <tr>
        <td>December 13</td>
        <td>Thursday</td>
        <td>Departmental Exams – Biology/Computer Science</td>
        </tr>
        <tr>
        <td>December 14</td>
        <td>Friday</td>
        <td>Exams for Friday only classes</td>
        </tr>
        <tr>
        <td>December 15</td>
        <td>Saturday</td>
        <td>Exams for Saturday only classes</td>
        </tr>
        <tr>
        <td>December 16</td>
        <td>Sunday</td>
        <td>Exams for Sunday only classes</td>
        </tr>
        <tr>
        <td>December 17</td>
        <td>Monday</td>
        <td>Exams for Monday/Wednesday classes and for Monday only classes</td>
        </tr>
        <tr>
        <td>December 18</td>
        <td>Tuesday</td>
        <td>Exams for Tuesday/Thursday classes and for Tuesday only
            Math Department Departmental Exams during Club Hour</td>
        </tr>
        <tr>
        <td>December 19</td>
        <td>Wednesday</td>
        <td>Exams for Monday/Wednesday classes and for Wednesday only classes</td>
        </tr>
        <tr>
        <td>December 20</td>
        <td>Thursday</td>
        <td>Exams for Tuesday/Thursday classes and Thursday only classes</td>
        </tr>
        <tr>
        <td>December 21</td>
        <td>Friday</td>
        <td>Departmental Exams - Chemistry</td>
        </tr>
        <tr>
        <td>December 24-25</td>
        <td>Monday-Tuesday</td>
        <td>College is closed.</td>
        </tr>
        <tr>
        <td>December 31</td>
        <td>Monday</td>
        <td>College is closed.</td>
        </tr>
        <tr>
        <td>January 1, 2019</td>
        <td>Tuesday</td>
        <td>College is closed.</td>
        </tr>
        </table>
    */
/*
    (function() 
    {
        var cx = '004191222614926986702:pg5840zu_4i';

        var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
        })();

        var url='https://www.csi.cuny.edu/sites/default/files/pdf/academicCalendars/FALL2018_ACADEMIC_CALENDAR.pdf';


        $.getJSON( url, function(data){
            $.each(data.query.results.a, function(){       
                $('body').append('<div><a href="https://www.csi.cuny.edu/sites/default/files/pdf/academicCalendars/FALL2018_ACADEMIC_CALENDAR.pdf'+this.href +'">'+this.content+'</a></div>');    
            });
    });
*/
// function toggleDarkLight() {
//     var body = document.getElementById("body");
//     var currentClass = body.className;
//     body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
//   }
