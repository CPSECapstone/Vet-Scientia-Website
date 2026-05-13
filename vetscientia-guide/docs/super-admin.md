# Super Admin

The super admin dashboard allows super admins to create and manage organizations, create organization admins, generate teacher access codes, and manage simulation versions.

## Dashboard

The dashboard shows all currently enrolled organizations. Each organization card displays:

- Name: the organization name.
- Organization Type: either `University` or `Clinic`.
- Number of Seats: the number of seats purchased by the organization.

## Adding New Organizations

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

## Adding Organization Admins

1. Click `Create Organization Admin`.
2. Enter the admin's first name.
3. Enter the admin's last name.
4. Enter the admin's email.
5. Select the admin's organization.
6. Select the admin type: university admin or clinic admin.
7. Send the invitation email.

The organization admin receives an email with account setup information.

!!! note
    If working in the development environment, the login credentials are also printed to the console backend.

## Editing Organizations

1. Click `Details` on the organization you want to edit.
2. Click `Edit` for the editable detail.
3. Update the value.
4. Click `Save`.
5. Close the modal by clicking outside it or using the close action.

## Viewing Organization Contracts

1. Click `Details` on the organization.
2. Click `Download Contract` to open or download the contract PDF.

## Adding Instructors To A University

1. Click `Generate Teacher Codes`.
2. Select the organization.
3. Select the role.
4. Enter the number of codes to generate.
5. Click the generate action.
6. Distribute the generated codes to teachers.

Teachers use these codes during sign-up in the access code field.

!!! tip
    Click `List Unused Codes` to view previously generated codes that have not yet been used.

## Deleting Organizations

!!! danger
    Deleting an organization is permanent. All information linked to that organization may be removed, and there is no user-facing way to recover it.

!!! warning "Testing warning"
    Only delete organizations that you created for testing. Do not delete provided seed organizations.

1. Click `Details` on the organization you want to remove.
2. Click `Delete Organization`.
3. Confirm the deletion.

## Game Versions

The `Game Versions` page allows a super admin to manage deployed simulation builds. It shows the version history for available simulation versions.

Each row includes:

- Version: the unique identifier for the simulation build.
- Build Time: when the version was uploaded.
- Change Log: a description of changes in that version.
- Restore: restores the deployed simulation to that version.
- Delete: removes the version from the visible list.

!!! note
    The latest version is treated as the current deployed version.

### Uploading A New Simulation Version

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

### Restoring A Previous Simulation Version

1. Open `Game Versions`.
2. Find the version you want to restore.
3. Click the restore icon for that row.
4. Wait for the restore process to finish.

!!! warning
    Restoring can take several seconds to a few minutes. Do not close the window or modal while the loading indicator is active.

