##################################################### GitHub Automation #####################################################
################################################ Developed By Avdhesh Varshney ##############################################
############################################ (https://github.com/Avdhesh-Varshney) ##########################################

"""Install Python Packages as listed below using these commands in the terminal

Sr. No.         Package Name             Commands
1.              subprocess               pip install subprocess
2.              os                       pip install os
3.              github                   pip install PyGithub

After install all these packages then import all of them in this file."""

# Importing libraries
import subprocess
from github import Github
import os

os.system("cls" if os.name == "nt" else "clear")

# Provide your GitHub access token
access_token = input("YOUR GITHUB ACCESS TOKEN : ")

# Create a PyGithub instance using the access token
g = Github(access_token)


# Function to create a repository
def createRepository(repoName):
    user = g.get_user()
    repo = user.create_repo(repoName)
    print(f"Repository '{repo.name}' created successfully!")


# Function to list repositories
def listRepositories():
    user = g.get_user()
    repos = user.get_repos()
    print("Your repositories:")
    for repo in repos:
        print(repo.name)


# Function to create an issue
def createIssue(repoName, issueTitle):
    user = g.get_user()
    repo = user.get_repo(repoName)
    issue = repo.create_issue(title=issueTitle)
    print(f"Issue '{issue.title}' created successfully in '{repo.name}'!")


# Function to create a pull request
def createPullRequest(repoName, title, headBranch, baseBranch):
    user = g.get_user()
    repo = user.get_repo(repoName)
    head = f"{user.login}:{headBranch}"
    base = baseBranch
    pr = repo.create_pull(title=title, head=head, base=base)
    print(f"Pull request '{pr.title}' created successfully in '{repo.name}'!")


# Function to remove files from the staging area
def removeFiles():
    subprocess.run(["git", "reset"])


# Function to commit specified files
def commitFiles():
    files = input("Enter the file names to commit (separated by spaces): ")
    message = input("Enter the commit message: ")
    subprocess.run(["git", "add"] + files.split())
    subprocess.run(["git", "commit", "-m", message])


# Function to push commits to git
def pushCommits():
    subprocess.run(["git", "push"])


# Function to restore all files from the staging area
def restoreAllFiles():
    try:
        subprocess.run(["git", "restore", "--staged", "."])
        subprocess.run(["git", "restore", "."])
        print("All files restored successfully.")
    except Exception as e:
        print(f"Error occurred while restoring files: {str(e)}")


# Main function to handle user interaction
def main():
    while True:
        os.system("cls" if os.name == "nt" else "clear")
        print("Select an operation:")
        print("1. Create Repository")
        print("2. List Repositories")
        print("3. Create Issue")
        print("4. Create Pull Request")
        print("5. Remove Files from Staging Area")
        print("6. Commit Files")
        print("7. Push Commits")
        print("8. Restore all files from Staging Area")
        print("0. Exit the program\n")
        choice = input("\nEnter your choice: ")

        os.system("cls" if os.name == "nt" else "clear")
        if choice == "0":
            print("Thanks for using this program!")
            exit(0)

        elif choice == "1":
            repoName = input("Enter the repository name: ")
            createRepository(repoName)

        elif choice == "2":
            listRepositories()

        elif choice == "3":
            repoName = input("Enter the repository name: ")
            issueTitle = input("Enter the issue title: ")
            createIssue(repoName, issueTitle)

        elif choice == "4":
            repoName = input("Enter the repository name: ")
            title = input("Enter the pull request title: ")
            headBranch = input("Enter the head branch: ")
            baseBranch = input("Enter the base branch: ")
            createPullRequest(repoName, title, headBranch, baseBranch)

        elif choice == "5":
            removeFiles()

        elif choice == "6":
            commitFiles()

        elif choice == "7":
            pushCommits()

        elif choice == "8":
            restoreAllFiles()

        else:
            print("Invalid choice!")


# Driver function
if __name__ == "__main__":
    main()
