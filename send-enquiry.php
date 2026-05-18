<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo "Method not allowed";
    exit;
}

function clean_input($value) {
    return trim(str_replace(array("\r", "\n"), " ", $value ?? ""));
}

$name = clean_input($_POST["name"] ?? "");
$company = clean_input($_POST["company"] ?? "");
$phone = clean_input($_POST["phone"] ?? "");
$email = filter_var(clean_input($_POST["email"] ?? ""), FILTER_VALIDATE_EMAIL);
$service = clean_input($_POST["service"] ?? "");
$budget = clean_input($_POST["budget"] ?? "");
$message = trim($_POST["message"] ?? "");

if (!$name || !$company || !$phone || !$email || !$service || !$budget || !$message) {
    http_response_code(400);
    echo "Please complete all required fields.";
    exit;
}

$to = "teamjayam@jayampublicity.com";
$subject = "New campaign enquiry from " . $name;
$body = "Name: $name\nCompany: $company\nPhone: $phone\nEmail: $email\nService: $service\nBudget: $budget\n\nMessage:\n$message\n";
$headers = "From: Jayam Publicity Website <teamjayam@jayampublicity.com>\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    header("Location: contact.html?sent=1");
    exit;
}

http_response_code(500);
echo "Unable to send enquiry right now. Please call Jayam Publicity directly.";
