import smtplib
from email.mime.text import MIMEText

sender_email = 'your_email@example.com'
receiver_email = 'recipient@example.com'
smtp_server = 'smtp.example.com'
smtp_port = 587
smtp_username = 'your_email@example.com'
smtp_password = 'your_email_password'

message = MIMEText('Hello, this is an automated email!')
message['Subject'] = 'Automated Email'
message['From'] = sender_email
message['To'] = receiver_email

try:
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.sendmail(sender_email, [receiver_email], message.as_string())
    print("Email sent successfully!")
except Exception as e:
    print(f"Error sending email: {e}")
