# University Admin

!!! note
    As of May 2026, the University Admin page has not been fully implemented and might contain features that are planned for removal or being overhauled.


After signing in as a university admin, you are brought to the university admin dashboard. The dashboard provides access to `Users`, `Billing`, `Domains`, `Seats`, `Questions`, and profile management.

## Users

The `Users` page lets a university admin view and manage teachers in the university.

Each row displays:

- Name: the teacher's first and last name.
- Email: the teacher's email address.
- Number of Seats: the number of student seats assigned to that teacher.

### Changing Teacher Seat Counts

1. Open `Users`.
2. Find the instructor you want to update.
3. Click `+` to add a seat.
4. Click `-` to remove a seat.

The seat count updates immediately. Seat counts cannot be reduced below zero.

### Removing An Instructor

!!! warning "Testing warning"
    Only remove instructors that you created during testing. Do not remove provided seed instructors.

1. Open `Users`.
2. Find the instructor you want to remove.
3. Click the trash icon on that row.
4. Confirm the removal.

## Billing

The `Billing` tab displays university billing details.

Sections include:

- Subscription Details: current plan, seat count, yearly cost, and subscription end date.
- Payment Method: current payment method on file.
- Invoice History: previous payment history and purchased seats.

!!! note
    Some billing details and links may be static or placeholders until full billing integration is complete.

## Domains

The `Domains` page allows university admins to add domains and toggle checking on or off.

!!! note
    Domain checking may not be fully enforced by the backend in all environments.

### Adding A Domain

!!! warning
    There may not be a user-facing way to remove a domain after adding it. Add test domains carefully.

1. Open `Domains`.
2. Click `+ Add Domain`.
3. Enter the domain name.
4. Click `Submit`.

### Toggling Domain Checking

1. Open `Domains`.
2. Find the domain row.
3. Click the toggle in the checking status column.

The status changes between `On` and `Off`.

## Seats

The `Seats` page shows:

- Total seats purchased by the organization.
- Seats remaining.

Seats remaining are based on the organization's total seats and assigned teacher seats.

## Questions

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

## Managing Your Account

1. Click the profile icon or open the profile/settings link.
2. Select `Edit Profile`.

### Updating Your Name

1. Edit your first name or last name.
2. Click `Update`.

### Changing Your Password

!!! warning "Testing warning"
    If you change a shared test account password, change it back before finishing testing.

1. Enter a new password.
2. Confirm it meets the password requirements.
3. Click `Update`.

