---
sidebar_position: 2
title: Status Types
---

# Status Types

**Status Types** define the stages that quotes and orders can be assigned to. Each status type has a name, a display order, a minimum role level required to assign it, and a visibility flag.

## Accessing Status Types

Go to **Administration → Status Types**. _(Requires System Admin or higher.)_

:::caution[TODO]
Add screenshot of the Status Types list
:::

## Status Type List

Status types are displayed sorted by **Display Order** (ascending). Each entry shows the name and current settings.

Click any status type to open the edit form. Click **Create Status Type** to add a new one.

## Creating or Editing a Status Type

The form opens as a modal overlay with these fields:

| Field                  | Description                                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Name**               | The label shown to users (e.g., "Pending Approval", "Approved", "Shipped")                                                           |
| **Display Order**      | A number that controls the sort order in lists. Lower numbers appear first.                                                          |
| **Minimum Role Level** | The minimum role required to **assign** this status to a quote or order. Select from the available roles via the radio button cards. |
| **Is Visible**         | When unchecked, this status type is hidden from users — useful for internal-only statuses or retired stages.                         |

## Deleting a Status Type

Open the status type and click **Delete**.

:::caution
Deleting a status type that is currently assigned to quotes or orders may leave those records with a stale or missing status. Verify the status is not in use before deleting.
:::
