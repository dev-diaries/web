TTAB := $(shell which ttab)

.PHONY: app
app:
	bundle exec jekyll serve

.PHONY: fe
fe:
	yarn scss

.PHONY: dev
dev:
	$(TTAB) make fe && make app

.PHONY: build
build:
	bundle exec jekyll build
	cp ads.txt _site/ads.txt
