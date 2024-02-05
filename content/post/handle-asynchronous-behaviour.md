---
title: 'Handle asynchronous behavior in the template Vue Js'
description: 'User
Uncaught (in promise) TypeError: $setup.account is undefined'

category: Vue.js
date: 07 February 2024
img: 
---
When dealing with asynchronous operations, it's a good practice to add conditional rendering in your template to handle cases where the data is not yet available.

```html
<template>
  <div class="about">
    <h1>This is protected content</h1>
    <p v-if="account && account.data && account.data.session && account.data.session.user" id="account">
      Account: {{ account.data.session.user.email }}
    </p>
    <p v-else>Loading...</p>
  </div>
</template>
```
This ensures that you're not trying to access properties on `account` before it has been populated.

---

Why conditional rendering is often used when dealing with asynchronous operations in Vue.js?

When you make an asynchronous call (e.g., fetching data from an API or getting a user session), the data may not be available immediately. Vue.js components render synchronously, meaning that they don't wait for asynchronous operations to complete before rendering.

In your case, when you're trying to display `account.data.session.user.email` directly in the template, there is a chance that `account` is not yet populated with the user session information. If you attempt to access properties on `account` before it's ready, you may encounter errors like "undefined is not a property" or similar.

By using conditional rendering, you can handle scenarios where the data is not yet available. For example:

```html
<p v-if="account && account.data && account.data.session && account.data.session.user" id="account">
  Account: {{ account.data.session.user.email }}
</p>
<p v-else>Loading...</p>
```

Here's what each condition checks:

*   `account`: Checks if `account` itself is defined.
*   `account.data`: Checks if `data` property exists on `account`.
*   `account.data.session`: Checks if `session` property exists on `account.data`.
*   `account.data.session.user`: Checks if `user` property exists on `account.data.session`

If any of these conditions fail, the template renders the "Loading..." message, indicating that the data is still being fetched. Once the data is available, Vue.js will automatically re-render the component, and the correct information will be displayed.

This approach helps to prevent potential errors and ensures a smoother user experience by providing feedback during the asynchronous loading process. It's a common pattern in Vue.js applications to handle asynchronous operations gracefully in the template.