# GitHub Actions Setup Guide

This guide explains how to set up the GitHub Actions workflows for the Dev Diaries MCP server.

## Required Secrets

You need to add the following secrets to your GitHub repository:

### 1. NPM_TOKEN

This is your NPM access token for publishing packages.

**How to create:**
1. Go to [NPM Account Settings](https://www.npmjs.com/settings/tokens)
2. Click "Generate New Token"
3. Select "Automation" type
4. Copy the token

**How to add to GitHub:**
1. Go to your repository on GitHub
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Name: `NPM_TOKEN`
5. Value: Your NPM token

### 2. GITHUB_TOKEN (Automatic)

This is automatically provided by GitHub Actions and doesn't need to be set manually.

## Workflows

### 1. CI Workflow (`ci.yml`)
- Runs on every push and pull request
- Tests the code on multiple Node.js versions
- Runs linting, type checking, and builds
- Includes security auditing

### 2. Release Workflow (`release.yml`)
- Triggers on version tags (e.g., `v1.0.0`)
- Can also be triggered manually via "Actions" tab
- Publishes to NPM
- Creates GitHub releases
- Checks for version conflicts

### 3. Update Content Workflow (`update-content.yml`)
- Runs daily at 2 AM UTC
- Can be triggered manually
- Downloads latest content from Dev Diaries repository
- Creates PRs for content updates

## Usage

### Publishing a New Version

#### Method 1: Git Tags (Recommended)
```bash
# Create and push a tag
git tag v1.0.0
git push origin v1.0.0
```

#### Method 2: Manual Trigger
1. Go to "Actions" tab in GitHub
2. Select "Release" workflow
3. Click "Run workflow"
4. Enter version number (e.g., `1.0.0`)
5. Click "Run workflow"

### Updating Content

#### Automatic Updates
- Content updates automatically every day at 2 AM UTC
- Creates PRs for review before merging

#### Manual Updates
1. Go to "Actions" tab in GitHub
2. Select "Update Content" workflow
3. Click "Run workflow"
4. Optionally check "Force update"
5. Click "Run workflow"

## Troubleshooting

### Common Issues

#### 1. NPM Token Issues
- Make sure the token has "Automation" type
- Verify the token is correctly set in repository secrets
- Check that the package name is available on NPM

#### 2. Version Conflicts
- The workflow checks if a version already exists
- If it exists, the publish step is skipped
- Update the version number in package.json

#### 3. Build Failures
- Check the CI workflow logs
- Ensure all dependencies are properly installed
- Verify TypeScript compilation

#### 4. Content Update Issues
- Check that the Dev Diaries repository is accessible
- Verify the GITHUB_TOKEN has proper permissions
- Ensure the content structure hasn't changed

### Debugging

#### View Logs
1. Go to "Actions" tab in GitHub
2. Click on the failed workflow run
3. Click on the failed job
4. Expand the failed step to see logs

#### Local Testing
```bash
# Test the build process
npm run build

# Test content indexing
npm run index-content /path/to/dev-diaries

# Test the MCP server
npm start
```

## Security Considerations

- NPM tokens are stored as encrypted secrets
- Tokens are only accessible during workflow runs
- Use "Automation" tokens for CI/CD (not personal tokens)
- Regularly rotate your NPM tokens
- Review workflow permissions regularly

## Best Practices

1. **Version Management**: Use semantic versioning (semver)
2. **Testing**: Always test locally before pushing
3. **Documentation**: Update README with new features
4. **Security**: Keep dependencies updated
5. **Monitoring**: Watch for failed workflow runs
