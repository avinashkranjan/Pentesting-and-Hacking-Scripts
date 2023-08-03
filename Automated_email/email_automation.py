import smtplib
from email.mime.text import MIMEText

def main():
    print("Welcome to the Email Automation Script!")
    
    # Get sender's email and password
    sender_email = input('Enter your email: ')

    # Security Warning
    print("\n** SECURITY WARNING **")
    print("Entering your email password directly in the script can be a security risk.")
    print("Consider using app passwords for Gmail or other secure authentication methods.")
    print("Do not share your scripts containing passwords with others.")
    print("Continue only if you understand and accept these risks.\n")
    
    print('If you have 2-factor authentication turned on, make sure to generate an app password. \nOtherwise, enter your password.')
    sender_password = input('Enter the Password: ')
    
    
    
    # Get receiver's emails
    receivers = input('Enter the receiver\'s emails separated by commas: ')
    receiver_emails = [x.strip() for x in receivers.split(',')]
    
    smtp_server = "smtp.gmail.com"  # SMTP server for Gmail only
    smtp_port = 587  # Port 587 is the secure SMTP port for Gmail
    
    # Create email message
    message = MIMEText(input('Enter the mail body: '))
    message["Subject"] = input("Subject: ") if input("Enter a subject (leave empty for default): ") else "Automated Email"
    message["From"] = sender_email
    message["To"] = ", ".join(receiver_emails)
    
    # Call function to send email
    send_auto_mail(sender_email, sender_password, receiver_emails, smtp_server, smtp_port, message)

def send_auto_mail(sender_email, sender_password, receiver_emails, smtp_server, smtp_port, message):
    try:
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            
            # Send email
            server.sendmail(sender_email, receiver_emails, message.as_string())
    
        print("Email sent successfully!")
    
    except Exception as e:
        print('Error sending mail:', str(e))

if __name__ == "__main__":
    main()
