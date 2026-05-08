#!/usr/bin/env bash
set -euo pipefail

echo "[1/5] Building..."
npm run build

echo "[2/5] Cleaning _server artifacts..."
rm -rf .output/public/_server

echo "[3/5] Adding .nojekyll..."
touch .output/public/.nojekyll

WORKTREE="/tmp/gh-pages-deploy"

if git worktree list | grep -q "$WORKTREE"; then
  echo "[4/5] Reusing existing worktree at $WORKTREE"
else
  echo "[4/5] Creating gh-pages worktree..."
  git worktree add "$WORKTREE" gh-pages 2>/dev/null \
    || git worktree add --orphan "$WORKTREE"
fi

rm -rf "$WORKTREE"/*
cp -r .output/public/* "$WORKTREE"/

cd "$WORKTREE"
git add -A
git commit --allow-empty -m "deploy: manual"
git push origin gh-pages

echo "[5/5] Deployed!"
