# Web Application Security

Web application security is the practice of protecting websites and online services from security threats that exploit vulnerabilities in the application's code, infrastructure, or user interactions. The primary goal is to safeguard user data, ensure the integrity of services, and prevent unauthorized access.

## Key Concepts in Web Application Security:-

1. **OWASP Top 10** ([owasp.org](https://owasp.org/))
   - The OWASP Top 10 is a list of the most critical security risks facing web applications. These include threats like SQL Injection, Cross-Site Scripting (XSS), and Insecure Direct Object References (IDOR).

2. **Input Validation**
   - User input should be properly validated and sanitized to prevent malicious injections such as SQL Injection and Cross-Site Scripting (XSS).
   - Use server-side validation in addition to client-side validation.

3. **Content Security Policy (CSP)**
   - CSP is a browser security feature that helps prevent XSS attacks by restricting the sources from which scripts can be loaded.
   - Proper CSP configurations mitigate risks associated with loading untrusted scripts.

4. **Cross-Origin Resource Sharing (CORS)**
   - CORS policies define how resources on a web server can be requested from another domain.
   - Misconfigured CORS settings can expose sensitive data to malicious sites.

5. **Secure Communication with HTTPS**
   - HTTPS encrypts data in transit, preventing eavesdropping and man-in-the-middle attacks.
   - Use strong TLS configurations and avoid outdated protocols (e.g., TLS 1.0, 1.1).

6. **Session Management**
   - Use secure cookies with HttpOnly and Secure flags.
   - Implement proper session expiration and regeneration mechanisms.
   - Prevent session fixation and hijacking.

7. **Security Headers**
   - Implement HTTP security headers such as:
     - `Strict-Transport-Security (HSTS)`: Enforces HTTPS usage.
     - `X-Frame-Options`: Prevents clickjacking attacks.
     - `X-XSS-Protection`: Provides basic XSS filtering.
     - `X-Content-Type-Options`: Prevents MIME-type sniffing.

8. **Error Handling & Logging**
   - Avoid displaying detailed error messages to users, as they may expose sensitive information.
   - Implement centralized logging and monitoring for suspicious activities.

## OWASP  Top Ten

The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.
They includes:-

1. `A01:2021-Broken Access Control` moves up from the fifth position; 94% of applications were tested for some form of broken access control. The 34 Common Weakness Enumerations (CWEs) mapped to Broken Access Control had more occurrences in applications than any other category.
2. `A02:2021-Cryptographic Failures` shifts up one position to #2, previously known as Sensitive Data Exposure, which was broad symptom rather than a root cause. The renewed focus here is on failures related to cryptography which often leads to sensitive data exposure or system compromise.
3. `A03:2021-Injection` slides down to the third position. 94% of the applications were tested for some form of injection, and the 33 CWEs mapped into this category have the second most occurrences in applications. Cross-site Scripting is now part of this category in this edition.
4. `A04:2021-Insecure Design` is a new category for 2021, with a focus on risks related to design flaws. If we genuinely want to “move left” as an industry, it calls for more use of threat modeling, secure design patterns and principles, and reference architectures.
5. `A05:2021-Security Misconfiguration` moves up from #6 in the previous edition; 90% of applications were tested for some form of misconfiguration. With more shifts into highly configurable software, it’s not surprising to see this category move up. The former category for XML External Entities (XXE) is now part of this category.
6. `A06:2021-Vulnerable and Outdated Components` was previously titled Using Components with Known Vulnerabilities and is #2 in the Top 10 community survey, but also had enough data to make the Top 10 via data analysis. This category moves up from #9 in 2017 and is a known issue that we struggle to test and assess risk. It is the only category not to have any Common Vulnerability and Exposures (CVEs) mapped to the included CWEs, so a default exploit and impact weights of 5.0 are factored into their scores.
7. `A07:2021-Identification and Authentication Failures` was previously Broken Authentication and is sliding down from the second position, and now includes CWEs that are more related to identification failures. This category is still an integral part of the Top 10, but the increased availability of standardized frameworks seems to be helping.
8. `A08:2021-Software and Data Integrity Failures` is a new category for 2021, focusing on making assumptions related to software updates, critical data, and CI/CD pipelines without verifying integrity. One of the highest weighted impacts from Common Vulnerability and Exposures/Common Vulnerability Scoring System (CVE/CVSS) data mapped to the 10 CWEs in this category. Insecure Deserialization from 2017 is now a part of this larger category.
9. `A09:2021-Security Logging and Monitoring Failures` was previously Insufficient Logging & Monitoring and is added from the industry survey (#3), moving up from #10 previously. This category is expanded to include more types of failures, is challenging to test for, and isn’t well represented in the CVE/CVSS data. However, failures in this category can directly impact visibility, incident alerting, and forensics.
10. `A10:2021-Server-Side Request Forgery` is added from the Top 10 community survey (#1). The data shows a relatively low incidence rate with above average testing coverage, along with above-average ratings for Exploit and Impact potential. This category represents the scenario where the security community members are telling us this is important, even though it’s not illustrated in the data at this time.
