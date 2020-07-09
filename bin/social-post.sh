#!/bin/bash

cp ./bin/template.md $1.md
date=$(date '+%Y-%m-%d')
sed -i '' 's/date:/'"date: $date"'/g' $1.md
mv $1.md ./_social-posts/
