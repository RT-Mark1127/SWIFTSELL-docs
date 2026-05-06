---
sidebar_position: 9
title: Themes
---

# Themes

**Themes** control the visual appearance of SWIFTSELL for a given platform. Each platform can have multiple themes defined — one active light theme and one active dark theme at a time.

## Accessing Themes

Go to **Administration → Themes**.

:::caution[TODO]

Add screenshot of the Themes list

:::

## Theme List

Themes are displayed as cards. The currently active light and dark themes for your platform are marked with a **sun** (☀) or **moon** (🌙) tag respectively.

From the list you can:

- Click a theme card to open and edit it
- Use the **Copy** action on a card to duplicate a theme as a starting point
- Use the **Delete** action to remove a theme

## Creating a Theme

1. Click **Create Theme**.
2. Fill in the theme form.
3. Click **Save**.

## Theme Form Fields

### General

| Field               | Description                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Platform**        | Required. The platform this theme applies to.                                                                   |
| **Name**            | A label for the theme (e.g., "Light Default", "Dark Corporate")                                                 |
| **Description**     | Optional notes                                                                                                  |
| **Dark Mode**       | When enabled, this theme is treated as a dark theme                                                             |
| **Is Active Theme** | When enabled, this becomes the active theme for the platform (light or dark depending on the Dark Mode setting) |

### Logos

| Field           | Description                        |
| --------------- | ---------------------------------- |
| **Logo**        | The logo used in light mode        |
| **Logo (Dark)** | The logo used in dark mode         |
| **Email Logo**  | The logo included in system emails |

### Colors

| Field                         | Description                                                |
| ----------------------------- | ---------------------------------------------------------- |
| **Primary**                   | Main brand color — used for primary buttons and highlights |
| **Secondary**                 | Accent color                                               |
| **Header Color**              | Background color of the top navigation bar                 |
| **Header Text Color**         | Text color of the navigation bar                           |
| **Call to Action Color**      | Color for call-to-action elements                          |
| **Background Color**          | Page background                                            |
| **Grid Row Background Color** | Row background in tables                                   |
| **Border Color**              | Color for borders and dividers                             |
| **Tertiary**                  | Third accent color                                         |
| **Gray**                      | Light gray used for secondary elements                     |
| **Gray Dark**                 | Darker gray                                                |
| **Box Shadow Color**          | Color for drop shadows                                     |
| **Text Dark**                 | Primary text color                                         |
| **Danger**                    | Color for destructive actions and error states             |
| **Success**                   | Color for success states and confirmations                 |
| **Warning**                   | Color for warning states                                   |

### Other

| Field             | Description                                          |
| ----------------- | ---------------------------------------------------- |
| **Border Radius** | Controls the roundness of UI elements                |
| **Breakpoints**   | Responsive breakpoint widths (array of pixel values) |

## Activating a Theme

To make a theme active for your platform, open it and check **Is Active Theme**, then save. This replaces the current active theme of the same type (light or dark).
