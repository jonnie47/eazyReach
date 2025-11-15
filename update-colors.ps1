Write-Host 'Starting color update...' -ForegroundColor Cyan
$colorMap = @{
    '#E91E63' = '#F4B400'
    '#FF1744' = '#F4B400'
    '#D4145A' = '#D4A000'
}
$rgbaMap = @{
    'rgba(233, 30, 99' = 'rgba(244, 180, 0'
    'rgba(233,30,99' = 'rgba(244,180,0'
    'rgba(255, 23, 68' = 'rgba(244, 180, 0'
    'rgba(255,23,68' = 'rgba(244,180,0'
    'rgba(212, 20, 90' = 'rgba(212, 160, 0'
    'rgba(212,20,90' = 'rgba(212,160,0'
}
$files = Get-ChildItem -Recurse -Include *.tsx,*.ts,*.jsx,*.js,*.css | Where-Object { $_.DirectoryName -notmatch 'node_modules|\.next|dist|build' }
$filesModified = 0
$totalReplacements = 0
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    $fileReplacements = 0
    foreach ($oldColor in $colorMap.Keys) {
        $newColor = $colorMap[$oldColor]
        $pattern = [regex]::Escape($oldColor)
        $matches = [regex]::Matches($content, $pattern, 'IgnoreCase')
        if ($matches.Count -gt 0) {
            $content = $content -replace $pattern, $newColor
            $fileReplacements += $matches.Count
        }
    }
    foreach ($oldRgba in $rgbaMap.Keys) {
        $newRgba = $rgbaMap[$oldRgba]
        $pattern = [regex]::Escape($oldRgba)
        $matches = [regex]::Matches($content, $pattern, 'IgnoreCase')
        if ($matches.Count -gt 0) {
            $content = $content -replace $pattern, $newRgba
            $fileReplacements += $matches.Count
        }
    }
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $filesModified++
        $totalReplacements += $fileReplacements
        Write-Host ('Modified: ' + $file.Name + ' (' + $fileReplacements + ' replacements)') -ForegroundColor Green
    }
}
Write-Host ('Complete! Files modified: ' + $filesModified + ', Total replacements: ' + $totalReplacements) -ForegroundColor Yellow
