TTAB := $(shell which ttab)

.PHONY: app
app:
	jekyll serve

.PHONY: fe
fe:
	yarn scss

.PHONY: dev
dev:
	$(TTAB) make fe && make app

.PHONY: build
build:
	jekyll build
	cp ads.txt _site/ads.txt
	rm _site/Makefile _site/package.json _site/PLANNING.md _site/README.md _site/yarn.lock _site/tsconfig.json _site/webpack.config.js _site/tsconfig.json _site/s3_website.yml

