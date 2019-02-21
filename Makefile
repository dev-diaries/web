TTAB := $(shell which ttab)

.PHONY: app
app:
	jekyll serve

.PHONY: fe
fe:
	yarn scss

.PHONY: dev
dev:
	$(TTAB) make app && make fe


