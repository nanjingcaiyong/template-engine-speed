# 模板引擎

> 测试对比各服务端模版渲染性能


## pnpm 相关
工作目录下安装依赖
```bash
pnpm add <pkg> -w
```

指定子包安装依赖
```bash
pnpm add <pkg> --filter <package_selector>
```
- package_selector 子包的name(也就是子包package.json中的name属性)

执行子包的命令
```sh
pnpm -C <directory>  run <command>
```
