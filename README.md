Dev Diaries
==================
> A dev community. Handy development tips and tricks.

# Deployment
* Uses [s3_website](https://github.com/laurilehmijoki/s3_website) to deploy
which is coordinated via Travis CI. Settings can be found in the 
`s3_website.yml` file. A deploy is triggered off a push to the `master`
branch only.
