---
title: Web Development Security & Risks and How to prevent them
description: 'What is XSS?CSRF?CSP? and How to Validate & Sanitize User Input?'

category: webdev, security
date: 07 August 2023
img: https://nuxtjs.org/_nuxt/image/b9ae28.jpeg
---

## What is XSS?CSRF?CSP? and How to Validate & Sanitize User Input?

1. **XSS (Cross-Site Scripting):**
   Cross-Site Scripting is a type of security vulnerability that occurs when an attacker injects malicious scripts (usually JavaScript) into web pages viewed by other users. This is often done through unvalidated or unsanitized user inputs, such as input fields or URLs. When other users visit the affected web page, their browsers execute the injected script, potentially allowing the attacker to steal sensitive data, hijack user sessions, or perform other malicious actions.

   **Prevention:** To prevent XSS attacks, developers should validate and sanitize user inputs, encode output data to HTML entities, and use security mechanisms such as Content Security Policy (CSP).

2. **CSRF (Cross-Site Request Forgery):**
   Cross-Site Request Forgery is an attack in which an attacker tricks a user into unknowingly performing actions on a different website where the user is authenticated. For example, an attacker might craft a malicious link or form that, when clicked or submitted, makes the user's browser send requests to a target website without the user's consent or knowledge.

   **Prevention:** To prevent CSRF attacks, developers should use anti-CSRF tokens, which are unique tokens embedded in forms or requests. These tokens are checked on the server to ensure that the request is legitimate and initiated by the user.

3. **CSP (Content Security Policy):**
   Content Security Policy is a security feature implemented by web developers to mitigate the risks of XSS attacks. CSP allows website owners to define which sources of content (such as scripts, styles, and images) are allowed to be loaded and executed in a web page. This helps prevent the execution of malicious scripts injected through XSS vulnerabilities.

   **Configuration:** Developers can configure CSP headers in their web server or web application to specify which domains are trusted sources for content and scripts. For example, you can set a policy that only allows scripts to be loaded from a specific domain.

4. **How to Validate & Sanitize User Input:**
   Validating and sanitizing user input is essential to prevent various security vulnerabilities, including XSS and SQL injection. Here are some general guidelines:

   - **Input Validation:**
     - Validate input on both the client and server sides.
     - Define clear data validation rules based on expected input types (e.g., email, phone number, numeric values).
     - Reject or sanitize input that doesn't adhere to the validation rules.

   - **Input Sanitization:**
     - Use secure libraries or functions for input sanitization.
     - Sanitize input to remove or escape characters that could be used for malicious purposes (e.g., HTML, SQL, or JavaScript injection).
     - Be cautious with user-generated content; allow only safe HTML tags and attributes if necessary.

   - **Use Security Headers:** Implement security headers like CSP and others, as appropriate, to provide an additional layer of security for your web application.

   - **Security Libraries:** Utilize security libraries or frameworks in your programming language that can help automate input validation and sanitization.

   By following these best practices, you can reduce the risk of security vulnerabilities related to user input and create more secure web applications.

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
