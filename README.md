# ArchitectPoc

This is a showcase project for a ddd macro architecture implemented with nx and angular.

We have prepared three different approaches, each with different levels of abstraction.
The level of abstraction is the main driver for _maintainability_, _DX_ and _code complexity_.

## Abstract Approach

### Key Advantages

Focus on maximum inversion of control, level of abstraction and constraints.

### Folder Structure and Constraints

```
dashboards/
    *domain/
        dashboard.model.ts
    *data/
      resource/
        dashboard.resource.ts <-- domain // does actual http calls
      store/
        dashboard.store.ts <-- domain // implements @ddd/dashboard/use-cases `DashboardFeatureState`
        dashboard-shared.store.ts <-- domain // implements @ddd/dashboard/data `DashboardSharedFeatureState`
      dashboard-shared.state.ts // `DashboardSharedFeatureState` abstract class defining shared feature-state
      tokens.ts // define tokens for: `DashboardFeatureState`, `DashboardSharedFeatureState`, `DashboardAdapter`
      index.ts
    *use-cases/
      ports/
        data/
          dashboard-feature.state.ts // `DashboardFeatureState`
        ui/
          dashboard.adapter.ts // `DashboardAdapter`
      dashboard-use-case.ts <-- @ddd/settings/public/state
        // implements @ddd/dashboard/use-cases `DashboardAdapter`
    public/
        *state
          public-dashboard-state.module.ts // `forRoot` defining @ddd/dashboard/data tokens.ts
          index.ts  // re-export domain, shared state

       *feature-list/
           list/
               feature-list.container.component.ts <-- @ddd/dashboard/uses-cases (`DashboardAdapter`)
           feature-list-module.ts

       *feature-show/
          show/
            feature-show.component.ts <-- @ddd/dashboard/uses-cases (`DashboardAdapter`)
          feature-show-module.ts

       *ui/
        components/
          ui-dashboard-list.component.ts (display only)
        patterns/
        tokens/
```

| Metric           | ⭐ Rating |
|------------------|----------|
| maintainability  | ⭐        |
| DX               | ⭐        |
| code complexity  | ⭐        |

## Shared Adapter Approach

### Key Advantages

Describe key advantages

* removed abstraction layer for `@ddd/dashboard/use-cases/DashboardAdapter`
* removed abstraction layer for `@ddd/dashboard/use-cases/DashboardFeatureState`
* moved `DashboardFeatureState` to `@ddd/dashboard/data`
* introduced directly usable `Dashboard*Adapter` services for usage in `features`

### Folder Structure and Constraints

```
dashboards/
    *domain/
        dashboard.model.ts
    *data/
      resource/
        dashboard.resource.ts <-- domain // does actual http calls
      store/
        dashboard.store.ts <-- domain // implements @ddd/dashboard/data `DashboardFeatureState`
        dashboard-shared.store.ts <-- domain // implements @ddd/dashboard/data `DashboardSharedFeatureState`
      dashboard-shared.state.ts // `DashboardSharedFeatureState` abstract class defining shared feature-state
      dashboard-feature.state.ts // `DashboardFeatureState` abstract class defining feature-state
      tokens.ts // define tokens for: `DashboardFeatureState`, `DashboardSharedFeatureState`
      index.ts
    *use-cases/
      dashboard-list.adapter.ts <-- @ddd/dashboard/data
          // adapter service for dashboard-list.component.ts
      dashboard-show.adapter.ts <-- @ddd/dashboard/data
          // adapter service for dashboard-show.component.ts
    public/
        *state
          public-dashboard-state.module.ts // `forRoot` defining @ddd/dashboard/data tokens.ts
          index.ts  // re-export domain, shared state

       *feature-list/
           list/
               feature-list.container.component.ts <-- @ddd/dashboard/uses-cases (`DashboardListAdapter`)
           feature-list-module.ts

       *feature-show/
          show/
            feature-show.component.ts <-- @ddd/dashboard/uses-cases (`DashboardShowAdapter`)
          feature-show-module.ts

       *ui/
        components/
          ui-dashboard-list.component.ts (display only)
        patterns/
        tokens/
```

| Metric           | ⭐ Rating |
|------------------|----------|
| maintainability  | ⭐        |
| DX               | ⭐        |
| code complexity  | ⭐        |

## Simple Approach

### Key Advantages

Describe key advantages

We focus on maximum developer speed by removing all abstraction layers.

* removed abstraction layer for `DashboardFeatureState`
* removed abstraction layer for `DashboardSharedFeatureState`
* removed `use-cases` library
* removed `tokens` since not needed anylonger
* moved `Adapter` logic directly to `Components`

### Folder Structure and Constraints

```
dashboards/
    *domain/
        dashboard.model.ts
    *data/
      resource/
        dashboard.resource.ts <-- domain // does actual http calls
      store/
        dashboard.store.ts <-- domain // `DashboardFeatureState`
        dashboard-shared.store.ts <-- domain // `DashboardSharedFeatureState`
      index.ts
    public/
        *state
          public-dashboard-state.module.ts // `forRoot` defining @ddd/dashboard/data tokens.ts
          index.ts  // re-export domain, shared state

       *feature-list/
           list/
               feature-list.container.component.ts
               feature-list.adapter.ts <-- @ddd/dashboard/data // local provided `DashboardListAdapter`
           feature-list-module.ts

       *feature-show/
          show/
            feature-show.component.ts
            feature-show.adapter.ts <-- @ddd/dashboard/data // local provided `DashboardShowAdapter`
          feature-show-module.ts

       *ui/
        components/
          ui-dashboard-list.component.ts (display only)
        patterns/
        tokens/
```

| Metric           | ⭐ Rating |
|------------------|----------|
| maintainability  | ⭐        |
| DX               | ⭐        |
| code complexity  | ⭐        |
