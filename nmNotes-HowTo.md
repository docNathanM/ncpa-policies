# Jupyter Book

No matter how many notes I write I still come back wondering how I got that to work last time. So, here I go again ... 

My notes from last time with `nbpages` which I was working on for ChE316 are linked here using bookmark:
[nmNotes-HowTo.md](hook://file/qxbd7YNcU?p=bG9jYWxHaXRSZXBzL2NoZW1lbmczMTZfZmx1aWRzX3NvdXJjZUZpbGVz&n=nmNotes%2DHowTo%2Emd)

## Setup

> [!Note] 
>
> I must have had some issue getting `homebrew` to work on the MacBook Pro where I don't have sudo privileges. I only think that because I get a bunch of errors and issues with I do
>
> `>> brew doctor`
>
> Looking in my notes for jupyter I had used `conda` to install last time, so that is what I'm trying again now ... but it is stuck trying to "solve environment". Goodness ...
>
> On my MacBookAir ...
>
> `... python not found`
>
> `... brew install jupyter-book ... what's that`
>
> `... pip install -U jupyter-book ... pip not found`
>
> So I must not have python installed on the MacBookAir either

**FIXED** I still don't have `homebrew` or `condo` working at the moment, but I did get the jupyter book to build and register on `github-pages`  with the workflow. It turned out there was a typo in the template's bibliography file, and I found that and fixed it.

The file `~/ncpa-policies/.github/workflows/deploy.yml` is what controls the GitHub workflow actions. When I commit any changes it triggers the actions that actually run the build of the jupyter book in the background ... this is quite amazing because it does all the hard work on compiling the book for me in the background!

