# Security

Best security practices for applications,servers and others.This includes:-

1. **Web Application Security**:-
   - Follow **OWASP Top 10** guidelines ([owasp.org](https://owasp.org/)).
   - Implement **input validation** to prevent SQL injection and XSS attacks.
   - Use **Content Security Policy (CSP)** to protect against cross-site scripting.
   - Enable **CORS** properly to restrict API access.
   - Always use **HTTPS** with strong TLS configurations.

2. **Authentication & Authorization**:-
   - Use **JWT (JSON Web Token)** for authentication in REST APIs.
   - Implement **OAuth2/OpenID Connect** for secure user authentication.
   - Enforce **multi-factor authentication (MFA)** for user accounts.
   - Use **role-based access control (RBAC)** to manage permissions.
   - Store passwords securely using **BCrypt, Argon2, or PBKDF2**.

3. **Server Security**:-
   - Keep servers and software **updated** with security patches.
   - Use **firewalls** to restrict inbound and outbound traffic.
   - Disable **unused ports and services** to minimize attack surfaces.
   - Implement **fail2ban** or similar tools to block brute-force attacks.
   - Enforce **least privilege access** for users and applications.

4. **Cloud Security (AWS, Azure, GCP)**:-
   - Use **IAM roles and policies** instead of hardcoded credentials.
   - Enable **VPC, security groups, and network ACLs** for isolation.
   - Encrypt data at **rest and in transit**.
   - Monitor cloud services with **CloudTrail, GuardDuty (AWS)**, etc.
   - Implement **backup and disaster recovery plans**.

5. **API Security**:-
   - Use **API Gateway** for managing and securing API traffic.
   - Implement **rate limiting** to prevent abuse.
   - Validate and sanitize **API inputs**.
   - Use **HMAC signatures** for verifying request authenticity.
   - Implement **zero-trust architecture** where applicable.

6. **Container & Kubernetes Security**:-
   - Use **official and trusted container images**.
   - Run containers as **non-root users**.
   - Enable **network policies** in Kubernetes.
   - Scan container images for **vulnerabilities**.
   - Use **role-based access control (RBAC)** in Kubernetes.

7. **Logging & Monitoring**
   - Implement **centralized logging** with ELK, Graylog, or CloudWatch.
   - Set up **intrusion detection systems (IDS)** like Snort or Suricata.
   - Monitor **application logs** for security anomalies.
   - Use **SIEM (Security Information and Event Management)** tools.

8. **Database Security**
   - Use **least privilege principles** for database users.
   - Encrypt **sensitive data** at rest.
   - Regularly perform **database audits**.
   - Enable **database logging** for tracking unauthorized access.

9. **Secure Development Practices**
   - Use **static and dynamic code analysis** tools.
   - Perform **regular security code reviews**.
   - Follow **secure coding guidelines** for each language/framework.
   - Automate security testing in **CI/CD pipelines**.

10. **Backup & Disaster Recovery**
   - Implement **regular backups** and test them.
   - Use **offsite or cloud backups** for redundancy.
   - Have a **disaster recovery plan** in place.
   - Monitor **backup integrity** regularly.
