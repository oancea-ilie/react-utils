# Github
GITHUB_USER = Graffino
GITHUB_REPO = Graffino-Boilerplate
GITHUB_BRANCH = master
GITHUB_PROJECT_FOLDER = react

# Files
ESLINT_FILE = .eslintrc
ESLINT_IGNORE_FILE = .eslintignore

PRETTIER_FILE = .prettierrc
PRETTIER_IGNORE_FILE = .prettierignore

EDITOR_CONFIG_FILE = .editorconfig
LINT_STAGED_FILE = lint-staged.config.js
GITIGNORE_FILE = .gitignore

ENV_EXAMPLE_FILE = .env.example
ENV_PROD_FILE = .env.prod
ENV_STAGING_FILE = .env.staging

WORKFLOW_PROD_FILE = production.yml
WORKFLOW_STAGING_FILE = staging.yml

VS_SETTINGS_FILE = settings.json
TYPESCRIPT_PATHS_FILE = tsconfig.paths.json
CRACO_CONFIG_FILE = craco.config.js

GITHUB_REPO_RAW = https://raw.githubusercontent.com/$(GITHUB_USER)/$(GITHUB_REPO)/$(GITHUB_BRANCH)/$(GITHUB_PROJECT_FOLDER)

.PHONY: init-eslint
init-eslint:
	yarn add -D eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript prettier eslint-plugin-prettier eslint-config-prettier eslint-import-resolver-alias eslint-plugin-unused-imports
	curl -o $(ESLINT_FILE) $(GITHUB_REPO_RAW)/$(ESLINT_FILE)
	curl -o $(ESLINT_IGNORE_FILE) $(GITHUB_REPO_RAW)/$(ESLINT_IGNORE_FILE);

.PHONY: init-prettier
init-prettier:
	yarn add -D prettier
	curl -o $(PRETTIER_FILE) $(GITHUB_REPO_RAW)/$(PRETTIER_FILE)
	curl -o $(PRETTIER_IGNORE_FILE) $(GITHUB_REPO_RAW)/$(PRETTIER_IGNORE_FILE);

.PHONY: init-editor-config
init-editor-config:
	curl -o $(EDITOR_CONFIG_FILE) $(GITHUB_REPO_RAW)/$(EDITOR_CONFIG_FILE)

.PHONY: init-vs-settings
init-vs-settings:
	mkdir -p .vscode
	curl -o .vscode/$(VS_SETTINGS_FILE) $(GITHUB_REPO_RAW)/$(VS_SETTINGS_FILE)

.PHONY: init-gitignore
init-gitignore:
	curl -o $(GITIGNORE_FILE) $(GITHUB_REPO_RAW)/$(GITIGNORE_FILE)

.PHONY: init-envs
init-envs:
	echo "REACT_APP_YOUR_VARIABLE=" >| .env
	curl -o $(ENV_EXAMPLE_FILE) $(GITHUB_REPO_RAW)/$(ENV_EXAMPLE_FILE)
	curl -o $(ENV_PROD_FILE) $(GITHUB_REPO_RAW)/$(ENV_PROD_FILE)
	curl -o $(ENV_STAGING_FILE) $(GITHUB_REPO_RAW)/$(ENV_STAGING_FILE)

.PHONY: init-husky
init-husky:
	yarn add lint-staged
	yarn add @commitlint/cli
	yarn add @commitlint/config-conventional
	yarn add husky
	yarn husky install
	echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
	husky add .husky/commit-msg 'yarn commitlint --edit ${1}'
	husky add .husky/pre-commit 'yarn lint-staged --concurrent false --relative'
	curl -o $(LINT_STAGED_FILE) $(GITHUB_REPO_RAW)/$(LINT_STAGED_FILE)

.PHONY: init
init:
	make init-eslint
	make init-prettier
	make init-editor-config
	make init-vs-settings
	make init-gitignore
	make init-envs
	make init-husky

# Extra
.PHONY: init-github-workflows
init-github-workflows:
	mkdir -p .github/workflows
	curl -o .github/workflows/$(WORKFLOW_PROD_FILE) $(GITHUB_REPO_RAW)/$(WORKFLOW_PROD_FILE)
	curl -o .github/workflows/$(WORKFLOW_STAGING_FILE) $(GITHUB_REPO_RAW)/$(WORKFLOW_STAGING_FILE)

.PHONY: init-alias
init-alias:
	yarn add @craco/craco
	npm pkg set scripts.start="craco start"
	npm pkg set scripts.build="craco build"
	curl -o $(TYPESCRIPT_PATHS_FILE) $(GITHUB_REPO_RAW)/$(TYPESCRIPT_PATHS_FILE)
	curl -o $(CRACO_CONFIG_FILE) $(GITHUB_REPO_RAW)/$(CRACO_CONFIG_FILE)
	awk 'NR==2 {print "\"extends\": \"./tsconfig.paths.json\","} 1' tsconfig.json > temp && mv temp tsconfig.json