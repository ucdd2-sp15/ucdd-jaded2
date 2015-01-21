# Team members
Ryan Milvenan
Erik Eakins
Peyman Mortazavi
Abeve Tayachow
Olivia Abrant

# Score
50/50

# Meeting Location
CSEL

# Meeting Time
8:00 - 9:45

# Bug
When the iteration encounters the picture file and attempts to access its "filepath" property, the compiler warns that the filepath doesn't exist. How to fix?

.DS_Store files are created by Mac OS for its indexing and storing information for each directory. When you browse your files in finder, .DS_Store files will be automatically created for every folder you browse. Now the problem here is that Wintersmith tries to read these files and since it doesn't have permission to do so, it'll say can't find the file path. How to fix this? tell Wintersmith to ignore .DS_Store files. How? modify config.json and add "ignoe": ["**/.DS_Store"] which means for all sub-directories, ignore .DS_Store files.
