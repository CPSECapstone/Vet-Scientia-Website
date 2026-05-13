# Introduction

This guide explains how students, teachers, university admins, clinic admins, and super admins can create accounts, sign in, and use the core features of the Vet Scientia web portal and simulator.

# Web Portal

The Vet Scientia web dashboard can be accessed at [https://gray-bush-0c1bf981e.6.azurestaticapps.net](https://gray-bush-0c1bf981e.6.azurestaticapps.net){ target="_blank" rel="noopener" }.

# Account Management

## Student Sign-Up

!!! tip
    Use the demo account first if you want to explore the interface and simulator without creating a new account.

1. Navigate to the [sign-up page](https://gray-bush-0c1bf981e.6.azurestaticapps.net/signup){ target="_blank" rel="noopener" }.
2. Enter your first name, last name, email address, password, and access code.
3. Click `Sign Up`.
4. You will be directed to an email verification screen.
5. Open the inbox for the email address you provided.
6. Copy the 6-digit email verification code.

!!! note
    If working with a local development environment, the code is available in the backend console.

7. Enter the verification code.
8. Click `Verify` to complete account creation.

!!! success "Expected result"
    After verification, your account is created and you can sign in.

## Login

!!! info "Testing accounts"
    Use the following accounts when available:

    - Super Admin: `superadmin@vetscientia.com` / `VetScientia2024!`
    - University Admin: `jmustang@calpoly.edu` / `password123`
    - Teacher: `demoteacher@calpoly.edu` / `testpassword`
    - Student: `demostudent@calpoly.edu` / `testpassword`

1. Navigate to the [sign-in page](https://gray-bush-0c1bf981e.6.azurestaticapps.net/signin){ target="_blank" rel="noopener" }.
2. Enter your email and password.
3. Click `Log In`.

After a successful login, the application sends you to the correct dashboard for your role.

- Students go to `/student-dashboard`.
- Teachers go to `/teacher-dashboard`.
- University admins go to `/uni-dashboard`.
- Clinic admins go to `/clinic-dashboard`.
- Super admins go to `/super-admin`.

## Resetting Your Password

!!! note
    If you no longer have access to your account email, contact your administrator for account recovery.

1. Go to the [sign-in page](https://gray-bush-0c1bf981e.6.azurestaticapps.net/signin){ target="_blank" rel="noopener" }.
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

## Logout

1. Open the dashboard sidebar.
2. Click `Logout`.
3. Confirm you are returned to the sign-in page.
