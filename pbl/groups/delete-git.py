import subprocess

for i in range(1,15):
    rm = 'git rm -rf --cached pblb2023g'+str(i).zfill(2)
    subprocess.run(rm,shell=True)