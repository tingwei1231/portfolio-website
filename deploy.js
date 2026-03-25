import { execSync } from 'child_process';
import { resolve } from 'path';

// Deploy target: GitHub pages
const repoUrl = 'https://github.com/tingwei1231/portfolio-website.git';

try {
  console.log('🚀 開始部署到 GitHub Pages...');
  
  // 1. Build the project
  execSync('npm run build', { stdio: 'inherit' });
  
  // 2. Navigate to dist and initialize isolated git repo
  const distPath = resolve('./dist');
  
  // Create a .nojekyll file to bypass GitHub Pages Jekyll processing for Vite
  execSync('node -e "require(\'fs\').writeFileSync(\'.nojekyll\', \'\')"', { cwd: distPath });
  
  execSync('git init', { cwd: distPath, stdio: 'inherit' });
  
  // Rename the default branch to main
  execSync('git branch -M main', { cwd: distPath, stdio: 'ignore' });
  execSync('git add -A', { cwd: distPath, stdio: 'inherit' });
  execSync('git commit -m "Auto-deploy via deploy.js"', { cwd: distPath, stdio: 'inherit' });
  
  // Force push to gh-pages branch remotely
  console.log('⬆️ 推送最新版本到 gh-pages 分支...');
  execSync(`git push -f ${repoUrl} main:gh-pages`, { cwd: distPath, stdio: 'inherit' });
  
  console.log('✅ 部署成功！您的網站已更新。');
} catch (error) {
  console.error('❌ 部署失敗：', error.message);
  process.exit(1);
}
