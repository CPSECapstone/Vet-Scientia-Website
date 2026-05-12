# Vet Scientia User Guide

## Introduction

This guide explains how students, teachers, university admins, clinic admins, and super admins can create accounts, sign in, and use the core features of the Vet Scientia web portal and simulator.

## Web Portal

The Vet Scientia web dashboard can be accessed at [https://gray-bush-0c1bf981e.6.azurestaticapps.net](https://gray-bush-0c1bf981e.6.azurestaticapps.net).

## Account Management

### Student Sign-Up

!!! tip
    Use the demo account first if you want to explore the interface and simulator without creating a new account.

1. Navigate to the [sign-up page](https://gray-bush-0c1bf981e.6.azurestaticapps.net/signup).
2. Enter your first name, last name, email address, password, and access code.
3. Click `Sign Up`.
4. You will be directed to an email verification screen.
5. Open the inbox for the email address you provided.
6. Copy the 6-digit email verification code.
7. Enter the verification code.
8. Click `Verify` to complete account creation.

!!! success "Expected result"
    After verification, your account is created and you can sign in.

### Login

!!! info "Testing accounts"
    Use the following accounts when available:

    - Super Admin: `superadmin@vetscientia.com` / `VetScientia2024!`
    - University Admin: `jmustang@calpoly.edu` / `password123`
    - Teacher: `demoteacher@calpoly.edu` / `testpassword`
    - Student: `demostudent@calpoly.edu` / `testpassword`

1. Navigate to the [sign-in page](https://gray-bush-0c1bf981e.6.azurestaticapps.net/signin).
2. Enter your email and password.
3. Click `Log In`.

After a successful login, the application sends you to the correct dashboard for your role.

- Students go to `/student-dashboard`.
- Teachers go to `/teacher-dashboard`.
- University admins go to `/uni-dashboard`.
- Clinic admins go to `/clinic-dashboard`.
- Super admins go to `/super-admin`.

### Resetting Your Password

!!! note
    If you no longer have access to your account email, contact your administrator for account recovery.

1. Go to the [sign-in page](https://gray-bush-0c1bf981e.6.azurestaticapps.net/signin).
2. Click `Forget Password`.
3. Enter the email address associated with your account.
4. Click `Send Reset Code`.
5. If an account is found, a 16-character password reset token will be sent to your email address.
6. Return to the password reset page.
7. Enter the reset token.
8. Enter a new password that meets the application password requirements.
9. Click `Reset Password`.

!!! tip
    If your reset email contains a direct link, use it to automatically fill the reset token.

### Logout

1. Open the dashboard sidebar.
2. Click `Logout`.
3. Confirm you are returned to the sign-in page.

## Super Admin

The super admin dashboard allows super admins to create and manage organizations, create organization admins, generate access codes, and manage simulation versions.

### Dashboard

The dashboard shows all currently enrolled organizations. Each organization card displays:

- Name: the organization name.
- Organization Type: either `University` or `Clinic`.
- Number of Seats: the number of seats purchased by the organization.

### Adding New Organizations

1. Click `Add Organization` in the top-right corner.
2. Enter the organization name.
3. Select the organization type: `University` or `Clinic`.
4. Enter the organization admin email, first name, and last name.
5. Enter the number of seats for the organization.
6. Upload the subscription contract.
7. Upload the organization logo.
8. Choose the default primary and secondary colors for the organization.
9. Click `Preview`.
10. Review the preview and confirm the information is correct.
11. Click `Confirm & Add` to create the organization.

!!! note
    If the selected primary and secondary colors are too similar, the app warns that text may be unreadable. Choose colors with stronger contrast before continuing.

### Adding Organization Admins

1. Click `Create Organization Admin`.
2. Enter the admin's first name.
3. Enter the admin's last name.
4. Enter the admin's email.
5. Select the admin's organization.
6. Select the admin type: university admin or clinic admin.
7. Send the invitation email.

The organization admin receives an email with account setup information.

### Editing Organizations

1. Click `Details` on the organization you want to edit.
2. Click `Edit` for the editable detail.
3. Update the value.
4. Click `Save`.
5. Close the modal by clicking outside it or using the close action.

### Viewing Organization Contracts

1. Click `Details` on the organization.
2. Click `Download Contract` to open or download the contract PDF.

### Adding Instructors To A University

1. Click `Generate Teacher Codes`.
2. Select the organization.
3. Select the role.
4. Enter the number of codes to generate.
5. Click the generate action.
6. Distribute the generated codes to teachers.

Teachers use these codes during sign-up in the access code field.

!!! tip
    Click `List Unused Codes` to view previously generated codes that have not yet been used.

### Deleting Organizations

!!! danger
    Deleting an organization is permanent. All information linked to that organization may be removed, and there is no user-facing way to recover it.

!!! warning "Testing warning"
    Only delete organizations that you created for testing. Do not delete provided seed organizations.

1. Click `Details` on the organization you want to remove.
2. Click `Delete Organization`.
3. Confirm the deletion.

### Game Versions

The `Game Versions` page allows a super admin to manage deployed simulation builds. It shows the version history for available simulation versions.

Each row includes:

- Version: the unique identifier for the simulation build.
- Build Time: when the version was uploaded.
- Change Log: a description of changes in that version.
- Restore: restores the deployed simulation to that version.
- Delete: removes the version from the visible list.

!!! note
    The latest version is treated as the current deployed version.

#### Uploading A New Simulation Version

!!! note
    Archive files such as `.zip` or tarballs are not supported. Upload the build files directly.

The build must include exactly these files:

1. `Build.data.br`
2. `Build.framework.js.br`
3. `Build.loader.js`
4. `Build.wasm.br`

1. Open `Game Versions`.
2. Click `Add Simulation`.
3. Enter a brief change log describing features or fixes.
4. Drag and drop the 4 build files, or select them from your device.
5. Click `Upload Simulation`.
6. Wait for the upload to finish.

!!! warning
    Uploading can take several seconds to a few minutes. Do not close the window or modal while the loading indicator is active.

#### Restoring A Previous Simulation Version

1. Open `Game Versions`.
2. Find the version you want to restore.
3. Click the restore icon for that row.
4. Wait for the restore process to finish.

!!! warning
    Restoring can take several seconds to a few minutes. Do not close the window or modal while the loading indicator is active.

## University Admin

After signing in as a university admin, you are brought to the university admin dashboard. The dashboard provides access to `Users`, `Billing`, `Domains`, `Seats`, `Questions`, and profile management.

### Users

The `Users` page lets a university admin view and manage teachers in the university.

Each row displays:

- Name: the teacher's first and last name.
- Email: the teacher's email address.
- Number of Seats: the number of student seats assigned to that teacher.

#### Changing Teacher Seat Counts

1. Open `Users`.
2. Find the instructor you want to update.
3. Click `+` to add a seat.
4. Click `-` to remove a seat.

The seat count updates immediately. Seat counts cannot be reduced below zero.

#### Removing An Instructor

!!! warning "Testing warning"
    Only remove instructors that you created during testing. Do not remove provided seed instructors.

1. Open `Users`.
2. Find the instructor you want to remove.
3. Click the trash icon on that row.
4. Confirm the removal.

### Billing

The `Billing` tab displays university billing details.

Sections include:

- Subscription Details: current plan, seat count, yearly cost, and subscription end date.
- Payment Method: current payment method on file.
- Invoice History: previous payment history and purchased seats.

!!! note
    Some billing details and links may be static or placeholders until full billing integration is complete.

### Domains

The `Domains` page allows university admins to add domains and toggle checking on or off.

!!! note
    Domain checking may not be fully enforced by the backend in all environments.

#### Adding A Domain

!!! warning
    There may not be a user-facing way to remove a domain after adding it. Add test domains carefully.

1. Open `Domains`.
2. Click `+ Add Domain`.
3. Enter the domain name.
4. Click `Submit`.

#### Toggling Domain Checking

1. Open `Domains`.
2. Find the domain row.
3. Click the toggle in the checking status column.

The status changes between `On` and `Off`.

### Seats

The `Seats` page shows:

- Total seats purchased by the organization.
- Seats remaining.

Seats remaining are based on the organization's total seats and assigned teacher seats.

### Questions

The `Questions` page lets university admins contact the super admin team.

!!! note
    In some environments, the frontend can submit questions, but there may not be a super-admin UI for viewing them yet.

1. Open `Questions`.
2. Review the prefilled name, email, and organization fields.
3. Select an urgency level.
4. Type your message.
5. Click `Submit`.

Urgency levels:

- Low: feature requests or minor typos.
- Medium: non-critical bugs or issues that affect a feature.
- High: critical bugs affecting simulations, assignments, authentication, or site availability.

### Managing Your Account

1. Click the profile icon or open the profile/settings link.
2. Select `Edit Profile`.

#### Updating Your Name

1. Edit your first name or last name.
2. Click `Update`.

#### Changing Your Password

!!! warning "Testing warning"
    If you change a shared test account password, change it back before finishing testing.

1. Enter a new password.
2. Confirm it meets the password requirements.
3. Click `Update`.

## Clinic Admin

After signing in as a clinic admin, you are brought to the clinic admin dashboard. Clinic admins can manage clinic students, domains, seats, billing, support questions, profile settings, and simulation-course workflows.

### Users

The `Users` page lists clinic students.

Each row displays:

- Name: the student's first and last name.
- Email: the student's email address.
- Remove: action to remove the student from the organization.

#### Removing A Clinic Student

1. Open `Users`.
2. Find the student you want to remove.
3. Click the trash icon.
4. Confirm the removal.

!!! warning
    Removing a student from the organization may also unenroll them from associated clinic courses.

### Domains, Seats, Billing, And Questions

Clinic admin pages for `Domains`, `Seats`, `Billing`, and `Questions` behave similarly to the university admin versions, using the clinic organization's branding and data.

### Simulation Courses

1. Open `Simulations` from the clinic dashboard.
2. Review the clinic instructor portal.
3. Search courses.
4. Click `+ Add Course` to create a course.
5. Select a course to manage course information, assignments, simulation info, and discussion posts.

Clinic simulation-course management follows the same general workflow as the teacher course dashboard.

## Teacher

After signing in as a teacher, you are directed to the teacher dashboard. Teachers can create and manage courses, create assignments, manage enrolled students, review student performance, and interact with students through course discussions.

### Courses

The course dashboard shows all courses the teacher is currently instructing.

Each course card displays:

- Course Name: the full course name.
- Course Image: the course image or a default Vet Scientia image.
- Section Number: the course section identifier.

Click a course card to select the course and manage it.

### Adding A Course

1. Click `+ Add Course`.
2. Enter the course name.
3. Enter the section number.
4. Enter a brief course description.
5. Enter the number of seats.
6. Select the start date.
7. Select the end date.
8. Optionally upload a course image.
9. Click `Add`.

!!! note
    If no image is provided, the application uses a default course image.

### Editing Course Details

1. Click the action menu on the course card.
2. Click `Edit`.
3. Update the desired fields.
4. Click `Save`.

### Deleting A Course

!!! danger
    Deleting a course is permanent. Students may be unenrolled, and associated class data such as assignments and grades may be lost.

!!! warning "Testing warning"
    Do not delete provided courses. Only delete courses you created for testing.

1. Click the action menu on the course card.
2. Select `Delete`.
3. Confirm the deletion.

### Navigating The Teacher Dashboard

After selecting a course, use the left sidebar to access course pages.

Available course pages include:

- Course Information
- Assignments
- Simulation
- Discussion Board

Click `Dashboard` in the sidebar to return to the course list.

### Course Information

The `Course Information` page shows course details, access codes, enrolled students, pending students, and seat availability.

Each student card displays:

- Name: the student's full name.
- Email: the student's email address.

### Adding Students Through Access Codes

1. Open `Course Information`.
2. Click `Click to view course access codes`.
3. Copy an unused access code using the copy icon.
4. Send the code to the student.
5. The student uses the code from the `+ Join Course` flow.

!!! info "Expected result"
    The student appears under `Awaiting Approval` until approved.

### Approving Or Ignoring Pending Students

1. Open `Course Information`.
2. Find the student under `Awaiting Approval`.
3. Open the action menu.
4. Click `Approve` to enroll the student.
5. Click `Ignore` to reject the request.

### Unenrolling A Student

1. Open `Course Information`.
2. Find the enrolled student.
3. Open the action menu.
4. Select `Delete`.
5. Confirm that you want to remove the student from the course.

### Assignments

The `Assignments` page allows instructors to create, edit, publish, delete, and review assignments for a course.

Each assignment card displays:

- Assignment Name: the name of the assignment.
- Assignment Status: `Draft` or `Published`.
- Due Date: the assignment due date.
- Description: a summary of the assignment.

Draft assignments are visible to teachers only. Published assignments are visible to students.

#### Creating Assignments

1. Click `Create Assignment`.
2. Enter the assignment name.
3. Select the due date.
4. Enter a description.
5. Select the linked simulation.
6. Click `Save` to save as a draft, or click `Publish` to publish for students.

!!! note
    Assignment due dates are treated as due at the end of the selected day.

#### Editing Assignments

1. Click `Edit` on the assignment.
2. Update the desired fields.
3. Click `Save`.

#### Publishing Assignments

!!! warning
    Published assignments may not be reversible back to draft from the UI. To unpublish, you may need to delete and recreate the assignment as a draft.

1. Click `Edit` on the draft assignment.
2. Click `Publish`.

#### Deleting Assignments

!!! danger
    Deleting an assignment is permanent.

!!! warning "Testing warning"
    Only delete assignments you created during testing.

1. Open the assignment action menu.
2. Select `Delete`.
3. Confirm the deletion.

#### Viewing Assignment Details

1. Click `Details` on an assignment.
2. Review student completion and report availability.
3. Open an individual student report when available.

Assignment detail rows may include:

- Name: the student's name.
- Completion Status: whether the student completed the assignment.
- Graded Status: whether the assignment has been graded.
- Student Reports: a link to performance report details when available.

#### Student Performance Reports

The reports page lets instructors view statistics collected during a simulation, such as reaction time, mistakes, vitals, or other available metrics.

If written feedback is available:

1. Open the student's report.
2. Type feedback in the feedback field.
3. Edit any existing feedback if needed.
4. Click `Submit Feedback`.

!!! tip
    Use the browser back button to return to the assignment details page.

### Simulation Information

The teacher `Simulation` page displays available simulation information cards, including animal type, level, module, description, and image.

### Discussion Board

The discussion board lets teachers and students discuss assignments, simulations, and course topics.

Teachers use the same discussion workflow described in the Student section.

### Teacher Profile Settings

1. Open `Profile Settings` from the sidebar.
2. Click `Edit Profile`.
3. Update first name or last name.
4. Optionally enter a new password.
5. Click `Save Changes`.

!!! note
    The email field is visible but disabled.

## Student

After signing in as a student, you are brought to the student dashboard. Students can view courses, join courses, complete simulation assignments, review completed work, use course discussions, and edit profile settings.

### Main Course Dashboard

The student dashboard shows courses you are enrolled in and courses awaiting approval.

Use the search field to search by course name, section, or description.

### Adding A Course

A student can request to join a course after receiving an access code from a teacher.

1. Click `+ Join Course`.
2. Enter the access code provided by the instructor.
3. Submit the request.

!!! info "Expected result"
    After submission, the course appears as pending until a teacher approves the request.

### Viewing Course Details

1. Select `Details` on a course card.
2. Review the available course information.

Course details may include:

- Description: the course description and learning objectives.
- Section Name: the course section identifier.
- Instructor: the instructor teaching the course.
- Access Code: the code associated with joining the course.
- Course Start Date: when the course begins.
- Course End Date: when the course ends.
- Number of Students: current course enrollment count.

### Unenrolling From A Course

!!! warning
    Unenrolling from a course may remove your course access and progress.

!!! warning "Testing warning"
    Only unenroll from courses you joined for testing. Do not unenroll from provided seed courses.

1. Click `Details` on the course card.
2. Click `Unenroll`.
3. Confirm that you want to unenroll.

### Navigating The Student Dashboard

After selecting a course, use the left sidebar to access course pages.

Available course pages include:

- Assignments
- Discussion Board
- Profile Settings

Click `Dashboard` in the sidebar to return to the course list.

### Assignments

The assignments page shows published assignments for the selected course.

Assignments are separated into:

- Uncompleted Assignments
- Completed Assignments

Each assignment card displays:

- Assignment title.
- Status.
- Linked simulation.
- Due date.
- Description, when available.

### Starting A Simulation Assignment

1. Open an uncompleted assignment.
2. Click `Go to Simulation`.
3. Wait for the simulation to load.
4. Complete the simulation activity.

### Completing An Assignment

1. Open an assignment.
2. Click `Complete Assignment`.
3. Wait for the success message.
4. Return to the assignment list.

!!! success "Expected result"
    The assignment should move from `Uncompleted Assignments` to `Completed Assignments`.

### Practice Guide

The practice guide introduces the simulator controls and lets students practice in the simulation environment.

1. Open the course assignments page.
2. Click `Try our practice guide`.
3. Read the instructions.
4. Launch the practice simulation.

### Discussion Board

The discussion board lets students ask questions and discuss assignments, simulations, and course topics.

!!! note
    Sorting and filtering may be added in a future release.

Each post may display:

- Author: the user who wrote the post.
- Date Posted: when the post was created.
- Post Details: the body of the post.
- Tags: categories associated with the post.
- Number of Likes: how many users liked it.
- Number of Comments: how many replies it has.

#### Creating A New Post

1. Click `New Post`.
2. Enter a title.
3. Type your question or topic.
4. Optionally add tags.
5. Click `Post`.

To add tags:

1. Click `Add Tag`.
2. Select an existing tag or type a new tag.
3. Repeat for as many tags as needed.

#### Viewing Replies

Click the title or comment area of a post to open its replies.

#### Liking A Post

Click the like button to like a post. Click it again to remove your like.

#### Creating A Reply

There are two ways to reply:

1. Click the comment button on the post.
2. Open the post comments and click `Reply`.

Type your reply and click `Submit Comment`.

### Student Profile Settings

1. Open `Profile Settings` from the sidebar.
2. Click `Edit Profile`.
3. Update first name or last name.
4. Optionally enter a new password.
5. Click `Save Changes`.

!!! note
    The email field is visible but disabled.

## Simulation

A demo of the simulation is available without creating an account: [Vet Scientia Demo](https://gray-bush-0c1bf981e.6.azurestaticapps.net/student-dashboard/demo-course-001/simulation/67b2964d4bf1ef93d1fca5c8).

### Using The Simulator

- To focus on the animal, click the animal.
- To check the animal's vitals, focus on the animal and hover over it.
- To exit focus on an object, click the back button near the bottom of the screen.
- To examine drugs, click the cabinet on the left.
- To view a drug name, hover over the drug.
- To equip a drug, click the drug bottle.
- To view a short drug description, click the drug thumbnail.
- To apply a drug, equip it, focus on the animal, and click the animal. The equipped drug thumbnail should disappear after use.

### Guided Demo

Each prompt guides you to:

- Interact with anesthesia machine controls.
- Read real-time values on the monitors.
- Examine the animal model and view vitals.
- Pick up and equip drugs from the cabinet.
- Navigate the room using point-and-click controls.

### Basic Controls

- Look around: click and drag with the mouse.
- Interact: left-click objects such as cabinet doors, knobs, the animal, and monitors.
- Cancel or back out: press the on-screen `Back` button or use `Esc` when supported.
- Tooltips: hover over buttons and icons for explanatory text.

### Tutorial Flow

1. Start: the narrator introduces the simulation goals.
2. Machine: toggle knobs and switches on the anesthesia machine.
3. Monitor: observe how vitals update in real time.
4. Animal: click the animal to bring up current vital statistics.
5. Drugs: click a drug icon in the cabinet to equip it.
6. Administration: click the animal again to apply the drug and watch vital changes.
7. Navigation: practice moving between stations in the room.

## Notes For Testers

!!! warning "Destructive testing"
    - Do not delete seed organizations, seed courses, seed instructors, or seed assignments.
    - Only perform destructive tests on records you created yourself.

!!! note "Environment dependencies"
    - Email-dependent workflows require working email configuration.
    - Simulation upload and launch workflows require valid AWS and CloudFront configuration.
    - Some billing content may be placeholder content.
    - Some features may vary between local, QA, and production environments depending on configured test data.
