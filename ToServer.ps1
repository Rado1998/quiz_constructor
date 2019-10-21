ng build --prod
pause
winscp.exe mediq /keepuptodate "C:\Users\Annaniks LLC\Desktop\quizconstructor\dist" /var/www/questionsweb /defaults
pause
plink -ssh root@46.101.179.50 -pw LCto6XSk "sudo service nginx restart"

