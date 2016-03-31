# Node/Mocha/Grunt(watch) Testing Skeleton

### How to use

##### If you are setting up a new project in a folder that is not yet a git repo

- [Set up an empty GitHub repo.](https://help.github.com/articles/create-a-repo/)
- ``git clone https://github.com/eihli/test-skeleton.git``
- ``cd test-skeleton``
- ``git remote set-url origin <your github project repo>``
- ``git remote add origin <your github repo>``
- npm install
- grunt watch

##### If you want to add a testing skeleton to a folder that is already a git repo

Add the following function to your .bash_profile and you can generate a test skeleton from command line
with the command 'mktest'. This code will download the repo as a .zip file, extract it to the current directory without creating a git repo, then delete the temporary zip file.

    function mktest() {
      wget https://github.com/eihli/test-skeleton/archive/master.zip -O temp.zip
      unzip temp.zip -d ./
      mv ./test-skeleton-master/* ./
      rm -r ./test-skeleton-master temp.zip
      npm install    
    }

After running mktest, run 'grunt watch' and go edit the Gruntfile to add whatever files you want it to monitor for changes.

For details about what everything does in the gruntfile: http://gruntjs.com/sample-gruntfile
