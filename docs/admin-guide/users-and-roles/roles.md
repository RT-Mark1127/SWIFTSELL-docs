---
sidebar_position: 2
title: Role Management
---

# Role Management

**Role Management** lets Super Admins create and configure the named roles available on the platform. Roles are assigned to users and determine their access level throughout SWIFTSELL.

## Accessing Role Management

Go to **Administration → Role Management**. _(Requires Super Admin or higher.)_

:::caution[TODO]
Add screenshot of the Roles list
:::

## How Roles Work

A role has a **name**, a **description**, and a **Role Access Level**. The access level maps to one of the system's fixed permission tiers — it's the access level that actually controls what the user can do, not the name.

| Access Level | Permission Tier |
| ------------ | --------------- |
| 0            | Public User     |
| 1            | Registered User |
| 5            | System Admin    |
| 9            | Super Admin     |

:::note
Owner Super Admin (level 20) cannot be created through the Role Management UI — it is a system-level designation.
:::

## Creating a Role

1. Click **Create Role**.
2. A modal form opens. Fill in:
   - **Role Name** — the label users and admins will see (e.g., "Sales Rep", "Sales Manager")
   - **Description** — a brief note about what this role is for
   - **Role Access Level** — select the permission tier this role grants
3. Click **Save**.

## Editing a Role

Click any role card to open the edit form in a modal. Update the fields and save.

## Deleting a Role

:::danger
Deleting a role that is assigned to active users will break the application for those users. Before deleting a role, ensure no users are currently assigned to it.
:::

## Assigning a Role to a User

Roles are assigned on the [User](./users) form. The **User Role** dropdown shows all roles whose access level is less than or equal to your own.
