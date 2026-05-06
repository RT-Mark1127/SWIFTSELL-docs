---
sidebar_position: 1
title: Customers
---

# Customers

The **Customers** section manages the customer accounts that can be associated with quotes and orders. Customers can be created manually here or may be created automatically when a quote is submitted.

:::info
Only customers with an **ERP ID** set are available in the customer auto-fill dropdown on quote pages.
:::

## Accessing Customers

Go to **Administration → Customers**.

:::caution[TODO]

Add screenshot of the Customers list

:::

## Customer List

Each row shows the customer's ERP ID, company name, billing address, and platform. Use the search and sort controls to find a specific customer.

- Click the **edit (pencil) icon** to open the customer form.
- Click the **delete (trash) icon** to delete the customer immediately (no confirmation prompt — use with care).

## Creating a Customer

1. Click **Create Customer**.
2. Fill in the customer form:

### General

| Field | Notes |
|-------|-------|
| **Assign to Platform** | Required. The platform this customer belongs to. |
| **Name** | The company name |
| **ERP ID** | The customer's ID in your ERP system. Required for the customer to appear in quote auto-fill. |
| **Description** | Optional, up to 500 characters |

### Contact Information

| Field | Notes |
|-------|-------|
| **First Name** | Primary contact first name |
| **Last Name** | Primary contact last name |
| **Email** | Primary contact email |
| **Phone** | Primary contact phone number |

### Billing Address

| Field | Notes |
|-------|-------|
| **Address Line 1** | Max 50 characters |
| **Address Line 2** | Max 50 characters |
| **City** | Max 30 characters |
| **State** | US state select |
| **Zip** | Max 16 characters |
| **Shipping Address is same as Billing?** | When checked, no separate shipping addresses can be added and billing is used for shipping on quotes |

3. Click **Save**. After saving you can add shipping addresses (if billing and shipping are not the same).

## Shipping Addresses

If **Shipping Address is same as Billing?** is unchecked, a **Assign Shipping Addresses** table appears below the form after the customer is saved. From here you can:

- Click **Create Address** to add a new shipping address via a modal form.
- Click the **edit** icon on any address to modify it.
- Click the **delete** icon to remove it.

These shipping addresses become available in the shipping address dropdown on the Customer tab of any quote for this customer.

## Editing a Customer

Click the edit icon on any customer row to open the customer form.

## Deleting a Customer

Click the delete icon on any customer row. The deletion is immediate.

## Auto-Created Customers

When a user logs in for the first time without an existing customer record, the system automatically creates a Customer (along with a Contact and a default Address) for that user. These auto-created customers will appear in this list. They typically have no ERP ID and will not appear in the quote customer auto-fill dropdown until an ERP ID is assigned.

## How Customers Relate to Groups

A customer record has a **Group** field (`groupId`) that links it back to a group. This is set when a group's **Default Customer** is configured — that customer is the one restricted to users in that group. If a group has a Default Customer assigned, users in that group will see **only** that customer in the customer selection on quotes.

To change which customer is restricted to a group, update the **Default Customer** field on the group record — see [Groups](../users-and-roles/groups).

## Related

- [Addresses](./addresses)
- [Groups](../users-and-roles/groups) — groups restrict customer access via their Default Customer setting
