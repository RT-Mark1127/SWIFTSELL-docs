---
sidebar_position: 2
title: Configurator
---

# Configurator

The Configurator walks you through selecting options for a product step by step. When you finish, the configured product is added as a line item on your quote.

## How It Works

The Configurator is divided into **pages** of options. Each page presents a set of choices — you work through them in order and move to the next page when all required selections are made.

![Configurator](/img/user-guide/configurator/configurator.png)

## Layout

| Area              | Description                                                                      |
| ----------------- | -------------------------------------------------------------------------------- |
| **Top bar**       | Shows the product name and progress through pages                                |
| **Options form**  | The current page of configuration choices                                        |
| **Product image** | Updates as you make selections to reflect your configuration (sticky on desktop) |
| **Bottom bar**    | Navigation controls, current price, and the **Finish** button                    |

## Making Selections

- Work through each option on the page. Required fields must be completed before advancing.
- The product image on the right updates to reflect your current choices.
- Informational messages may appear as you configure — read them carefully as some may indicate important constraints.

## Navigating Pages

Use the **Next** and **Back** buttons in the bottom bar to move between pages. You can also jump to a completed page directly.

## Finishing a Configuration

When all required options are selected, click **Finish** on the bottom bar. SWIFTSELL will:

1. Finalize your configuration with the pricing engine.
2. Add it as a new **line item** on your quote.
3. Return you to the [quote page](./quotes/quote-lines).

### Adding Another Line

If the product supports rapid-line entry, you will be asked:

> _Would you like to start another configuration with this same product?_

Selecting **Yes** opens the configurator again. You can optionally choose to **retain your previous selections** as a starting point.

## Reconfiguring a Line

From the quote's Lines tab, click the edit icon on any line to re-open it in the Configurator with your previous selections loaded.

## Cancelling

Click **Cancel** in the bottom bar to discard the current configuration and return to your quote without adding a line.

:::note
If you are not logged in, finishing a configuration creates a **Quote Request** instead of a standard quote. A sales representative will follow up with you.
:::
