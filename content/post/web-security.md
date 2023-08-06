---
title: Web Development Security & Risks and How to prevent them
description: 'What is XSS?CSRF?CSP? and How to Validate & Sanitize User Input?'

category: webdev, security
date: 07 August 2023
img: https://nuxtjs.org/_nuxt/image/b9ae28.jpeg
---


## What's the difference between escaping, filtering, validating and sanitizing?

**Escaping**. Converting a control character to its escape sequence. For example, a < symbol may be converted to `&lt;` so that the characters following the < are not interpreted as an XML tag instead of XML content.

**Filtering**. Like escaping, but instead of replacing the control character, it is simply removed.

**Validated**. Comparison of an input against a white list or regular expression to detect control characters or other character sequences that would trigger an unauthorized behavior. For example, an account number entered by a user might be validated against a list of account numbers known to be tied to the user.

**Sanitized**. A combination of escaping, filtering, and validation that ensures that an input to a system function does not trigger an unexpected and unauthorized behavior.

## Reference

- <https://jackyef.com/posts/web-security-implications-of-3rd-party-resources>
- <https://stackdiary.com/javascript-security/>
- <https://web.dev/csp/>
- <https://portswigger.net/web-security/cross-site-scripting/preventing#validate-input-on-arrival>
- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy>
- <https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html>
- <https://security.stackexchange.com/questions/143923/whats-the-difference-between-escaping-filtering-validating-and-sanitizing>
