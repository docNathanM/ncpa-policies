# Jupyter Book

No matter how many notes I write I still come back wondering how I got that to work last time. So, here I go again ... 

My notes from last time with `nbpages` which I was working on for ChE316 are linked here using bookmark:
[nmNotes-HowTo.md](hook://file/qxbd7YNcU?p=bG9jYWxHaXRSZXBzL2NoZW1lbmczMTZfZmx1aWRzX3NvdXJjZUZpbGVz&n=nmNotes%2DHowTo%2Emd)

## Setup

I must have had some issue getting `homebrew` to work on the MacBook Pro where I don't have sudo privileges. I only think that because I get a bunch of errors and issues with I do

> `>> brew doctor`

Looking in my notes for jupyter I had used `conda` to install last time, so that is what I'm trying again now ... but it is stuck trying to "solve environment". Goodness ...

On my MacBookAir ...

> `... python not found
>
> `... brew install jupyter-book ... what's that
>
> `... pip install -U jupyter-book ... pip not found

Goodness ... will something work please!





## Normal Operation

1. Create new notebooks in the `/notebooks/` folder of the course project.
   - Open terminal at the `/notebooks/` folder and run `% jupyter notebook` and the web GUI will come up to start working.
2. Use *terminal* to run **nbpages --publish** from the project root folder.
   - It looks at the *nbpages.cfg* file for the configuration of the project.
3. Use GitHub Pages to host the site. In the project settings, make sure that the site is being built from the `docs/` folder. The site uses the https://pages.github.com/themes/ `jekyll-theme-minimal` as the theme. It is nice and works well. I haven't tried to play around with it.

## Requirements

**python** ... I had to get python installed. I did that through anaconda at first, but then I just used the command-line `conda` to update the distribution and packages.

**jupyter** ... I installed jupyter to use jupyter notebooks.

> This took some work ... I had used homebrew for some things in the past and that didn't work to well. Then, I noticed that I had conda (or anaconda) working and just needed to stick with that. So the path to success was to make sure that conda was on the PATH
>
> ```
> % ~/opt/anaconda3/bin/activate
> % ~/opt/anaconda3/bin/conda init
> ```
>
> On my MacProTube it was fully installed, but `zsh` had not been activated, so it wasn't finding that PATH.
>
> Next I made sure everything was installed/updated with
>
> ```
> % conda install -c conda-forge jupyterlab
> ```
>
> as discussed in https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html

**nbpages** took more work. This is a package that [@jckantor ](https://github.com/jckantor) used to maintain a set of notebooks for a course that he was teaching. There was a version publish online that I tried to install with `!pip install nbpages`, but I found out it was outdated ... so I had to go from the source. I forked the project from Jeff's site and installed it directly ... see https://pip.pypa.io/en/stable/cli/pip_install/#install-editable

```python
# Change ... see the command below to install from a local clone of the repository ...
% pip install -e 'git+https://github.com/docNathanM/nbpages#egg=nbpages' 
```

*HowTo make a change in **nbpages***: If I need to make a change in `nbpages` I need to (i) modify the source files, (ii) sync changes with `docNathanM` GitHub repo, and (iii) use `% pip` to update the installed version.

So ... thanks to chatGPT, the `pip install -e` command installs the code in an editable condition so that I can make changes to the code and have the instantly apply ... since I am working with the source files in the local repository, I can do the following to install the local repository as an executable package ... thanks chatGPT!

```
% pip install -e ~/Desktop/gitHubRepos/nbpages
```

This works! I made a change to the `nbcollection.py` code in the local repo and re-ran the `nbpages` code and it worked ... so that is all good now! I'm going to do the same steps on my laptop so the installation is the same there as well. 

**nbconvert** is installed as a dependency with **nbpages**. I didn't notice this at first. **nbconvert** can do a lot of things to convert jupyter notebooks to lots of other formats.

## Lessons Learned

**Chapter Numbering.** Make sure the first notebook starts with `01.00`. I tried to use `00.00` and the scripts didn't work quite right.

**Templates.** The **nbpages** command writes *.html* files for each notebook. The *notebook.tpl* file includes code to highlight cells with various tags. But, it also links to the basic **nbconvert** template. It took me a while to sort out a bug here. Originally, it was pointing to *full.tpl*, but **nbconvert** says this template is depreciated. I changed this to *index.html.j2* and everything worked. This was not in Jeff's original documentation, so it took me a while to make the fix.