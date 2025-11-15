# PowerShell script to replace all hardcoded accent colors with Tailwind classes
# This script updates all #F4B400 and #D4A000 references to use accent color classes

$rootPath = "C:\Users\91940\Downloads\eazyReach\project"
$componentsPath = Join-Path $rootPath "components"
$appPath = Join-Path $rootPath "app"

# Function to update colors in a file
function Update-AccentColors {
    param(
        [string]$filePath
    )
    
    try {
        $content = Get-Content $filePath -Raw -Encoding UTF8
        $originalContent = $content
        
        # Replace color values with Tailwind classes
        # Background colors
        $content = $content -replace 'bg-\[#F4B400\]([^/])', 'bg-accent$1'
        $content = $content -replace 'bg-\[#D4A000\]', 'bg-accent-hover'
        
        # Background with opacity
        $content = $content -replace 'bg-\[#F4B400\]/(\d+)', 'bg-accent/$1'
        $content = $content -replace 'from-\[#F4B400\]', 'from-accent'
        $content = $content -replace 'to-\[#F4B400\]', 'to-accent'
        $content = $content -replace 'via-\[#F4B400\]', 'via-accent'
        
        # Text colors
        $content = $content -replace 'text-\[#F4B400\]', 'text-accent'
        
        # Border colors
        $content = $content -replace 'border-\[#F4B400\]', 'border-accent'
        
        # Shadow colors
        $content = $content -replace 'shadow-\[#F4B400\]', 'shadow-accent'
        
        # Hover states
        $content = $content -replace 'hover:bg-\[#F4B400\]', 'hover:bg-accent'
        $content = $content -replace 'hover:bg-\[#D4A000\]', 'hover:bg-accent-hover'
        $content = $content -replace 'hover:text-\[#F4B400\]', 'hover:text-accent'
        $content = $content -replace 'hover:border-\[#F4B400\]', 'hover:border-accent'
        $content = $content -replace 'hover:border-\[#D4A000\]', 'hover:border-accent-hover'
        $content = $content -replace 'hover:shadow-\[#F4B400\]', 'hover:shadow-accent'
        $content = $content -replace 'group-hover:bg-\[#F4B400\]', 'group-hover:bg-accent'
        
        # Escaped brackets (from previous script)
        $content = $content -replace 'bg-\\+\[#F4B400\\+\]', 'bg-accent'
        $content = $content -replace 'from-\\+\[#F4B400\\+\]', 'from-accent'
        $content = $content -replace 'to-\\+\[#F4B400\\+\]', 'to-accent'
        
        # Framer Motion style props (borderColor)
        $content = $content -replace "borderColor:\s*['""]#F4B400['""]", "borderColor: 'rgb(var(--accent-rgb))'"
        
        # Save only if changes were made
        if ($content -ne $originalContent) {
            Set-Content -Path $filePath -Value $content -Encoding UTF8 -NoNewline
            Write-Host "✓ Updated: $filePath" -ForegroundColor Green
            return 1
        }
        return 0
    }
    catch {
        Write-Host "✗ Error updating $filePath : $_" -ForegroundColor Red
        return 0
    }
}

# Get all TypeScript/JavaScript files
$files = @()
$files += Get-ChildItem -Path $componentsPath -Include "*.tsx","*.ts","*.jsx","*.js" -Recurse -File
$files += Get-ChildItem -Path $appPath -Include "*.tsx","*.ts","*.jsx","*.js" -Recurse -File

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "UPDATING ACCENT COLORS TO TAILWIND CLASSES" -ForegroundColor Yellow
Write-Host "========================================`n" -ForegroundColor Cyan

$totalFiles = $files.Count
$updatedFiles = 0

foreach ($file in $files) {
    $result = Update-AccentColors -filePath $file.FullName
    $updatedFiles += $result
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "ACCENT COLOR UPDATE COMPLETE!" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan
Write-Host "  Total files scanned: $totalFiles" -ForegroundColor White
Write-Host "  Files updated: $updatedFiles" -ForegroundColor Green
Write-Host "`nAll hardcoded colors replaced with Tailwind accent classes!" -ForegroundColor Yellow
Write-Host "Now change colors in tailwind.config.js and they will update everywhere!" -ForegroundColor Cyan
Write-Host ""
