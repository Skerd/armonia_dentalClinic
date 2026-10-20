# dentalClinic Module

Shared types, schema definitions, and Zod validators for the Arpeggio dental clinic domain. This module is the contract between **maestro** (persistence and API routes) and **sinfonia** (admin panel and the public clinic site).

Enable at runtime via `ENABLED_MODULES` (maestro) or `VITE_ENABLED_MODULES` (sinfonia). Depends on `core` and `finance`.

## Scope

Clinic settings, locations with time zone and opening hours, treatments (duration, buffers, price display), practitioners with weekly working hours per location, time off and closures, and appointments with their lifecycle (pending, confirmed, moved, completed, cancelled, no-show). The public storefront contracts cover free times, booking and the guest manage link.

## Directory layout

```
dentalClinic/
├── api/dentalClinic/private/<resource>/        # schema-defs, DTOs, validators
├── api/dentalClinic/public/clinicStorefront/   # public slots, book, manage
├── dto/                                        # *Simple snippet types
└── helpers/static/exceptions/                  # error messages in 5 locales
```
