#!/bin/bash
# Local development setup script for al-folio
# Requires Ruby 3.3+

set -e

echo "=== al-folio Local Setup ==="

# Check Ruby version
RUBY_VERSION=$(ruby -e "puts RUBY_VERSION")
echo "Current Ruby: $RUBY_VERSION"

# Ruby 3.2+ required (3.3.5 recommended)
if [[ "$RUBY_VERSION" == 2.6.* ]] || [[ "$RUBY_VERSION" == 2.7.* ]] || [[ "$RUBY_VERSION" == 3.0.* ]] || [[ "$RUBY_VERSION" == 3.1.* ]]; then
    echo ""
    echo "ERROR: Ruby 3.2+ is required. Current: $RUBY_VERSION"
    echo ""
    echo "Install with rbenv:"
    echo "  brew install rbenv ruby-build"
    echo "  eval \"\$(rbenv init - zsh)\""
    echo "  rbenv install 3.3.5"
    echo "  rbenv local 3.3.5"
    echo ""
    echo "See LOCAL_SETUP.md for details."
    exit 1
fi

# Fix git safe.directory for bundler's git gem cache
git config --global --add safe.directory '*' 2>/dev/null || true

# Install gems
echo ""
echo "Installing gems..."
bundle config set --local path 'vendor/bundle' 2>/dev/null || true
bundle install

echo ""
echo "=== Setup complete! ==="
echo "Run: bundle exec jekyll serve"
echo "Then open: http://localhost:4000"
