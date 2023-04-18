Step 1: Create a GitHub Account If you do not already have a GitHub account, create one at github.com.

Step 2: Create a Repository Create a new repository on GitHub by clicking on the “+” button on the top right corner of the screen and selecting “New repository” from the drop-down menu. Name your repository “GitHub-Advanced-Hands-On” and select “Public” as the repository type. Check the box that says “Initialize this repository with a README” and click on the “Create repository” button.

Step 3: Clone the Repository To clone the repository, go to the repository page on GitHub and click on the “Code” button. This will open a menu with a URL that you can use to clone the repository. Open a terminal window and navigate to the directory where you want to clone the repository. Use the following command to clone the repository:

git clone <repository URL>
Step 4: Create and Manage Branches Create a new branch called “dev” using the following command:

git branch dev
```
commit bc119494eb9165cb8e7c0d8957a95c9e923e5fa4 (HEAD -> dev, origin/dev)
Author: ravioli158 <rathoreravi1508@gmail.com>
Date:   Tue Apr 18 06:39:46 2023 +0530

    Add dev branch change to hello.txt
```
Switch to the new branch using the following command:
```
git checkout dev
```
Make changes to the “hello.txt” file by adding the following line to the end of the file:

This is a dev branch change.

Save the file and close it.

Step 5: Commit Changes to the Dev Branch

Add the changes to the dev branch and commit them using the following commands:

git add hello.txt
git commit -m "Add dev branch change to hello.txt"
```
commit bc119494eb9165cb8e7c0d8957a95c9e923e5fa4 (HEAD -> dev, origin/dev)
Author: ravioli158 <rathoreravi1508@gmail.com>
Date:   Tue Apr 18 06:39:46 2023 +0530

    Add dev branch change to hello.txt
```
Step 6: Push Changes to the Dev Branch Push the changes to the dev branch using the following command:

git push origin dev
Step 7: Resolve Conflicts Switch back to the main branch using the following command:

git checkout main
Make changes to the “hello.txt” file by adding the following line to the end of the file:

This is a main branch change.

Save the file and close it.

Try to merge the dev branch into the main branch using the following command:

git merge dev
You will get a conflict error because the same line has been modified in both branches. Open the “hello.txt” file and resolve the conflict by keeping both changes:

Hello, GitHub! This is a dev branch change. This is a main branch change.

Save the file and close it.

Add the resolved file to the commit using the following command:

git add hello.txt
Commit the changes using the following command:

git commit -m "Resolve conflict in hello.txt"
```
commit 13e8f045f716f78ea348a51c0e8daae22c4a5feb (HEAD -> main)
Author: ravioli158 <rathoreravi1508@gmail.com>
Date:   Tue Apr 18 06:48:06 2023 +0530

    Resolve conflict in hello.txt
```
Step 8: Push Changes to the Main Branch Push the changes to the main branch using the following command:

git push origin main