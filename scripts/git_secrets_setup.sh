#!/bin/bash

cwd=$(pwd)
cd ~/

echo 'Clone/update the git-secrets'
if [ ! -d git-secrets ]; then
  git clone -q https://github.com/awslabs/git-secrets.git
fi

cd git-secrets
git fetch -q origin
git fetch -q --tags origin
git checkout -q $(git tag | tail -n 1)

echo 'Install git-secrets'
sudo make install
if [ "$?" -ne "0" ]; then
  echo 'Unable to sudo. Either the provided password is incorrect or the installation failed'
  cd "${cwd}"
  exit 1
fi

echo 'Registering git-secrets as a global option'
git secrets --register-aws --global
mkdir -p ~/.git-templates/git-secrets
git secrets --install -f ~/.git-templates/git-secrets &>/dev/null
git config --global init.templateDir ~/.git-templates/git-secrets

cat <<EOF
You're not done yet! You MUST install the git hooks for every repo that you wish to use with "git secrets --install".

Here's a quick example of how to ensure a git repository is scanned for secrets on each commit:

cd /path/to/my/repo
git secrets --install
git secrets --register-aws
EOF

cd "${cwd}"
