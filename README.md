Dev Diaries
==================
> A dev community. Handy development tips and tricks.

# Deployment
* Leverages [s3-deploy](https://github.com/import-io/s3-deploy). Run 
```
yarn deploy
```
to kick off a deploy to s3. This also invalidates the Cloudfront cache. Note
you must have proper credentials in your `~/.aws/credentials` file 
