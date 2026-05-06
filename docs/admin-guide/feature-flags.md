---
sidebar_position: 13
title: Feature Flags
---

# Feature Flags

**Feature Flags** enable or disable optional functionality. Flags are scoped to a platform and can be created, updated, or deleted by Super Admins. Changes take effect immediately.

## Accessing Feature Flags

Go to **Administration → Feature Flags**. _(Requires Super Admin or higher.)_

:::caution[TODO]

Add screenshot of the Feature Flags page

:::

## Flag List

Flags are listed with their name and current state. Each flag is associated with a platform.

## Creating a Feature Flag

Click **Create** (from the page header) to add a new flag. Provide a name and assign it to a platform.

:::caution[TODO]

Document the full fields on the create flag form

:::

## Enabling or Disabling a Flag

Each flag item has controls to update its value. Changes invalidate the cached flag state for all users on the platform and take effect on their next interaction.

## Deleting a Flag

Each flag item has a delete action. Deleting a flag disables the feature it controls for all users.

:::caution
Deleting a feature flag that is actively in use will disable that functionality for all users immediately. Verify the impact before deleting.
:::

## Known Flags

The following flags are referenced in the application code:

| Flag Name       | Effect When Enabled                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------- |
| `productGroups` | Shows Product Groups in the catalog filter and adds Product Groups to the Administration dashboard |
| `traceFiles`    | Adds Trace Files to the Administration dashboard                                                   |
| `rma`           | Enables the RMA workflow — users can create returns from orders; RMAs appear in Administration     |
| `demoAccounts`  | Enables the demo login route and demo signup page                                                  |
| `quoteRequests` | Shows the Quote Requests table on the Quote Dashboard                                              |

:::caution[TODO]

Confirm the full current list of flags and exact names as they appear in the database

:::
