@ECHO OFF

REM Author Jeykher Pernia Yendes <jeykheryendes@gmail.com>

:START

ECHO Yendes Softwares @ Passion For Technology

ECHO.

IF "%~1"=="" (
    ECHO No name has been provided for the feature branch.
    ECHO You can use this bat script: addGitFeature.bat [featureName]
    EXIT /b
)

SETLOCAL EnableDelayedExpansion
SET "HASH="
FOR /L %%i IN (1,1,32) DO (
    SET /A "R=!RANDOM! %% 36"
    FOR %%j IN (0 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z) DO (
        IF !R! == 0 SET "HASH=!HASH!%%j"
        SET /A "R-=1"
    )
)

SET "BRANCH_NAME=feature/%~1-%HASH%"

git checkout -b %BRANCH_NAME%

ECHO Git Branch feature %BRANCH_NAME% has been created!

REM To use this script on CLI "addGitFeature featureBranchName"

:END
