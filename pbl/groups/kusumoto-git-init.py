import subprocess

for i in range(1,15):
    remove = 'git remote remove origin'
    add = ' git remote add origin https://github.com/Yabushita111/pblb2023g' + str(i).zfill(2) + '.git'
    group = 'pblb2023g' + str(i).zfill(2)
    subprocess.run(remove,shell=True,cwd=group)
    subprocess.run(add,shell=True,cwd=group)