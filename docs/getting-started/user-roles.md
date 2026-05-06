---
sidebar_position: 3
title: User Roles
---

# User Roles

SWIFTSELL uses role-based access control to determine what each user can see and do. Your role is assigned by an administrator.

## Role Levels

| Role                  | Description                                                                          |
| --------------------- | ------------------------------------------------------------------------------------ |
| **Public User**       | Not logged in — can browse the catalog and access auth pages                         |
| **Registered User**   | Logged-in standard user — can configure products, manage their own quotes and orders |
| **System Admin**      | Full access to the Administration section                                            |
| **Super Admin**       | System Admin access plus advanced platform configuration                             |
| **Owner Super Admin** | Full access to everything, including license management                              |

## What Each Role Can Access

### Public User

- Home and Welcome pages
- Login, Register, Forgot Password, Password Reset
- Product Catalog

### Registered User

Everything a Public User can access, plus:

- Product Configurator
- Quote Dashboard (their own quotes)
- Individual quote pages
- Their own Orders
- Profile page

### System Admin

Everything a Registered User can access, plus the Administration section:

- Users management
- Groups
- Products, Product Lists
- Customers and Addresses
- Themes
- RMAs
- ERP (CSI) Integration
- Status Types
- Platform Settings
- All Quotes and All Orders (across the platform)
- Imports
- Product Groups _(if enabled by feature flag)_

### Super Admin

Everything a System Admin can access, plus:

- Role Management
- Platforms (multi-tenant management)
- Issue Reports
- Feature Flags
- App Configuration Types
- App Configurations
- SMTP Settings
- Create Sales Demo
- Trace Files _(if enabled by feature flag)_

### Owner Super Admin

Everything a Super Admin can access, plus:

- License Management

## Checking Your Role

Your current role is visible on your **Profile** page. If you need a different level of access, contact your SWIFTSELL administrator.
