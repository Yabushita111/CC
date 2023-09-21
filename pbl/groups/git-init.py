import subprocess

for i in range(1,15):
    init = 'git init'
    add = ' git remote add origin https://github.com/Yabushita111/pblb2023g' + str(i).zfill(2) + '.git'
    group = 'pblb2023g' + str(i).zfill(2)
    subprocess.run(init,shell=True,cwd=group)
    subprocess.run(add,shell=True,cwd=group)