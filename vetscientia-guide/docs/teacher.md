# Teacher

After signing in as a teacher, you are directed to the teacher dashboard. Teachers can create and manage courses, create assignments, manage enrolled students, review student performance, and interact with students through course discussions.

## Courses

The course dashboard shows all courses the teacher is currently instructing.

Each course card displays:

- Course Name: the full course name.
- Course Image: the course image or a default Vet Scientia image.
- Section Number: the course section identifier.

Click a course card to select the course and manage it.

## Adding A Course

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

## Editing Course Details

1. Click the action menu on the course card.
2. Click `Edit`.
3. Update the desired fields.
4. Click `Save`.

## Deleting A Course

!!! danger
    Deleting a course is permanent. Students may be unenrolled, and associated class data such as assignments and grades may be lost.

!!! warning "Testing warning"
    Do not delete provided courses. Only delete courses you created for testing.

1. Click the action menu on the course card.
2. Select `Delete`.
3. Confirm the deletion.

## Navigating The Teacher Dashboard

After selecting a course, use the left sidebar to access course pages.

Available course pages include:

- Course Information
- Assignments
- Simulation
- Discussion Board

Click `Dashboard` in the sidebar to return to the course list.

## Course Information

The `Course Information` page shows course details, access codes, enrolled students, pending students, and seat availability.

Each student card displays:

- Name: the student's full name.
- Email: the student's email address.

## Adding Students Through Access Codes

1. Open `Course Information`.
2. Click `Click to view course access codes`.
3. Copy an unused access code using the copy icon.
4. Send the code to the student.
5. The student uses the code from the `+ Join Course` flow.

!!! info "Expected result"
    The student appears under `Awaiting Approval` until approved.

## Approving Or Ignoring Pending Students

1. Open `Course Information`.
2. Find the student under `Awaiting Approval`.
3. Open the action menu.
4. Click `Approve` to enroll the student.
5. Click `Ignore` to reject the request.

## Unenrolling A Student

1. Open `Course Information`.
2. Find the enrolled student.
3. Open the action menu.
4. Select `Delete`.
5. Confirm that you want to remove the student from the course.

## Assignments

The `Assignments` page allows instructors to create, edit, publish, delete, and review assignments for a course.

Each assignment card displays:

- Assignment Name: the name of the assignment.
- Assignment Status: `Draft` or `Published`.
- Due Date: the assignment due date.
- Description: a summary of the assignment.

Draft assignments are visible to teachers only. Published assignments are visible to students.

### Creating Assignments

1. Click `Create Assignment`.
2. Enter the assignment name.
3. Select the due date.
4. Enter a description.
5. Select the linked simulation.
6. Click `Save` to save as a draft, or click `Publish` to publish for students.

!!! note
    Assignment due dates are treated as due at the end of the selected day.

### Editing Assignments

1. Click `Edit` on the assignment.
2. Update the desired fields.
3. Click `Save`.

### Publishing Assignments

!!! warning
    Published assignments may not be reversible back to draft from the UI. To unpublish, you may need to delete and recreate the assignment as a draft.

1. Click `Edit` on the draft assignment.
2. Click `Publish`.

### Deleting Assignments

!!! danger
    Deleting an assignment is permanent.

!!! warning "Testing warning"
    Only delete assignments you created during testing.

1. Open the assignment action menu.
2. Select `Delete`.
3. Confirm the deletion.

### Viewing Assignment Details

1. Click `Details` on an assignment.
2. Review student completion and report availability.
3. Open an individual student report when available.

Assignment detail rows may include:

- Name: the student's name.
- Completion Status: whether the student completed the assignment.
- Graded Status: whether the assignment has been graded.
- Student Reports: a link to performance report details when available.

### Student Performance Reports

The reports page lets instructors view statistics collected during a simulation, such as reaction time, mistakes, vitals, or other available metrics.

If written feedback is available:

1. Open the student's report.
2. Type feedback in the feedback field.
3. Edit any existing feedback if needed.
4. Click `Submit Feedback`.

!!! tip
    Use the browser back button to return to the assignment details page.

## Simulation Information

The teacher `Simulation` page displays available simulation information cards, including animal type, level, module, description, and image.

## Discussion Board

The discussion board lets teachers and students discuss assignments, simulations, and course topics.

Teachers use the same discussion workflow described in the Student section.

## Teacher Profile Settings

1. Open `Profile Settings` from the sidebar.
2. Click `Edit Profile`.
3. Update first name or last name.
4. Optionally enter a new password.
5. Click `Save Changes`.

!!! note
    The email field is visible but disabled.

