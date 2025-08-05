# Server Security

Keep servers and software updated with security patches.

Use firewalls to restrict inbound and outbound traffic.

Disable unused ports and services to minimize attack surfaces.

Implement fail2ban or similar tools to block brute-force attacks.

Enforce least privilege access for users and applications.

Secure SSH access by:

Disabling root login (PermitRootLogin no in SSH config).

Using SSH key-based authentication instead of passwords.

Changing the default SSH port and using fail2ban.

Monitor logs and set up alerts for unusual activities using SIEM tools.

Implement intrusion detection/prevention systems (IDS/IPS) to detect unauthorized access attempts.

Enforce disk encryption to protect sensitive data at rest.

Conduct regular server security audits and penetration testing.
