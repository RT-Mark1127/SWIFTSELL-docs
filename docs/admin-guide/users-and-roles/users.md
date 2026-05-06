---
sidebar_position: 1
title: Users
---

# Users

The **Users** section lets administrators view and manage all user accounts on the platform.

## Accessing Users

Go to **Administration → Users**.

:::caution[TODO]
Add screenshot of the Users list
:::

## User List

Users are displayed in a table sorted by most recent activity. Each row shows:

| Column         | Description                                                             |
| -------------- | ----------------------------------------------------------------------- |
| **Email**      | The user's email address (also their username)                          |
| **Last Name**  | The user's last name                                                    |
| **Online**     | A status indicator — green if the user was active in the last 5 minutes |
| **Role Level** | The role assigned to the user                                           |
| **Platform**   | _(Super Admin only)_ The platform the user belongs to                   |

:::info
System Admins see only users on their own platform. Super Admins see all users across all platforms.
:::

## Creating a User

1. Click **Create User**.
2. Fill in the user form:

| Field                | Notes                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------- |
| **Email Address**    | Required. Used as the username. Must be a valid email. Cannot be changed after creation.                |
| **First Name**       | Optional                                                                                                |
| **Last Name**        | Optional                                                                                                |
| **User Role**        | Select from available roles. You can only assign roles up to your own role level.                       |
| **Checkout Type**    | **Place Order** — submits directly to the ERP; **Self Checkout (Stripe)** — user pays via Stripe        |
| **Platform**         | _(Super Admin only)_ The platform to assign this user to                                                |
| **Password**         | Required on create. Must contain 8+ characters with uppercase, lowercase, number, and special character |
| **Confirm Password** | Must match Password                                                                                     |

3. Click **Save**. The user is created immediately and can log in with the credentials you set.

## Editing a User

Click any user row to open their profile. All fields except **Email Address** can be updated.

To change the password, click **Update Password** to reveal the password fields.

## Deleting a User

:::caution[TODO]
Confirm the current delete flow
:::

## MFA Settings

A user can enable **Multi-Factor Authentication** from their own profile page. If the platform has MFA required, the option is locked on and cannot be disabled by the user.

## Demo Accounts

If a user has a demo account expiration date set, Super Admins will see a **DEMO ACCOUNT** panel at the top of their profile with:

- The demo source
- An expiration date picker

To deactivate a demo account immediately, set the expiration date to a date in the past.

## Customer Records and Users

Each user is linked to a **Customer** record. If no customer exists for a user when they first log in, the system automatically creates one (along with a default Contact and Address). This auto-created customer will appear in the Customers list.

If you want a user to be associated with a specific customer (for example, a real company account with an ERP ID), assign a group to them that has that customer set as its Default Customer. See [Groups](./groups) for how that restriction works.

## Related

- [Roles](./roles)
- [Groups](./groups)
- [Customers](../customers/managing-customers)
