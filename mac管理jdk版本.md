###jdk的默认安装目录

在mac上jdk的安装目录是在/Library/Java/JavaVirtualMachines

###环境变量配置

#####添加即编辑环境变量文件.bash_profile

```
    vi ~/.bash_profile // 并填写下文内容
    source ~/.bash_profile // 刷新环境变量
    java -version // 查看当前的 jdk 版本
```


#####在.bash_profile文件中添加
  
```
    # 设置 jdk12
    export JAVA_12_HOME=`/usr/libexec/java_home -v 12`
    # 设置 jdk11
    export JAVA_11_HOME=`/usr/libexec/java_home -v 11`

    # 默认 jdk 使用11版本
    export JAVA_HOME=$JAVA_11_HOME

    # alias 命令动态切换 jdk 版本
    alias jdk12='export JAVA_HOME=$JAVA_12_HOME'
    alias jdk11='export JAVA_HOME=$JAVA_11_HOME'

```

####检测

```
    java -version // 查看到安全java版本
    jdk12 // 切换到jdk12版本
    java -version // 此刻应该正常返回java版本为12
    jdk11 // 切换到jdk11版本
    java -version // 此刻应该正常返回java版本为11
```