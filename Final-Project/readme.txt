Final Project Outline

github links :
https://ben-eetee.github.io/N220/Final-Project/login.html
https://github.com/Ben-Eetee/N220/tree/main/Final-Project


Features:

Login Page

Input: Username type: text
Input: Password type: text
Button: Log in
3 checks, number, capital letter, and special character, all false by default
    Onclick:
    check if username empty
        send alert if true and end
    check if password empty
        send alert if true and end
    check if password 8 characters or greater
        send alert if false and end
    parse through password character by character
        if number change number to true
        if capital letter change capital letter to true
        if special character change special character to true
    check if number, capital letter, and special character
        if one or many false, send appropriate alert and end
    if all checks pass: 
        proceed to main page
        save current username
        

Main Page

Dashboard

Show Saved Username

Input: logout type: Button
    onclick:
    delete current username
    return to login page

Input: Add Task type: Button
    onclick:
        create object: Task
            Var: taskname
            Input: taskname type: text
                sets task name for object
            Button: Change task onclick:
                Input: taskname type: text
                    changes task name
            Button: empty box onclick:
                change to button: box with chackmark onclick:
                    change back to Button: empty box
            Button: delete onclick:
                delete object: Task
            Dropdown menu, options:
                chore
                work
                school
                event
                other
                





