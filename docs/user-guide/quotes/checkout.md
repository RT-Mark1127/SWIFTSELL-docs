---
sidebar_position: 5
title: Checkout
---

# Checkout

When a quote is ready to submit as an order, use the **Summary** tab to review and check out.

## Before Checking Out

Ensure the following are complete:

- [ ] All line items are configured correctly (Lines tab)
- [ ] Customer information and addresses are filled in (Customer tab)
- [ ] Any required attachments have been uploaded

## The Summary Tab

Navigate to the **Summary** tab using the stage buttons at the top of the quote. The Summary provides a full read-only overview of the quote including all lines, pricing, and customer details.

:::caution[TODO]

Add screenshot of the Summary tab

:::

## Printing a Quote

From the **Summary** tab, click the **Print** button (printer icon) in the page header to generate a printable version of the quote.

## Submitting the Order

:::caution[TODO]

Document the checkout/payment flow — does it go through Stripe? Is there a PO number field? What happens after submission?

:::

After submission:

- The quote type changes from **Quote** to **Order**.
- An ERP order number is assigned (if integrated with an ERP system).
- You are redirected to the **Thank You** page confirming your order.
- The order is now visible on your [Orders](../orders) page.

## Customer PO Number

If submitting as an order, you may be asked to provide a **Customer PO number**. This is displayed on the order and in any ERP integration.

:::note
Once a quote is submitted as an order, lines and attachments become read-only. Contact your administrator if changes are needed.
:::
