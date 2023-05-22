
git branch feature
git checkout feature
Make changes to the “hello.txt” file by adding the following line to the end of the file:

This is a feature branch

Step 10: Commit and Push Changes to the Feature Branch Add the changes to the feature branch and commit them using the following commands:

git add hello.txt
git commit -m "Add feature branch change to hello.txt"
```
commit 66d2a8480c93ccd9b1162e6f6806820e1ad03e65 (HEAD -> feature, origin/feature)
Author: ravioli158 <rathoreravi1508@gmail.com>
Date:   Tue Apr 18 07:01:53 2023 +0530

    Add feature branch change to hello.txt
```
Push the changes to the feature branch using the following command:

git push origin feature
Step 11: Create a Pull Request Go to the GitHub repository page and click on the “Pull requests” tab. Click on the “New pull request” button. Select the main branch as the base branch and the feature branch as the compare branch. Review the changes and click on the “Create pull request” button.

Step 12: Merge the Pull Request Review the pull request and click on the “Merge pull request” button to merge the changes into the main branch.
```
commit 35e36321b016684bdacbdbc1d4a1a86b7d659c78 (origin/main, origin/HEAD, main)
Merge: 13e8f04 06a480a
Author: ravioli158 <129960093+ravioli158@users.noreply.github.com>
Date:   Tue Apr 18 06:56:59 2023 +0530

    Merge pull request #1 from ravioli158/feature

    Add feature branch change to hello.txt
```