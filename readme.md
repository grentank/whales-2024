Инициализация проекта

1. Если есть `package.json` -- только `npm i`
2. Если нет, то:
   1. `npm init -y`
   2. `npm init @eslint/config@latest`
   3. `npm i -D eslint-config-prettier`
   4. Подключить prettier в eslint.config: `import prettier from 'eslint-config-prettier';` и добавить в массив
   5. `npx degit grentank/create-prettierrc --force`
   6. `git init`
   7. `npx gitignore node`
   8. Прописать стратовый скрипт
3. Убедитесь, что установлены расширения `Eslint, Prettier`
4. Проверить, что в `settings.json` прописаны правила:
```
"files.autoSave": "afterDelay",
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.codeActionsOnSave": {
"source.fixAll.eslint": "always"
},
"eslint.workingDirectories": [
  { "directory": "./client", "changeProcessCWD": true },
  { "directory": "./server", "changeProcessCWD": true }
],
```