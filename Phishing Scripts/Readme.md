**Issue #193 JS Functions for Phishing Detection**

**Phishing:**
is a form of cyber attack where an attacker attempts to deceive individuals or organizations into revealing sensitive information, such as usernames, passwords, or credit card details, by posing as a trustworthy entity in electronic communication.

**Phishing link features:**
Phishing links can have several features designed to deceive users and trick them into revealing sensitive information. Here are some common characteristics of phishing links:

> Deceptive URLs: Phishing links often use URLs that closely resemble legitimate websites or services. Attackers may use slight variations in spelling or add extra words or characters to make the link appear genuine.

> URL Shorteners: Attackers may use URL shortening services to mask the true destination of the link. This makes it harder for users to identify the actual website they will be directed to.

> Subdomains: Phishing links may utilize subdomains to give the impression of legitimacy. For example, instead of "example.com," the link may be "login.example.com." This can trick users into thinking they are accessing a legitimate subpage of a trusted domain.

**Use of JS functions:**
Taking into consideration the above mentioned features and additional features, I have designed regex functions that trace the given URL and output in binary if it has a specific feature or not. The combination of such binary outputs, if in excess, denote that the link could be a phishing one.

**Scope:**
Dataset based on such features can be used to build models that find corelation between a specific feature and the target attribute (no/ yes phishing). This corelation can then be compared to the combined outputs received by the JS functions to predict if the link is phishing or not.
