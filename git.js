1. git branch [name] //创建本地分支
2. git checkout [name] //切换本地分支
3. git checkout -b [name] //创建切换分支
4. git reflog 查看日志
5. git reset --hard commit-id  //撤销commit到提交的id
6. git pull -r //拉取

对比git pull 和 git pull --rebase 
1.git pull = git fetch + git merge
2.git pull --rebase = git fetch + git rebase


常用指令
1.git init  创建git库
2.git add.  #会把当前所有的untrack files和changed but not updated添加到stage状态
3.git commit -m '' 向版本库提交修改
4.git status 查看当前代码库的状态
5.git stash 暂存
6.git stash pop 
7.git stash list
