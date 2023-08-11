```
eslint: to ensure code quality
prettier: to ensure that code is properly formatted according to the rules defined
husky: makes it possible to run scripts in our package.json file on git lifecycle hooks.
lint-staged: runs defined scripts on only staged files(git).
eslint-config-prettier: prevents any code formatting conflicts between eslint and prettier. As we know, eslint handles both code quality and code formatting. This package disables the rule in eslint that formats code so that eslint only focuses on ensuring code quality.
```
