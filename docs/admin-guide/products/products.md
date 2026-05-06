---
sidebar_position: 1
title: Products
---

# Products

The **Products** section is where administrators manage the product catalog — the items that users can configure and add to quotes.

## Accessing Products

Go to **Administration → Products**.

:::caution[TODO]
Add screenshot of the Products list
:::

## Product List

Products are listed sorted by product number. Each row shows the product number, name, and status.

## Creating a Product

1. Click **Create Product**.
2. Fill in the product details:
   - Product number
   - Name and description
   - Pricing information
   - Configurator settings (server, header ID, etc.)
   - Image

3. Click **Save**.

:::caution[TODO]
Document all fields on the product form in detail
:::

## Editing a Product

Click any product row to open the product form. Make your changes and click **Save**.

## Configurable vs. Non-Configurable Products

Some products use the Infor CloudSuite configurator engine (Cloud) and some use the local configurator. The **Server** field on the product determines which engine is used.

Products can also be marked as **Quick Config** — these appear as one-click shortcuts on the Quote Dashboard.

:::caution[TODO]
Document the isQuickConfig and isNonConfigurable flags and their effects
:::

## Related

- [Product Groups](./product-groups)
- [Product Lists](./product-lists)
