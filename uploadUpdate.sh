# Create Packages files
./dpkg-scanpackages -m Files /dev/null > Packages
rm Packages.gz Packages.bz2
gzip -c9 Packages > Packages.gz
bzip2 -c9 Packages > Packages.bz2

# Upload to github with [message]
echo "git commit message:"
read message
git add -A
git commit -m "$message"
git push -u origin master
