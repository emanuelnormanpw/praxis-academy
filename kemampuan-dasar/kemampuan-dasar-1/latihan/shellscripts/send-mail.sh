#!/bin/bash

Recipient="emanuelnpw@gmail.com"
Subject="Greeting"
Message="Welcome to our site"
`mail -s $Subject $Recipient <<< $Message`
