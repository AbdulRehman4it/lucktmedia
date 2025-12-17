<?php
// send_mail.php
declare(strict_types=1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load .env if exists (optional usage, but we will fallback to server.js hardcoded values as requested)
if (file_exists(__DIR__ . '/.env')) {
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
}

// Read JSON body or form data
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$data = [];
if (stripos($contentType, 'application/json') !== false) {
    $data = json_decode(file_get_contents('php://input'), true) ?: [];
} else {
    $data = $_POST;
}

// Extract variables (matching server.js logic)
$name = isset($data['name']) ? htmlspecialchars(trim($data['name'])) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$subject = isset($data['subject']) ? htmlspecialchars(trim($data['subject'])) : '';
$message = isset($data['message']) ? htmlspecialchars(trim($data['message'])) : '';
$permission = isset($data['permission']) ? htmlspecialchars(trim($data['permission'])) : 'Not provided';

// Setup PHPMailer
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com'; // From server.js
    $mail->SMTPAuth   = true;
    $mail->Username   = 'abdulrehman226721skp@gmail.com'; // From server.js
    $mail->Password   = 'jxoc vrxx hepp zsnx'; // From server.js
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Port 587 usually uses STARTTLS
    $mail->Port       = 587; // From server.js

    // Recipients
    $mail->setFrom('treeconnectsarl@gmail.com', 'Lucky Media Contact'); // From server.js
    
    // Reply To User
    if ($email) {
        $mail->addReplyTo($email, $name);
    }
    
    // To Address
    $mail->addAddress('hi@luckymedia.marketing'); // From server.js

    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject ?: "New Contact Form Submission from " . ($name ?: 'User'); // Similar to server.js

    // HTML Template matching server.js
    $mail->Body    = "
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Subject:</strong> {$subject}</p>
        <p><strong>Permission:</strong> {$permission}</p>
        <p><strong>Message:</strong></p>
        <p>" . nl2br($message) . "</p>
    ";
    
    $mail->AltBody = "New Contact Form Submission\n\nName: {$name}\nEmail: {$email}\nSubject: {$subject}\nPermission: {$permission}\nMessage:\n{$message}";

    $mail->send();
    
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Email sent successfully!']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email.', 'error' => $mail->ErrorInfo]);
}
