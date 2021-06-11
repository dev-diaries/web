[![Build Status](https://travis-ci.org/dev-diaries/web.svg?branch=master)](https://travis-ci.org/github/dev-diaries/web)

Dev Diaries
==================
> A dev community. Handy development tips and tricks.

# Deployment
* Uses [s3_website](https://github.com/laurilehmijoki/s3_website) to deploy
which is coordinated via Travis CI. Settings can be found in the
`s3_website.yml` file. A deploy is triggered off a push to the `master`
branch only.

# Issues Building
> Liquid Exception: Liquid syntax error (line 8): Unknown tag 'when' in vendor/bundle/ruby/2.6.0/gems/liquid-4.0.3/lib/liquid/locales/en.yml
* Fixed by this [Stackoverflow post](https://stackoverflow.com/questions/47565390/getting-an-unknown-tag-liquid-error-while-using-jekyll)
