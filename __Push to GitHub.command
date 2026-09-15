#!/bin/bash
cd "/Users/dr.lisa/Desktop/Dental Wisdom Site"

# Save the GitHub token to the Mac keychain after the first successful push,
# so this script stops asking for it. (Harmless if already set.)
git config --global credential.helper osxkeychain

echo "Pushing to GitHub..."
echo ""
git push origin main
STATUS=$?
echo ""

if [ $STATUS -eq 0 ]; then
  echo "Done - pushed to GitHub."
  echo "The live site updates in about 2-3 minutes."
  echo ""
  echo "To check it published, open this in a browser:"
  echo "  dentalwisdom.org"
  echo "then hard-refresh with Cmd+Shift+R."
else
  echo "PUSH FAILED - nothing was sent to GitHub."
  echo ""
  echo "If it asked you for a username and password:"
  echo "  Username = DentalWisdom"
  echo "  Password = your GitHub token (NOT your GitHub password)"
  echo "  Nothing appears on screen while you paste the token - that is normal."
  echo ""
  echo "If the token has stopped working, make a new one:"
  echo "  1. Go to  github.com/settings/tokens"
  echo "  2. Generate new token (classic)"
  echo "  3. Expiration: No expiration"
  echo "  4. Tick the 'repo' box only"
  echo "  5. Generate, copy it, and run this script again"
fi

echo ""
echo "Press any key to close."
read -n 1
