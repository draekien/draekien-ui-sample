# Draekien-UI Sample Website

- [Information](#information)
- [Setup](#setup)

## Information

This repository is intended to serve as an example repository for using [Draekien-UI](https://www.github.com/draekien/draekien-ui) in a website.

Checkout `src/index.tsx` and `src/App.tsx` to see the code in action.

![example website](screenshots/example_website.png)

## Setup

Checkout `src/index.tsx` for your basic setup with toasts enabled. To disable toasts, use

```jsx
<DraekienUi useToastContext={false}>
  <App />
</DraekienUi>
```
