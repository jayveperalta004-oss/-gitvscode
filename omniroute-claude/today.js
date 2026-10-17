const today = new Date();
const dateStr = today.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

console.log('📅 Today\'s date:');
console.log(dateStr);
console.log('');

// PowerShell tip
const powershellTip = `
💡 PowerShell Tip:
Use aliases to shorten commands. For example:
  - 'ls' instead of 'Get-ChildItem'
  - 'cat' instead of 'Get-Content'
  - 'cd' instead of 'Set-Location'
  - 'cls' instead of 'Clear-Host'

Type 'Get-Alias' to see all available aliases.
`;

console.log(powershellTip);