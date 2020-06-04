---
title: "Architecture/Feature Review Questions"
---

When faced with a new challenge, I tend to jump directly into vim and hack away. That's great for personal projects, but for something more long term, I use this checklist to make sure I think through all aspects of a problem space.

This is a starting list, and it is by no means conclusive but rather a starting point for discussion with developers, PMs, designers, etc.

---

## Requirements

-   [ ] What is the high-level feature?
-   [ ] Who are the users?
-   [ ] What are the high level flows?
-   [ ] How many users/how often are they hitting the feature/system?

## External Considerations

-   [ ] Third Party Dependencies
-   [ ] Security/Privacy/Legal Requirements
-   [ ] Reporting/Metrics/Monitoring

## System Design

-   [ ] What are the dependencies to this feature?

    -   [ ] APIs
    -   [ ] Databases
    -   [ ] Frontends
    -   [ ] Cloud Services

    -   For each dependency:
        -   What happens if the application fails
        -   What are your isolation boundaries?
        -   Is there a degraded experience possible?

-   [ ] Ops Questions

    -   [ ] What's the monitoring approach?
        -   [ ] Backup/restore strategy?
        -   [ ] Downtime requirements

-   [ ] Data Questions

    -   [ ] Storage/Retrieval requirements
    -   [ ] Performance Requirements (data structure/indexes)

-   [ ] Frontend Questions
    -   [ ] Error/Loading States
    -   [ ] Responsiveness
    -   [ ] Permissions/Visibility

## Implementation

-   [ ] Does your team have all the knowledge it needs to accomplish the task?
-   [ ] Who are the right resources to reach out to for questions/concerns?

## Delivery

-   [ ] How is this tested?
-   [ ] What's the rollout like (feature flags? beta users?)
-   [ ] What is the support story? (Support tools? Documentation?)
-   [ ] What is the monitoring story? (Production Monitors, Alerts, Etc.)
