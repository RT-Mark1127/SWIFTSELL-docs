---
sidebar_position: 6
title: Platforms
---

# Platforms

SWIFTSELL supports multi-tenant deployments through **Platforms**. Each platform is a distinct instance with its own users, products, customers, configuration, and branding. The Platforms list is a Super Admin feature; System Admins manage their own platform's settings via Platform Settings.

## Accessing Platforms

Go to **Administration → Platforms**. _(Requires Super Admin or higher.)_

:::caution[TODO]

Add screenshot of the Platforms list

:::

## Platforms List

Each row shows the Platform ID, Name, and the email addresses configured to receive order notifications.

Click any row to open that platform's settings form.

## Creating a Platform

1. Click **Create Platform**.
2. Fill in the Platform Settings form (see fields below).
3. Click **Save**.

## Platform Settings

Platform Settings are accessible to System Admins via **Administration → Platform Settings**, and to Super Admins by clicking any platform in the Platforms list.

| Field                                                 | Description                                                                                                                            |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Platform Name**                                     | The display name for this platform                                                                                                     |
| **Order Confirmation Notifications**                  | One or more email addresses that receive a notification whenever a user places an order. Use **+** / **−** to add or remove addresses. |
| **Integration Type**                                  | The ERP integration to use: **Visual**, **CSI**, **SWIFTSELL**, or none (default)                                                      |
| **CSI Order Complete Identifier**                     | _(CSI only)_ The status label in CSI that indicates a completed order (e.g., `Ordered`). Must match exactly what is configured in CSI. |
| **Require Multi-Factor Authentication for all users** | When enabled, all users on this platform must use MFA — the option cannot be turned off per-user                                       |
| **Require HTTPS**                                     | Forces the configurator to use HTTPS when making requests to configuration servers                                                     |

## Relationship to Other Admin Sections

Most admin sections (Users, Groups, Customers, Themes, RMAs, Product Lists) are scoped to a platform. When you navigate to those sections, you are always viewing or managing data for your current platform.

Super Admins can switch between platforms by updating the **Platform** field on their own user profile.
