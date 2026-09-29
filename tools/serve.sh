#!/usr/bin/env bash
set -euo pipefail
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT/site"
export BUNDLE_GEMFILE="$REPO_ROOT/Gemfile"
bundle exec jekyll serve --destination "$REPO_ROOT/_site" "$@"
