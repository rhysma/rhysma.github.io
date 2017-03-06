<?php
// process.php

$errors = array();  // array to hold validation errors
$data = array();        // array to pass back data

// validate the variables ========
if (empty($_POST['numAdults']))
  $errors['numAdults'] = 'The number of adults is required.';

if (empty($_POST['numChildren']))
  $errors['numChildren'] = 'The number of children is required.';

if (empty($_POST['destination']))
  $errors['destination'] = 'The destination is required.';
  
if (empty($_POST['date']))
  $errors['date'] = 'The date is required.';
  
if (empty($_POST['name']))
  $errors['name'] = 'The contact name is required.';
  
if (empty($_POST['phone']))
  $errors['phone'] = 'The contact phone number is required.';
  
if (empty($_POST['email']))
  $errors['email'] = 'The email address is required.';

// return a response ==============

// response if there are errors
if ( ! empty($errors)) {

  // if there are items in our errors array, return those errors
  $data['success'] = false;
  $data['errors']  = $errors;
} else {

  // if there are no errors, return a message
  $data['success'] = true;
  $data['message'] = 'Success!';
}

?>