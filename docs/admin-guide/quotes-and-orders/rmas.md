---
sidebar_position: 3
title: RMAs
---

# RMAs (Return Merchandise Authorizations)

The **RMAs** section lets administrators create and manage return requests. An RMA can be initiated from an order or created directly from this page.

:::note
The RMA feature must be enabled via **Feature Flags** before it is available.
:::

## Accessing RMAs

Go to **Administration → RMAs**.

:::caution[TODO]
Add screenshot of the RMAs list
:::

## RMA List

RMAs are listed sorted by most recently created. Each row shows the RMA ID, the linked quote/order, and the ERP order number.

## Creating an RMA

RMAs can be created two ways:

1. **From an order** — open an order and click **Create RMA** (visible when the RMA feature flag is enabled).
2. **From this page** — click **Create RMA** and fill in the form manually.

## RMA Detail Form

An RMA consists of a header record and one or more **detail lines**. Each detail line represents a product being returned.

### Adding Detail Lines

Click **Add Line** to create a new detail line. Each line has:

| Field              | Description                                     |
| ------------------ | ----------------------------------------------- |
| **Product Number** | The part number of the item being returned      |
| **Model Number**   | The model number of the item                    |
| **Quantity**       | The quantity being returned                     |
| **Reason**         | A description of why the item is being returned |

Click the **delete** icon on any line to remove it. Lines cannot be deleted after the RMA has been submitted.

## Submitting an RMA

Once all detail lines are filled in, click **Submit RMA**. The system validates that each line with a quantity has a product number, model number, and reason set before submitting.

:::warning
Once an RMA is submitted, it is locked — detail lines can no longer be added, edited, or deleted. The **submitted** state is tracked by the `rmaCreated` flag on the RMA record.
:::
