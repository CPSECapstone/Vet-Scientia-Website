
# Introduction

The following document is a guide for students, teachers, and admins alike to guide users on how to create an account, log in, and use the features of our vet simulator.

# Web Portal

The VetScientia web dashboard can be accessed using the following [link](https://gray-bush-0c1bf981e.6.azurestaticapps.net){ target="_blank" rel="noopener" } or typing `https://gray-bush-0c1bf981e.6.azurestaticapps.net` into your browser URL.

## Account Management

### Student Sign-up

<div class="admonition tip" markdown="1">
<p class="admonition-title">Tip</p>

Use the demo to get an idea of the UI and tryout the simulator instead of making an account.

</div>

1. Navigate to the [sign-up page](https://gray-bush-0c1bf981e.6.azurestaticapps.net/signup){ target="_blank" rel="noopener" } of our application.


2. Fill in the sign up textboxes

3. Click `Sign-up`.
5. You will be directed to an email verification screen. 

    1. Obtain the 6 digit email verification code from your inbox of the provided email 
    2. Enter in the verification code
    3. Click Verify to complete the account creation

### Login

<div class="admonition tip" markdown="1">
<p class="admonition-title">Tip</p>

For testing purposes please use the following accounts:

- Super Admin :
  - Username : superadmin@vetscientia.com
  - Password : VetScientia2024!

- University Admin :
  - Username : jmustang@calpoly.edu
  - Password : password123

- Teacher :
  - Username : demoteacher@calpoly.edu
  - Password : testpassword

- Student :
  - Username : demostudent@calpoly.edu
  - Password : testpassword

</div>

1. Navigate to the [login page](https://gray-bush-0c1bf981e.6.azurestaticapps.net/login){ target="_blank" rel="noopener" }.
2. Enter your email and password.
3. Click `login`.

### Resetting Your Account Password 

<video autoplay loop muted playsinline style="max-width: 100%; margin-top: 1rem;">
  <source src="../assets/gifs/Reset-Password.mp4" type="video/mp4"/>
</video>

<div class="admonition note" markdown="1">
<p class="admonition-title">Note</p>

If you have lost access to your account email or forgotten the email for your account, please contact your administrator to recover your account

</div>

In the unfortunate event you have forgotten your account password, you can reset your credentials by completing the following procedure:

1. Go to the [login page](https://gray-bush-0c1bf981e.6.azurestaticapps.net/signin){ target="_blank" rel="noopener" } of the application
2. Click `Forget Password`.
3. Enter the email address associate with your account
4. Click `Send Reset Code`
5. An 16 character long password reset token will be sent to the requested email address if an account has been found

<div class="admonition tip" markdown="1">
<p class="admonition-title">Tip</p>

You can also use the link directly in your email to autofill the reset token directly into our site.

</div>

6. Return the password reset page and enter in received 16 character token
7. Enter in a new password for your account. As a reminder, follow the application's password requirement specifications.
8. Click `Reset Password`

## Super Admin

The super-admin dashboard gives super admins the ability to create organizations and manage existing universities/clinics. They can also manage simulation versions by uploading unity files directly.

### Dashboard

The super-admin dashboard page shows all currently enrolled existing organizations.
Each entry will show:

- Name
: The name of the organization.
- Organization Type
: The type of the organization \(`University` | `Clinic`\).
- Number of Seats
: The number of seats purchased by the organization.

#### Adding New Organizations

To add a create a new organization in the system:

1. Click `Add Organization` on the top right hand corner of the screen.
2. Enter in the following information for an organization:

    1. Organization Name.
    2. The Organization Type.
      - University.
      - Clinic.
    3. The number of seats for that client.
    4. The subscription contract for that client.
    5. The organizations logo.
    6. The default primary and secondary colors for that organization.
    
3. Click `Preview`.
4. Review if all the information looks correct
5. Click `Add` to add the organization to the system.

#### Adding New Organization Admins

To add a create a new organization in the system:

1. Click `Create Organization Admin` 
2. Enter in the following information for an organization:

    1. First name
    2. Last name
    3. Their email
    4. Their organization
    5. What kind of admin they are (clinic or university)
    
5. The organization admin will be sent an email with information on how to register

#### Editing an Organizations

To edit details of an existing organization such as the number of seats or contract:

1. Click `Details` on the organization you would like to edit.
2. Click `Edit`.
3. Select the text of the detail you would like to edit.
4. Enter the new value.
5. Click `Save`.
6. Dismiss the modal by clicking anywhere outside it.

#### Viewing The Contract 

To preview the contract of an organization you have created previously:

1. Click `Details` on the organization you would like to view the contract for.
2. Click the `Download Contract` button to view the contract pdf in a new browser window

#### Adding Instructors to a University

1. Click `Generate Teacher Codes` on the top right-hand corner of the page.
2. If you'd like to use previously generated codes that haven't been used, click `List Unused Codes`
3. Choose the organization and number of codes you'd like to generate
4. Distribute the codes to teachers. They'll have to enter these codes in the `Have a teacher access code?` field when making an account to register as a teacher.

#### Deleting an Organization

<div class="admonition danger" markdown="1">
<p class="admonition-title">Caution</p>
Once deleted all information linked with that organization will removed.
There is **NO** way to revive an deleted organization.
</div>

<div class="admonition warning" markdown="1">
<p class="admonition-title">Warning</p>
We kindly ask you to **only try deleting** organizations that you have created yourself during the alpha test.  Please **DO NOT** delete any of the provided organizations. 
If you by any chance accidentally, delete any of provided organizations. please contact one of us over Slack or email as soon as possible so we can restore the database to its original configuration 
Thank you!
We appreciate your cooperation and taking time out of your day to test our product.
</div>

To remove an organization from the system:

1. Click `Details` on the organization you would like to remove.
2. Click `Delete Organization`.

### Game Simulation Page

The game version dashboard allows a super admin to manage the versions of the simulation as the product gets updated and improved based on feedback. Once a developer finishes a simulation update in Unity, they can send the build to the super admin to apply it in the application.

When clicked, the game version dashboard presents a table showing a version history of the available (non-deleted) versions of the anesthesia simulation along with each version's accompanying information.

The following information is provided for each row (simulation version) in the table.

<div class="admonition note" markdown="1">
<p class="admonition-title">Note</p>

The green dot 🟢 next to a version ID indicates this is the latest version and one currently deployed in the application.

</div>

- Version
: An unique identifier for that build of the simulation.
- Build Time
: The timestamp for when that version was uploaded to the system in UTC time.
- Change Log
: A description of what has changed in this version of the simulation.

#### Uploading a new Simulation Version


<video autoplay loop muted playsinline style="max-width: 100%; margin-top: 1rem;">
  <source src="../assets/gifs/Add-Sim.mp4" type="video/mp4"/>
</video>


To upload and deploy a new version of the simulation:

<div class="admonition note" markdown="1">
<p class="admonition-title">Note</p>

Archive files such as zip or tarball formats containing the game files are not supported.

To ensure a successful upload, please make sure the game files are named exactly as described below. Capitalization and file extensions do matter:

</div>


1. Click `Add Simulation`.
2. Enter a brief description of any new features or bug fixes in the change log.
3. Drag and drop, or click to select from your device's file explorer, the new simulation build files.


  - There should be exactly 4 files per build. They should be named as follows:

      1. `Build.data.br`
      2. `Build.framework.js.br`
      3. `Build.loader.js`
      4. `Build.wasm.br`

  - You can either directly select all 4 files or a directory containing only these 4 files in the modal.

<div class="admonition danger" markdown="1">
<p class="admonition-title">Caution</p>

The upload process can take a few seconds to 1–2 minutes depending on various factors, including your internet connection speed, current load on our backend servers, and AWS traffic.

Please do not close the window or the modal while the spinning indicator is present, or your files may not be fully uploaded.

</div>

4. Click `Upload Simulation` to post and deploy the new version to the dashboard.

#### Restoring an previous Simulation Version


<video autoplay loop muted playsinline style="max-width: 100%; margin-top: 1rem;">
  <source src="../assets/gifs/Update-Sim.mp4" type="video/mp4"/>
</video>


In the event that a simulation update introduces an undesirable change, you can restore to an archived version of the simulation:

<div class="admonition danger" markdown="1">
<p class="admonition-title">Caution</p>

The restore process can take a few seconds to 1–2 minutes depending on various factors, including your internet connection speed, current load on our backend servers, and AWS traffic.

Please do not close the window or the modal while the spinning indicator is present, or your restore may not fully complete

</div>

1. Scroll to the version of the simulation you would like to restore to
2. Click on the restore icon on the right hand side of the table row to restore the deployed simulation to that build version.

## University Admin

After signing in as a university admin, you will be brought to the primary dashboard for a university admin. You will be presented with 4 main managerial options.

### Users

This page is to allow a university admin to view all teachers currently enrolled in a particular university.

Each entry will display the instructor's name and the number of seats assigned to an instructor.


#### Changing the Number of Seats

You can change the number of seats a particular instructor has.

<video autoplay loop muted playsinline style="max-width: 100%; margin-top: 1rem;">
  <source src="../assets/gifs/change_seats.mp4" type="video/mp4"/>
</video>



1. Scroll to the row with the instructor you would like to remove.
2. Click the `+` button to add more seats to that instructor.
2. Click the `-` button to remove seats from that instructor.


#### Removing an Instructor

<div class="admonition warning" markdown="1">
<p class="admonition-title">Warning</p>
We kindly ask you to **only try deleting** instructors that you have created yourself during the alpha test.  Please **DO NOT** delete any of the provided instructors. 
If you by any chance accidentally, delete any of provided instructors. please contact one of us over Slack or email as soon as possible so we can restore the database to its original configuration.
Thank you!
We appreciate your cooperation and taking time out of your day to test our product.
</div>


1. Scroll to the row with the instructor you would like to remove.
2. Click the trash on the row of the instructor.
3. Hit confirm
 
### Billing

The billing tab allows a university admin to manage the university billing history and options.

#### Subscription Details

Highlights the current enrolled plan, the number of seats provided for the plan, the cost for a yearly subscription, and when the subscription ends.

#### Payment Method

This section indicates the current payment method used for paying for the subscription. This card will be used for purchasing additional seats or auto-renewal once those features are implemented.  

#### Invoice History

Displays the past payment history for this university, such as previous year subscription costs and the number of seats purchased for that subscription.

### Domains

<div class="admonition note" markdown="1">
<p class="admonition-title">Note</p>
While the frontend implementation of this feature has been implemented, the backend part is not. Therefore, this rule is not enforced.
</div>

This page allows the university admins to turn on and off domain checking.  
Each row will display the domain and whether it's allowed in this organization.

<video autoplay loop muted playsinline style="max-width: 100%; margin-top: 1rem;">
  <source src="../assets/gifs/turn_on_off_domain.mp4" type="video/mp4"/>
</video>


#### Adding a domain

<div class="admonition warning" markdown="1">
<p class="admonition-title">Warning</p>
There's currently no way to remove a domain once it has been added. Please currently add with caution.
</div>

<video autoplay loop muted playsinline style="max-width: 100%; margin-top: 1rem;">
  <source src="../assets/gifs/add_domain.mp4" type="video/mp4"/>
</video>


To add a domain to the university: 

1. Click `Add Domain`.
2. Enter in the domain name you would like to add.
3. Click `Submit`.

### Seats

This page will show the total number of seats purchased by the organization and the number of open seats available for students.

### Questions

<div class="admonition note" markdown="1">
<p class="admonition-title">Note</p>

Only, the university side of this feature has been implemented. There is currently no way for super-admins to view the questions posted on this page.

</div>

The question page allows university admins to contact the super admin for any questions or concerns they may have.

<video autoplay loop muted playsinline style="max-width: 100%; margin-top: 1rem;">
  <source src="../assets/gifs/new_question_uni_admin.mp4" type="video/mp4"/>
</video>


To submit a message to a super-admin:

1. Type in the message you would like to send to the super-admin.
2. Select an urgency level to mark the message as:
  - Low
  : The request is of low priority such as a feature request or minor typo in one of the pages.
  - Medium
  : The request has moderate priority such as a typo affecting a feature or bug in a non-critical system.
  - High
  : The request has high priority, for bugs or issues affecting major critical systems (i.e. simulations, assignments, auth) or site-wide outages.
3. Click `Submit`.

### Managing Your Account

The edit profile page allows a university admin to edit their first and last name and change their password.

To access the edit profile page:

1. Click the profile icon on the right side of the navbar.
2. Select `Edit Profile`.

#### Updating Your Name

<video autoplay loop muted playsinline style="max-width: 100%; margin-top: 1rem;">
  <source src="../assets/gifs/change_name.mp4" type="video/mp4"/>
</video>



1. Select the input field next to your name \(first/last\).
2. Enter in your new name.
3. Click `Update`.

#### Changing Your Password

<div class="admonition warning" markdown="1">
<p class="admonition-title">Warning</p>
We kindly ask you if you change the password to please change it back to the original password before finishing the test.  
Thank you!
We appreciate your cooperation and taking time out of your day to test our product.
</div>

1. Select the input field next to your password.
2. Enter in your new password.
3. Click `Update`.

## Teacher

After logging in as a teacher you will be directed to a teacher dashboard where you can create and manage your vet classes, create, view and grade student performed vet-simulations and interact with students through the course discussion forum. 

### Classes

The classes page will allows teachers to view, create and manage all their vet simulation courses.

#### Viewing Classes

All classes a teacher is currently instructing will be displayed as cards in the class page. 

Each card will display the following course information:

- CLass Name
: Full name of the corresponding class.
- Course Image
: The profile image of the class.  If no image is selected during a creation, an default image will be displayed.
- Section Number
: An id for the course that uniquely identifies that particular section.

Click on the card to select the course you would like to view and manage.

#### Adding a Course

<br/>

To create a new course in the system:

1. Click `Add Class`.
2. Enter in the following information for the class:

  - A name for the course.
  - A section number for the course. \(Identifier for the class during the current quarter or semester \).
  -  A brief description of what concepts will be taught in the course.
  -  The start date of the course.
  -  The end date for the course.
  - \(Optionally\)[^2] An image for the course, that will be displayed on the student and teacher dashboards when viewing the course dashboard.

3. Click `Add` to create the new course.



[^2]: If no image is provided for the course, an default VetScientia Image will shown instead.



#### Editing Class Details

<br/>

To change an particular detail about a course that you are currently instructing such as its name:

1. Click the three dots on the top right of the course card you are interested in editing.
2. Click `Edit`
3. Go to the detail you would like to change.
4. Click and update the input field\(s\) with the desired change\(s\).
5. Click `Save`

#### Deleting a Class

<div class="admonition danger" markdown="1">
<p class="admonition-title">Caution</p>
Deleting a course is **permanent**. All students will automatically get unenrolled once the course has been deleted and all associated class data such as assignments and grades will be lost.  There is no way to recover an course once it has been deleted.
</div>

<div class="admonition warning" markdown="1">
<p class="admonition-title">Warning</p>
Please don't delete our only course.
Thank you!
We appreciate your cooperation and taking time out of your day to test our product.
</div>

To delete a course (dont):

1. Click the three dots () on the top right of the course card you are interested in deleting.
2. Select `Delete`.
3. If you are sure about removing this course, Click `Delete` again on the confirmation modal to permanently delete the course. 


### Navigating the Teacher Dashboard 

Once you have selected a course, you will have a variety of accessible pages which can be navigated between using the left-hand side nav bar.

You can always return to the courses page by clicking `dashboard` button in the sidebar.

### Course Information Dashboard

Once a course has been selected you will be directed to the Course Information page.

The Course Information Dashboard provides an overview of the students currently enrolled in the course, the class access codes and a way to enroll and unenroll students.

Each student enrolled is represented in a card with the following available information.

- Name
: The full name of the student currently enrolled.
- Email
: The email address of the student currently enrolled.

##### Adding a New Student Through Access Code

To enroll a student through access codes:

1. Click on the class access codes button
2. Click the Copy icon ![](assets/clipboard.svg){ width="20" } for one of the access codes.
3. Distribute the access code to a student you want to add.
4. The remaining steps of joining a course can be found in the [student user guide](#adding-a-course_1){ target="_blank" rel="noopener" }.

#### Un-Enrolling A Student From a Course 

To delete a student from a course, on the teacher side:

1. Select the card of the student you would like to un-enroll.
2. Click on the three dots on the three dots ![](assets/vertical-ellipsis.svg){ width="20" } in top right corner of the card
3. Select `Delete`
4. Confirm you would like to remove the student from the course.

### Assignments

The assignments page allows an instructor to view and manage all the class assignments/simulations for that course.

When you visit the teacher assignment page you will be presented to all active or draft assignments for the course.

Each assignment card will have the following information:

- Assignment Name
: The name of the assignment/simulation \(Ex `Assignment 1.1`\).
- Assignment Status
: The viewable status of an assignment.

    - Draft/Unpublished
    : The assignment has been created can only currently be viewed by you the instructor.

    - Published
    : The assignment is created, published and viewable by all students in the class.

- Assignment Due Date
: The due date of this particular assignment/simulation \(Ex `3/9/25`\).
- Assignment description
: A brief summary of what this assignment/simulation will contain such as what animal, its difficulty, and any special conditions being tested for \(Ex `Pug:Hard, fixed etc`\).

#### Creating Assignments

1. Click the blue `Create Assignment` button on the top center of the page.
2. Enter the following details of the assignment:
    1. Assignment Name.
    2. Due Date[^3] for the assignment.
    3. A brief description of the assignment.
    4. The simulation this assignment is linked to.
3. To save this assignment as a draft \(unpublished\) Click `Save`.
4. To save and publish this assignment, Click `Publish`.

[^3]: All assignments are to set to be due at 23:59:59 of that day.

#### Editing Assignments Details

To edit the details of an existing assignment \(published or draft\) such as changing its due date or description: 
1. Click the blue `Edit` button next to the assignment you wish to edit.
2. Go to the detail\(s\) you wish to change.
3. Click and update the input field\(s\) with the desired change\(s\).
4. Click `Save`.

#### Publishing an Assignment

<div class="admonition danger" markdown="1">
<p class="admonition-title">Caution</p>
You can not change a published assignment back to draft form. To unpublish an assignment, you will need to delete the assignment and recreate it in draft form.
</div>

To change the assignment to published state:
1. Click the blue `Edit` button next to the assignment you wish to get published.
2. Click `Publish`.

#### Deleting Assignments

<div class="admonition danger" markdown="1">
<p class="admonition-title">Caution</p>
Deleting an assignment is **permanent**. There is no way to recover an assignment once it has been deleted.
</div>

<div class="admonition warning" markdown="1">
<p class="admonition-title">Warning</p>
We kindly ask you to **only try deleting** assignments that you have created yourself during the alpha test.  Please **DO NOT** delete any of the provided assignments as they may be linked to other parts of the application still in development.
If you by any chance accidentally, delete any of provided assignments. please contact one of us over Slack or email as soon as possible so we can restore the database to its original configuration.
Thank you!
We appreciate your cooperation and taking time out of your day to test our product.
</div>

1. Click the three dots on the top right of the assignment you wish to delete.
2. Select `Delete`.
3. If you are sure you want to delete this assignment, click `Delete` once more on the confirmation modal.

#### Viewing Details 

To view the details of a particular assignment, such as assignment completion or individual student performance, click the `Details` button on the bottom right of the assignment of interest.

On the top of the assignment details page will be a visual overview of assignment completion for the class.

Below that is a table outlining each student status and report on the assignment. Each row of the table contains:

- Name
: Name of the student for this row entry.
- Completion Status
: Indication of whether a student has completed this assignment. A green check signals completion while a dash means unfinished.
- Graded Status
: Indication if this student's assignment has been graded. A green check indicates the assignment has been graded, while a dash means it is ungraded.
- Student Reports
: A link to view an individual student's performance report on this simulation such as avg heart rate or response time. `N/A` means no report for that student is available.

##### Student Performance Reports 

The reports page allows an instructor to view detailed statistics of a student's performance over a particular simulation such as their average reaction time or number of mistakes. These metrics are gathered during the simulation.

###### Submitting Written Feedback

In addition to viewing detailed statistics collected by the simulation on the student performance, you can also write individual feedback to each student.

To write feedback:

1. Access the report of the student you would like to write feedback for.
2. Type in the feedback you would like to provide to the student.
3. Any previously written feedback will be inside the text box. To edit existing feedback simply make the changes to the text box.
4. Click `Submit Feedback` to upload and save the feedback for the student to view.
 
<div class="admonition tip" markdown="1">
<p class="admonition-title">Tip</p>
To return back to the assignment's detail page, use the browser's back button.
</div>

### Course Grades

The class grades page gives an overview of the enrolled students performance in the course.

On the top of the page gives a breakdown of the grading scale used in the course.
Below that contains a table with each student's performance with the following information:

- Name
: First and last name of the student.
- Grade
: The performance category of the student currently in based on their completed assignments/simulations. The available performance categories[^4] are:
  - Excellent
  - Proficient
  - Average
  - Below Average
  - Needs Improvement
- Details
: A page outlining each of the student's performance in each individual assignment.

[^4]: Refer to the top of the page to translate grade percentages to performance categories.

### Course Students Page

The course student pages allows teachers to view all currently enrolled students in the course. Additionally it provides an area for teachers to generate a course code to add new students to the class.

### Discussion Board

The discussion board is an interactive area where students and instructors converse about assignments, simulations and other course related topics

For usage of the discussion board, view the [student discussion board](#discussion-board_1){ target="_blank" rel="noopener" }

## Student

After logging in as a student, you will be brought to the student dashboard where you can view, play around with, and complete simulation assignments, view reports on previous simulation attempts, interact with other students and instructors through discussion, and edit/manage your user profile.

### Main Course Dashboard

The main course dashboard provides an overview of all the courses you are enrolled in and have added to your dashboard. Click the course to select the course to view its assignments and complete its simulation.

#### Adding a Course
A student can add a course once they have an access code from a teacher.

1. Click `Join Class`.
2. Enter in the access code provided to you by your instructor.
3. Click `Join`.

#### Viewing CLass Details

To view the details of a course

1. Select `Details` on the course card of the course you are interested in.

A modal will popup displaying with the following relevant course information:

- Description
: A description of the course such as what is being taught and important learning objectives of teh course.
- Section Name
: An string that that uniquely identifies that course section 
- Instructor
: The instructor that is teaching the course.
- Access Code
: The access code used to join the current course.
- Course Start Date
: The date when the course begins.
- Course End Date
: The date when the course ends.
- Number of the Students
: The number of the students currently enrolled in the course.

#### Unenrolling from a Course

<div class="admonition danger" markdown="1">
<p class="admonition-title">Caution</p>
Unenrolling from a course is permanent.  You may lose all your progress in a course if you un-enroll from a course.
</div>

<div class="admonition warning" markdown="1">
<p class="admonition-title">Warning</p>
We kindly ask you to **only try unenrolling** from courses that you have joined yourself during the alpha test.  Please **DO NOT** unenroll from any of the provided courses as they may be linked to other parts of the application still in development.
If you by any chance accidentally, unenroll from any of provided courses. please contact one of us over Slack or email as soon as possible so we can restore the database to its original configuration.
Thank you!
We appreciate your cooperation and taking time out of your day to test our product.
</div>

To unroll from a course

1. Click `Details`.
2. Click `Unenroll` on the top right hand corner .
3. Confirm you want to unenroll from a course by clicking `Unenroll`.

### Navigating the Student Dashboard 

Once you have selected a course, you will have a variety of accessible pages which can be navigated between using the left-hand side nav bar.

You can always return to the courses page by clicking the `dashboard` button.

### Assignments

The assignment page will be the first page you land on when you select a course. It gives an overview of all the available assignments in the courses, including those completed, upcoming, and available to practice.

#### Activating the Simulation Screen

1. Click on an uncompleted assignment 
2. Click `Start Simulation`.
3. Wait for the simulation to load, and once loaded, refer to [Simulation](#simulation){ target="_blank" rel="noopener" } for how to interact with the VetSim.

#### Practice Guide

The practice guide provides a basic tutorial on how to use the simulation, the available equipment and get practice in the simulation environment.

To access the practice environment:

1. Click `Practice Guide` on the top right of the page.
2. Read the provided instructions.
3. Click `Launch Simulation`.

### Discussion Board

The discussion board is an interactive area where students can discuss and get help with assignments & simulations.

<div class="admonition note" markdown="1">
<p class="admonition-title">Note</p>
Sorting and filtering features will be added to future releases. 
</div>

Each post displayed will have the following information:

- Author:
  User who wrote the post.
- Date Posted:
  Date-time when the post was created.
- Post Details:
  Paragraph\(s\) containing the student/instructor posts.
- Tags:
  Variety of different categories this post has topics related to.
- Number Of Likes:
  Number of users who have liked this post.
- Number of Comments:
  Number of replies to this post.

#### Generating a New Post

<video autoplay loop muted playsinline style="max-width: 100%; margin-top: 1rem;">
  <source src="../assets/gifs/create_new_discussion_post.mp4" type="video/mp4"/>
</video>


To create a new post:

1. Click `New Post`.
2. Give the new post a title.
3. Type in your question and topic of interest to discuss.
4. \[Optional\] You can add tags to associate this post with a category such as a particular simulation/animal.

    1. Click `Add Tag`.
    2. Either: 
        - Select from one of the preexisting tags by scrolling to it or typing and autocompleting the desired tag.
        - Type in a new tag into the text entry field.
    3. Repeat for as many tags as desired.

5. Click `Post`.
6. You will be redirected back to the primary discussion page with your newly created post at the bottom of the page.

#### Viewing Replies

<video autoplay loop muted playsinline style="max-width: 100%; margin-top: 1rem;">
  <source src="../assets/gifs/viewRepliesDiscussion.mp4" type="video/mp4"/>
</video>


To view a reply to a post, simply click the title of the post you are interested in.

#### Like a Post

<video autoplay loop muted playsinline style="max-width: 100%; margin-top: 1rem;">
  <source src="../assets/gifs/like_post.mp4" type="video/mp4"/>
</video>


Click the like button ![](assets/like_icon.png){ width="20" } to like a post. Click the like button again to remove the like.

#### Creating a Reply

<video autoplay loop muted playsinline style="max-width: 100%; margin-top: 1rem;">
  <source src="../assets/gifs/replydiscussion.mp4" type="video/mp4"/>
</video>


There are two ways to reply to a post:

1. Click the comment button on the left side of the post.
2. Expand the post comment section and click `Reply`.

# Simulation

## Using the Simulator

Test out using the simulation with [Vet Scientia Demo](https://vs-capstone.itch.io/vs-demo){ target="_blank" rel="noopener" }.

To focus on the animal, click the animal.

To check the animal's vitals, focus on the animal and then hover over the animal. You will see a popup of the vitals like heart rate and respiratory rate.

To exit focus on any object, click the back button located towards the bottom of the screen.

To examine the drugs, click the cabinet on the left.

To look at the name of a drug, hover over the drug.

To equip a drug, click the drug bottle.

To get a short description of the drug, click the thumbnail of the drug.

To apply a drug to the animal, equip the drug, focus on the animal, and then click the animal. The drug thumbnail should disappear.

## Running the Guided Demo

Each prompt will guide you to:

- Interact with the anesthesia machine controls  
- Read real‑time values on the monitors  
- Examine the dog model and view its vitals  
- Pick up and instantly equip drugs from the cabinet  
- Navigate the room using point‑and‑click  

---

## Basic Controls

- **Look around:** Click and drag with the mouse  
- **Interact:** Left‑click on objects (cabinet doors, knobs, dog, monitors)  
- **Cancel / Back:** Press the **Back** button (or Esc)  
- **UI tooltips:** Hover over buttons and icons for explanatory text  

---

## Tutorial Flow

1. **Start:** The narrator introduces the simulation goals.  
2. **Machine:** Learn to toggle knobs and switches on the anesthesia machine.  
3. **Monitor:** Observe how vitals update in real time.  
4. **Dog:** Click the dog to bring up its current vital statistics.  
5. **Drugs:** Click a drug icon in the cabinet to equip it; notice the Equipped Drug slot updates.  
6. **Administration:** Click the dog again to apply the drug and watch vital changes on the monitor.  
7. **Navigation:** Practice pointing and clicking to move between stations in the room.  

---
