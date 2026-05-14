---
sidebar_position: 3
title: Groups
---

# Groups

**Groups** organize users into segments that share a restricted customer and a product list. When a user belongs to a group that has a **Default Customer** set, they can only see and select that one customer on quotes — all other customers are hidden. When the group has an **Assigned Product List**, only the products on that list appear in the catalog for members of the group.

## Accessing Groups

Go to **Administration → Groups**.
:::caution[TODO]
Add screenshot of the Groups list
:::

## Creating a Group

1. Click **Create Group**.
2. Fill in the group form:

| Field                      | Notes                                                                                                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Assign to Platform**     | Required. The [platform](../platforms) (tenant instance) this group belongs to.                                                                                  |
| **Name**                   | The group's display name                                                                                                                                         |
| **Default Customer**       | Optional. When set, users in this group can **only** see this customer — all other customers are hidden from them on quotes. Only customers with an ERP ID are available here. |
| **Description**            | Optional free-text description                                                                                                                                                 |
| **Assign to Product List** | Optional. When set, only the products on this list are visible to users in this group.                                                                                         |

3. Click **Save**. After saving you are taken to the group detail page where you can assign users.

## Assigning Users to a Group

After creating a group (or opening an existing one), a **Assigned Users** table appears below the group form. This table lists all users on the platform and shows whether each user is currently in the group.

- Click the **+** (green) button on a user row to add them to the group.
- Click the **−** (red) button to remove them.

The **Assigned** indicator column turns green for users currently in the group.

:::note
A user can belong to multiple groups. Their `groupIds` field stores all group memberships.
:::

## Editing a Group

Click any group card from the Groups list to open the group form. Changes to the Default Customer or Product List take effect on the next quote created by users in that group.

## Deleting a Group

Open the group and click **Delete**. This removes the group record but does not delete the users who were members.

## How Groups Connect to the Rest of the System

```
Platform
  └── Group
        ├── Product List  →  restricts catalog to only these products for members
        ├── Default Customer  →  restricts quote customer selection to only this customer
        └── Users (many)  →  assigned via the group form
```

A user can belong to multiple groups. Internally, each user record stores all of their group memberships as a list (`groupIds`) and tracks their currently active group (`groupId`). The group assignment is managed from the group form — not from the user profile.

:::info
Customers also store a back-reference to their group (`groupId`). This means a customer record can be directly associated with a group, and that association is visible on the customer record.
:::

- **Product Lists** are managed under [Administration → Products → Product Lists](../products/product-lists).
- **Customers** are managed under [Administration → Customers](../customers/managing-customers).
- Users are assigned a group via the group form, not from the user form.
