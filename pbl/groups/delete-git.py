import subprocess

for i in range(1,15):
    rm = 'rm -rf pblb2023g'+str(i).zfill(2)+'/.git'
    remove = 'git remote remove pblb2023g'+str(i).zfill(2)+'/origin'
    subprocess.run(rm,shell=True)
    subprocess.run(remove,shell=True)