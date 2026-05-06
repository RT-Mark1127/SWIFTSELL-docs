---
sidebar_position: 12
title: SMTP Settings
---

# SMTP Settings

**SMTP Settings** configure the outbound email server SWIFTSELL uses to send system emails. This section is built on top of the App Configuration system using the `PLATFORM_EMAIL` configuration type.

:::note
SMTP Settings require **Super Admin** access. Changes may take up to 5 minutes to take effect.
:::

## Accessing SMTP Settings

Go to **Administration → SMTP Settings**.

:::caution[TODO]

Add screenshot of the SMTP Settings page

:::

## Configuration

The SMTP Settings page includes a **platform selector** at the top. Select the platform you want to configure email settings for, then fill in the fields below.

:::caution[TODO]

Document the specific SMTP fields shown by the AppConfigurator for the PLATFORM_EMAIL type or by inspecting the configuration type definition

:::

## When SMTP Is Used

SWIFTSELL sends emails for:

- Password reset requests

:::caution[TODO]

Confirm all email triggers — order confirmations, quote notifications, user invites, etc.

:::

## Related

- [App Configurations](./app-configuration/configurations)
- [App Configuration Types](./app-configuration/configuration-types)
