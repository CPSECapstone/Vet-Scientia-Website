# Troubleshooting

Use this page when a workflow does not behave as expected.

## I Did Not Receive A Verification Email

!!! note
    If working on a local environment, check the backend console for a verification code.

1. Check the spam or junk folder for the address used during sign-up.
2. Confirm the email address was typed correctly.
3. Wait a few minutes and try the action again if the UI allows it.
4. Contact an administrator if the email still does not arrive.

## My Access Code Does Not Work

1. Confirm the code was copied exactly, with no extra spaces.
2. Confirm the code is for the correct role or course.
3. Ask the instructor or administrator to verify that the code is unused and still valid.

!!! tip
    Teachers can check unused course access codes from the Course Information page.

## I Cannot See My Course

For students:

1. Confirm you submitted the correct course access code.
2. Check whether the course is still pending approval.
3. Ask the instructor to approve your request from Course Information.

For teachers:

1. Confirm you are signed in with the correct teacher account.
2. Confirm the course was not deleted.
3. Contact an administrator if the course is missing unexpectedly.

## The Simulation Does Not Load

!!! warning
    Simulation loading requires a valid deployed simulation build and working AWS/CloudFront configuration.

1. Refresh the page once.
2. Confirm your browser allows WebGL content.
3. Try a modern browser such as Chrome, Edge, Firefox, or Safari.
4. Check whether other users can launch the same simulation.
5. Ask a super admin to verify that the active simulation version is deployed correctly.

## A Simulation Upload Failed

1. Confirm the upload contains exactly these four files:

    - `Build.data.br`
    - `Build.framework.js.br`
    - `Build.loader.js`
    - `Build.wasm.br`

2. Confirm the files are uploaded directly, not inside a `.zip`, `.tar`, or folder archive.
3. Keep the upload modal open until the loading indicator finishes.
4. Retry on a stable network connection.

## I Cannot Publish An Assignment

1. Confirm all required assignment fields are complete.
2. Confirm a simulation is selected.
3. Confirm the due date is valid.
4. Save as draft first, then try publishing again.

## I Accidentally Deleted Something

!!! danger
    Deleted organizations, courses, assignments, and enrollments may not be recoverable from the UI.

1. Stop making additional changes in the affected area.
2. Record what was deleted and when it happened.
3. Contact the project administrator or development team.
4. If this happened in a test environment, identify whether the deleted record was seed data or a record you created.
