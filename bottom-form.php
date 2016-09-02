<?php

	/* Configuration */
	$subject = 'Shar. - Bottom Form Registration'; // Set email subject line here
	$mailto  = 'youremail@domain.com'; // Email address to send form submission to
	/* END Configuration */

	$email = $_POST['bottom-email'];
	$timestamp = date("F jS Y, h:iA.", time());
	$ip=$_SERVER['REMOTE_ADDR'];

	// HTML for email to send submission details
	$body = "
	<br>
	<h4>Shar - Bottom Form Registration</h4>
	<p><strong>Email</strong>: $email</p>
	<hr/>
	<p>This form was submitted on <strong>$timestamp</strong> on : <strong>$ip</strong></p>
	";

	// Success Message
	$success = "
	<div class=\"alert alert-success\">
		<a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a>
		<strong>Thank You!</strong> You have successfully subscribed!
	</div>
	";

	$headers = "From: Nini Bottom Form Registration <$email> \r\n";
	$headers .= "Reply-To: $email \r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$message = "<html><body>$body</body></html>";

	if (mail($mailto, $subject, $message, $headers)) {
		echo "$success"; // success
	} else {
		echo 'Form submission failed. Please try again...'; // failure
	}

?>