//What is GitHub?
// GitHub is a web-based hosting service for git repositories.
// You can use git without Github, but you cannot use GitHub without Git.




//Local Repository
// Every VCS tool provides a private workplace as a working copy. Developers make changes in
// their private workplace and after commit, these changes become a part of the repository. Git
// takes it one step further by providing them a private copy of the whole repository. Users can
// perform many operations with this repository such as add file, remove file, rename file, move file,
// commit changes, and many more.
// Working Directory and Staging Area or Index: An intermediate area where commits can be
// formatted and reviewed before completing the commit.
// push: send a change to another repository (may require permission)
// pull: grab a change from a repository


// Blobs :- Blob stands for Binary Large Object. Each version of a file is represented by blob. A blob holds the
// file data but doesn’t contain any metadata about the file. It is a binary file, and in Git database, it is
// named as SHA1 hash of that file. In Git, files are not addressed by names. Everything is
// content-addressed.

// Trees :-Tree is an object, which represents a directory. It holds blobs as well as other sub-directories. A
// tree is a binary file that stores references to blobs and trees which are also named as SHA1 hash
// of the tree object.

// Git commands:-

// Clone: Bring a repository hosted somewhere like Github into a folder or your local
// machine

// Add: Track your files and changes in Git.

// Commit: Save your files in git

// Push: Upload your commits to a git repo, like GitHub

// Pull: Download changes from a remote repository to your local repository. 