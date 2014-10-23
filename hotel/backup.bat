set hh=%time:~0,2%

if "%time:~0,1%"==" " set hh=0%hh:~1,1%

set yymmdd_hhmmss=%date%_%hh%%time:~3,2%%time:~6,2%

"c:\Program Files\wamp\php\php.exe" backup.php > "G:\%yymmdd_hhmmss%.sql"