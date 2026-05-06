---
sidebar_position: 1
title: App Configurations
---

# App Configurations

**App Configurations** store platform-level settings that control application behavior. Each configuration belongs to a type and holds a value that the application reads at runtime.

## Accessing App Configurations

Go to **Administration → App Configurations**. _(Requires Super Admin or higher.)_

:::caution[TODO]

Add screenshot of the App Configurations list

:::

## Configuration List

Configurations are listed with their name, type, platform assignment, and current value. Use the search and filter controls to find a specific configuration.

## Creating a Configuration

1. Click **Create Configuration**.
2. Select a **Configuration Type** (defines the schema and purpose of the value).
3. Assign it to a platform if applicable.
4. Enter the value.
5. Click **Save**.

## Editing a Configuration

Click any configuration row to open the edit form. Update the value and click **Save**.

## Deleting a Configuration

Use the delete action on the configuration to remove it. Ensure the application does not depend on the configuration before deleting.

:::caution[TODO]

Document the specific configuration types and their effects on the application

:::

## Related

- [App Configuration Types](./configuration-types)
